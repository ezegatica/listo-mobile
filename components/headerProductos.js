import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class HeaderProductos extends Component {

    imagen = () => {
        let foto
        if (this.props.data.foto != undefined) {
            foto = this.props.data.foto
            return foto
        }
        else {
            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
            return foto

        }
    }
    cat = () => {
        if (this.props.data.cat2 != '') {
            return (<Text style={styles.categoria} >{this.props.data.cat}, {this.props.data.cat2}</Text>)
        }
        else {
            return (<Text style={styles.categoria} >{this.props.data.cat}</Text>)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.fotoView}>
                    <Image style={styles.foto} source={{ uri: this.imagen() }} />
                </View>
                <View style={styles.linea}></View>
                <View style={styles.test}>
                    <Text style={styles.titulo}>{this.props.data.nombre}</Text>
                    {this.cat()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.7,
    },
    fotoView: {
        paddingVertical: 10,
        marginLeft: 20,
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
        height: 75,
        width: 75,
        borderRadius: 100 / 4,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        paddingVertical: 5
    },
    test: {
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    linea: {
        backgroundColor: '#4fc3f7',
        marginHorizontal: 15,
        padding: 3,
        height: '80%',
        alignSelf: 'center',
        borderRadius: 5
    },
    categoria: {
        fontSize: 16,
        color: '#4F94CD',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
})






