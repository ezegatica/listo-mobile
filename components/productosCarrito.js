import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
//import bg from '../assets'
import I from '../assets/carrito.png'
export default class ProductosCarrito extends Component {

    hayFoto = (f) => {
        let foto = f
        if (!foto) {
            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
        }
        return (
            <Image style={styles.imagen} source={{ uri: foto }} />
        )
    }
    render() {
        // console.log(this.props.data);
        return (
            <View style={styles.screenContainer}>
                {
                    this.props.data.map((producto, i) => {
                        return (
                            <View style={styles.cardContainer} key={i}>
                                <View>
                                    <View>
                                        {this.hayFoto(producto.foto)}
                                    </View>
                                    <Text>{producto.titulo}</Text>
                                </View>
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
        padding: 10,
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: 'red'
    },
    imagen: {
        height: 90,
        width: 90,
        marginHorizontal: 10,
        borderRadius: 100 / 10,
        overflow: "hidden",
    }
})
