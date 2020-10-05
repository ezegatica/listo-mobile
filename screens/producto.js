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
            <Image source={{ uri: foto }} style={styles.foto} />
        )
    }
    render() {
        return (
            <View>
                {this.foto()}
                <Text>{this.props.route.params.data.titulo}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    foto: {
        height: 100,
        width: 100,
    }
})