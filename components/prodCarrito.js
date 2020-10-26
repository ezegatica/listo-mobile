import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProdCarrito extends Component {
    render() {
        return (
            <View style={styles.screenContainer}>
                <Text style={styles.titulo}>Carrito</Text>
                <View style={styles.linea}></View>
                {

                    this.props.data.map((prod, i) => {
                        return (
                            <View key={i}>
                                <Text>{prod.titulo}</Text>
                                <Text>{prod.precio}</Text>
                            </View>
                        )
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%'
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 15,
        fontWeight: 'bold'
    },
    linea: {
        width: '30%',
        backgroundColor: '#4fc3f7',
        height: 7,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
})
