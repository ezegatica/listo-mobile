import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { db } from '../api/firebase'
import Loading from './loading'
import CardProducto from '../components/cardProducto'

export default class Productos extends Component {

    state = {
        productos: null
    }
    componentDidMount() {
        //console.log('PROPS: ', this.props);
        db.collection('restaurantes').doc(this.props.route.params.resto).collection('productos').get()
            .then(snapshot => {
                const Productos = []
                snapshot.forEach(doc => {
                    const info = doc.data()
                    const id = doc.id;
                    Productos.push({ info, id })
                })
                this.setState({ productos: Productos })
            }).catch(error => console.log(error))
    }
    render() {
        if (this.state.productos) {
            return (
                <View>
                    <CardProducto data={this.state.productos} headerProps={this.props.route.params} navigation={this.props.navigation} />
                </View>
            )
        }
        else if (!this.state.propductos) {
            return (
                <Loading />
            )
        }

    }
}

