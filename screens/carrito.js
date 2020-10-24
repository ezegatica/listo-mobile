import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { db } from '../api/firebase'
import Loading from '../screens/loading'

export default class Carrito extends Component {
    state = {
        carrito: null,
        resto: null,
        infoResto: null,
        infoProductos: null,
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
            .catch(err => {
                console.log('ERROR..', err)
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
        this.state.carrito.forEach(element => {
            db.collection('restaurantes').doc(this.state.resto).collection('productos').doc(element.producto).get()
                .then(snapshot => {
                    this.setState({ infoProductos: snapshot.data() })
                })
                .catch(err => {
                    console.log(err);
                })
        })

    }
    render() {
        if (this.state.infoProductos) {
            //console.log('XD', productos);
            return (
                <View>

                </View>
            )
        }
        else {
            return <Loading />
        }
    }
}
