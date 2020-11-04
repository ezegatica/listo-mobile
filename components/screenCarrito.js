import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'
import ProductosCarrito from './productosCarrito'
import { TextInput } from 'react-native-paper';
export default class HeaderCarrito extends Component {
    state = {
        borrado: true,
        carrito: null,
        resto: null,
        infoResto: null,
        infoProductos: null,
        cargando: true,
        detalles: '',
        precios: [],
        metodoDePago: '01',
        data: null,
        cantProductos: [],
        ID: null,
        idea: []
    }
    componentDidMount() {
        this.getCarrito()
    }
    getPrecio = (cant, precio, id,) => {
        this.state.precios.push(cant * precio)
        this.state.cantProductos.push(cant)
        this.setState({ precioTotal: this.getPrecioTotal(), ID: id })
        this.updateCant(id, cant, precio)
    }
    updateCant = (id, cant, precio) => {
        //this.state.carrito[id].cantidad -= this.state.carrito.length
        this.setState({ ID: id })
        this.state.idea.push(id)
        console.log(this.state.idea);
        this.state.carrito[id].cantidad = (parseFloat(this.state.carrito[id].cantidad) + cant).toString();
    }
    getCant = () => {
        let cantidad = 0
        for (let i = 0; i < this.state.cantProductos.length; i++) {
            cantidad += this.state.cantProductos[i]
        }
        return cantidad
    }
    getPrecioTotal = () => {
        let total = 0
        for (let i = 0; i < this.state.precios.length; i++) {
            total += this.state.precios[i]
        }
        return total.toString()
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
                    this.setState({ borrado: false, cargando: false })
                }
                else {
                    this.setState({ borrado: true, carrito: null, cargando: false })
                }
            })
            .catch(err => {
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
            .then(() => {
                //this.getData()
            })
            .catch(err => {
                console.log('ERROR ', err);
            })
    }
    getInfoProductos = () => {
        let i = []
        let a = 0
        let Data = {}
        this.state.carrito.forEach(element => {
            db.collection('restaurantes').doc(this.state.resto).collection('productos').doc(element.producto).get()
                .then(snapshot => {
                    i.push(snapshot.data())
                    this.setState({ infoProductos: i })
                    i.map((info, index) => {
                        let foto = info.foto
                        if (!foto) {
                            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                        }
                        Data = { index: [info.titulo, info.precio, foto] }
                    })
                    if (Data.length >= 2) {
                        Data.shift()
                    }
                    //console.log(Data);
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
            return (<Text style={styles.precio}>Método de pago: Efectivo</Text>)
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
            color = 'red'
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
                this.setState({ infoProductos: null, carrito: null, resto: null, infoResto: null })
            })
            .catch((err) => { console.log(err); })
    }
    nombreResto = () => {
        if (this.state.infoResto) {
            return this.state.infoResto.nombre
        }
        else {
            console.log('error');
            return 'error'
        }
    }
    detalles = () => {
        if (this.state.detalles == '') {
            return 'Vacío'
        }
        else {
            return this.state.detalles
        }
    }
    pedir = () => {
        const resta = this.state.infoProductos.length
        const cantP = this.state.carrito.length
        for (let i = 0; i < cantP; i++) {
            if (this.state.carrito[i].cantidad != '1' && cantP > 1) {
                this.state.carrito[i].cantidad = (parseFloat(this.state.carrito[i].cantidad) - 1).toString()
                console.log('HOLANasfsd', this.state.carrito[i].cantidad);
            }
            else {
                this.state.carrito[i].cantidad = (parseFloat(this.state.carrito[i].cantidad) - resta).toString()
            }
        }
        const Estado = 0
        db.collection('pedidos').add({
            usuario: global.UserUid,
            nombre: global.UserName,
            nombre_restaurante: this.nombreResto(),
            precio: this.getPrecioTotal(),
            productos: this.state.carrito,
            data: this.state.infoProductos,
            comentario: this.detalles(),
            metodo_de_pago: this.state.metodoDePago,
            horario_de_pedido: new Date(),
            cantidad_de_productos: this.getCant(),
            estado: Estado,
            restaurante: this.state.resto
        })
            .then(() => {
                db.collection('usuarios').doc(this.state.resto).update({
                    refresh: {
                        tipo: 'nuevo_pedido',
                        titulo: `Tienes un pedido nuevo!`,
                        random: Math.random(31, 40),
                        hora: Date.now()
                    }
                })
            })

            .then(() => {
                this.clearCarrito()
            })
            .then(() => {
                this.props.navigation.navigate('Pedidos')
            })
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
                    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} bounces={true}>
                        {
                            this.state.infoProductos.map((producto, i) => {
                                return (
                                    <ProductosCarrito
                                        key={i}
                                        id={i}
                                        data={producto}
                                        precioTotal={this.getPrecio}
                                        carrito={this.state.carrito}
                                    />
                                )
                            })
                        }

                    </ScrollView>
                    <TextInput
                        placeholder='Detalles del pedido (opcional)'
                        style={styles.input}
                        mode='flat'
                        selectionColor='#007AFF'
                        multiline={true}
                        onChangeText={(t) => this.setState({ detalles: t })}>
                    </TextInput>
                    <Text style={styles.pf}>Precio final: <Text style={{ color: 'green' }}>${this.getPrecioTotal()}</Text></Text>
                    <TouchableOpacity style={styles.btn} onPress={() => { this.pedir() }}>
                        <Text style={styles.btnTxt}>¡Pedir!</Text>
                    </TouchableOpacity>
                </View >
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
                    <TouchableOpacity style={styles.btnView} onPress={() =>
                        this.props.navigation.navigate('Pedidos')
                    }>
                        <Text style={styles.btnTxt}>¡Ver mis pedidos!</Text>
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
        marginVertical: 3,
        marginLeft: 10,
    },
    titulo: {
        alignSelf: 'flex-start',
        fontSize: 25,
        fontWeight: 'bold'
    },
    linea: {
        width: '100%',
        backgroundColor: '#007aff',
        height: 1,
        borderRadius: 10,
    },
    headerCont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
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
        width: '70%'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    input: {
        height: 45,
        backgroundColor: '#F4F4F4',
        paddingLeft: 10,
        fontSize: 15,
        paddingVertical: 10,
        marginVertical: 5,
        width: '90%',
        alignSelf: 'center'
    },
    scroll: {
        paddingTop: 10
    },
    btn: {
        margin: 10,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 10,
        width: '30%',
    },
    pf: {
        alignSelf: 'center',
        marginTop: 10,
        fontSize: 17
    }
})
