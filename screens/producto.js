import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'
export default class Producto extends React.Component {
    state = {
        carrito: null,
        cargando: false,
        agregado: false,
    }
    componentWillUnmount() {
        this.setState({ carrito: null, agregado: false })
        //console.log('SE DESMONTA');
    }
    componentDidMount() {
        this.getResto()
    }
    agregarAlCarrito = () => {
        const resto = this.props.route.params.data.autorUUID
        const producto = this.props.route.params.uid
        //console.log('UID...', uid);
        db.collection('usuarios').doc(global.UserUid).update({
            'cart': firebase.firestore.FieldValue.arrayUnion({
                restaurante: resto,
                producto: producto,
                cantidad: '1',
            })
        })
            .then(() => {
                Alert.alert(
                    'Producto agregado!',
                    'Se pueden especificar los detalles y la cantidad del producto en el carrito'
                )
                this.setState({ agregado: true })
            })
            .then(() => {
                this.props.navigation.goBack()
            })
            .catch((err) => {
                console.log('ERROR: ', err);
                alert('ups:(', 'Error al agregar carrito')

            })
    }
    getResto = () => {
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                //console.log(snapshot.data().cart)
                this.setState({ carrito: snapshot.data().cart })
            })
            .catch((err) => {
                console.log('ERROR: ', err);
            })
        this.setState({ cargando: false })
    }
    chek = () => {
        let esIgual
        if (this.state.carrito) {
            this.state.carrito.map((item, i) => {
                if (item.producto == this.props.route.params.uid) {
                    esIgual = true
                    //console.log(esIgual);
                }
                else {
                    esIgual = false
                }
            })
        }
        if (this.state.carrito && this.state.carrito.length >= 0 && this.state.carrito[0].restaurante != this.props.route.params.data.autorUUID) {
            Alert.alert(
                'Ups:(',
                'Parece que ya tenés productos de otro local en el carrito, ¿Desea limpiar el carrito para agregar este?',
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Ok",
                        onPress: () => this.clearCarrito(),
                        style: "Ok"
                    }
                ],
            )
        }
        else if (esIgual || this.state.agregado) {
            //console.log('es igual');
            this.props.navigation.goBack()
            Alert.alert(
                'Ups:(',
                'Parece que ya tenés este producto en tu carrito, le podes cambiar la cantidad en el carrito'
            )
        }
        else {
            this.agregarAlCarrito()
        }

    }
    clearCarrito = () => {
        db.collection('usuarios').doc(global.UserUid).update({
            "cart": firebase.firestore.FieldValue.delete()
        }).then(() => {
            this.agregarAlCarrito()
        }).catch((err) => { console.log(err); })
    }
    foto = () => {
        //console.log(this.props.route.params.data);
        let foto = this.props.route.params.data.foto
        if (foto != undefined) {
        }
        else {
            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
        }
        return (
            <View style={styles.fotoContainer}>
                <Image source={{ uri: foto }} style={styles.foto} />
            </View>

        )
    }
    render() {
        if (!this.state.cargando) {
            return (
                <View style={styles.screenContainer}>
                    <View style={styles.prodContainer}>
                        <View style={styles.txtView}>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text style={styles.titulo}>{this.props.route.params.data.titulo}</Text>
                                <View style={styles.precioV}>
                                    <Text style={styles.precio}>${this.props.route.params.data.precio}</Text>
                                </View>
                            </View>
                            <Text style={styles.descripcion}>{this.props.route.params.data.descripcion}</Text>
                        </View>
                        <View>
                            {this.foto()}
                            <TouchableOpacity style={styles.btn} onPress={() => {
                                this.chek()
                            }}>
                                <Text style={styles.btnTxt}>Agregar al carrito</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }
        else {
            return <Loading />
        }
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        alignContent: 'center',
        width: '100%',
        height: '100%'
    },
    prodContainer: {
        backgroundColor: '#f4f4f4',
        marginTop: 10,
        width: '100%',
        borderRadius: 15,
        padding: 10,
    },
    foto: {
        height: 220,
        width: 220,
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: '#fff'
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 5
    },
    fotoContainer: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    txtView: {
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },
    descripcion: {
        fontSize: 16,
        color: '#333',
        alignSelf: 'center',
        marginVertical: 10,
        marginHorizontal: 10
    },
    precioV: {
        backgroundColor: '#007aff',
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: 5,
    },
    precio: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 15,
    },
    btn: {
        alignSelf: 'center',
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 10,
        margin: 20
    },
    btnTxt: {
        alignItems: 'center',
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    }
})