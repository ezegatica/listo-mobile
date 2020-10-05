import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Producto extends Component {

    foto = () => {
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
        return (
            <View style={styles.screenContainer}>
                <View style={styles.prodContainer}>
                    <Text style={styles.titulo}>{this.props.route.params.data.titulo}</Text>
                    <Text style={styles.descripcion}>{this.props.route.params.data.descripcion}</Text>
                    <Text style={styles.precio}> $ {this.props.route.params.data.precio}</Text>
                    {this.foto()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        alignContent: 'center',
    },
    prodContainer: {
        backgroundColor: '#f1f1f1',
        marginTop: 10,
        width: '91%',
        alignSelf: 'center',
        borderRadius: 15,
        padding: 10,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    foto: {
        height: 220,
        width: 220,
        alignSelf: "center",
        borderRadius: 15
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 5,
        fontWeight: 'bold'
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
    descripcion: {
        fontSize: 18,
        color: '#4F94CD',
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10,

    },
    precio: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 20,
        alignSelf: 'center'
    }
})