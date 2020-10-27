import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ProductosCarrito extends Component {

    hayFoto = () => {
        this.props.data.forEach((prod) => {
            let foto = prod.foto
            if (!foto) {
            }
            return (<Image source={{ uri: foto }} style={styles.imagen} />)
        })
    }
    render() {
        return (
            <View style={styles.screenContainer}>
                {
                    this.props.data.map((producto, i) => {
                        return (
                            <View style={styles.cardContainer} key={i}>
                                <View style={styles.imagen}>
                                    {this.props.data.forEach(prod => {
                                        let foto = prod.foto
                                        if (foto == "" || !foto) {
                                            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                        }
                                        <Image source={{ uri: foto }} style={styles.imagen} />
                                    })}
                                </View>
                                <Text>{producto.titulo}</Text>
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
    cardContainer: {
        backgroundColor: 'red',
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10
    },
    imagen: {
        height: 90,
        width: 90,
        marginHorizontal: 10,
        borderRadius: 100 / 10,
        overflow: "hidden",
        backgroundColor: 'blue'
    }
})
