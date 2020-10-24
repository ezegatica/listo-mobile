import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { db } from '../api/firebase'
import Loading from '../screens/loading'

export default class Carrito extends Component {
    state = {
        carrito: null
    }
    componentDidMount() {
        this.getCarrito()
    }
    getCarrito() {
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                this.setState({ carrito: snapshot.data().cart })
            })
            .catch(err => {
                //this.setState({ carrito: 'no hay nada' })
                console.log('ERROR..', err)
            })
    }

    render() {
        if (this.state.carrito && this.state.carrito[0]) {
            return (
                <View>
                    {
                        this.state.carrito.map((item, i) => {
                            return (
                                <Text key={i}>{item.producto}</Text>
                            )
                        })
                    }
                </View>
            )
        }
        else {
            return <Loading />
        }
    }
}
