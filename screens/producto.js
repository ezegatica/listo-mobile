import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Producto extends Component {

    render() {
        let foto = this.props.route.params.data.foto
        return (
            <View>
                <Image source={{ uri: foto }} style={StyleSheet.foto} />
                <Text>{this.props.route.params.data.titulo}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    foto: {

    }
})