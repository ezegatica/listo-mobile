import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'
import ProductosCarrito from './productosCarrito'
export default class HeaderCarrito extends Component {
    state = {
        borrado: true,
        carrito: null,
        resto: null,
        infoResto: null,
        infoProductos: null,
        cargando: true
    }
    componentDidMount() {
        this.getCarrito()
    }
    getCarrito() {
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                this.setState({ carrito: snapshot.data().cart, resto: snapshot.data().cart[0].restaurante })
            })
            .then(() => {
                this.getInfoResto()
            })
            .then(() => {
                if (this.state.carrito) {
                    //console.log('hay carrito');
                    this.setState({ borrado: false, cargando: false })
                }
                else {
                    this.setState({ borrado: true, carrito: null, cargando: false })
                }
            })
            .catch(err => {
                //console.log('ERROR..', err)
                this.setState({ cargando: false })
            })
    }
    getInfoResto = () => {
        db.collection('restaurantes').doc(this.state.resto).get()
            .then(snapshot => {
                //console.log(snapshot.data().nombre)
                this.setState({ infoResto: snapshot.data() })
            })
            .then(() => {
                this.getInfoProductos()
            })
            .catch(err => {
                console.log('ERROR ', err);
            })
    }
    getInfoProductos = () => {
        let i = []
        this.state.carrito.forEach(element => {
            db.collection('restaurantes').doc(this.state.resto).collection('productos').doc(element.producto).get()
                .then(snapshot => {
                    i.push(snapshot.data())
                    //console.log('ESTO ES I', i);
                    this.setState({ infoProductos: i })
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }
    precio = () => {
        let precios = []
        let precioFinal = 0
        if (this.state.infoProductos) {
            this.state.infoProductos.forEach(element => {
                precios.push(element.precio)
            })
            for (let i = 0; i < precios.length; i++) {
                precioFinal += parseFloat(precios[i])
            }
            return (<Text style={styles.precio}>${precioFinal}</Text>)
        }
        else {
            return (<Text style={styles.precio}>no hay productos cargados en el carrito</Text>)
        }
    }
    hayTacho = () => {
        let color
        let iconName = 'delete'
        if (this.state.borrado) {
            color = 'black'
            return (
                <ActivityIndicator size='small' />
            )
        }
        else {
            color = '#007AFF'
            return (
                <TouchableOpacity onPress={() => {
                    this.setState({ cargando: false })
                    this.clearCarrito()
                    this.setState({ borrado: true }
                    )
                }}>
                    <AntDesign name={iconName} size={25} color={color} />
                </TouchableOpacity>
            )
        }
    }
    clearCarrito = () => {
        db.collection('usuarios').doc(global.UserUid).update({
            "cart": firebase.firestore.FieldValue.delete()
        })
            .then(() => {
                //console.log('HOLA LL');
                this.setState({ infoProductos: null, carrito: null, resto: null, infoResto: null })
            })
            .catch((err) => { console.log(err); })

        // console.log('arreglar esto');
        //console.log(this.state);
    }
    render() {
        if (this.state.infoProductos) {
            return (
                <View style={styles.screenContainer}>
                    <View style={styles.headerCont}>
                        <View style={styles.tituloV}>
                            <Text style={styles.titulo}>Carrito</Text>
                            {this.precio()}
                        </View>
                        <View style={styles.icono}>
                            {
                                this.hayTacho()
                            }
                        </View>
                    </View>
                    <View style={styles.linea}></View>
                    <ProductosCarrito data={this.state.infoProductos} />
                </View>
            );
        }
        else if (!this.state.cargando && !this.state.carrito) {
            return (
                <View style={styles.noExisteV}>
                    <Text style={styles.noExiste}>El carrito está vacío :(</Text>
                    <TouchableOpacity style={styles.btnView} onPress={() =>
                        this.props.navigation.navigate('Inicio')
                    }>
                        <Text style={styles.btnTxt}>¡Comprar productos!</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else {
            return (<Loading />)
        }
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%'
    },
    tituloV: {
        marginVertical: 5,
        marginLeft: 10,
    },
    titulo: {
        alignSelf: 'flex-start',
        fontSize: 25,

        fontWeight: 'bold'
    },
    linea: {
        width: '100%',
        backgroundColor: '#4fc3f7',
        height: 7,
        borderRadius: 10,
        marginBottom: 10
    },
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icono: {
        alignSelf: 'center',
        marginRight: 16,
    },
    precio: {
        color: '#333',
        fontSize: 14,
        marginTop: 4
    },
    noExisteV: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    noExiste: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    btnView: {
        margin: 10,
        alignSelf: 'center',
        padding: 15,
        backgroundColor: '#007AFF',
        borderRadius: 20,
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})
