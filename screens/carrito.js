import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { db } from '../api/firebase'
import Loading from '../screens/loading'
import HeaderCarrito from '../components/headerCarrito'

export default class Carrito extends Component {

    render() {
        return (
            <View>
                <HeaderCarrito navigation={this.props.navigation} />
            </View>
        )
    }
}
