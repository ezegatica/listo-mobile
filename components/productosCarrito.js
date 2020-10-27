import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import bg from '../assets/Card.png'
import { AntDesign } from '@expo/vector-icons'
import I from '../assets/carrito.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class ProductosCarrito extends Component {
    state = {
        cantProducto: 1
    }
    hayFoto = (f) => {
        let foto = f
        if (!foto) {
            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
        }
        return (
            <Image style={styles.imagen} source={{ uri: foto }} />
        )
    }
    masYmenos = () => {
        let cant = 1
        let color = '#007AFF'

        return (
            <View style={styles.row}>
                <TouchableOpacity style={styles.iconCont} onPress={() => this.setState({ cantProducto: this.state.cantProducto - 1 })}>
                    <AntDesign name='minuscircleo' size={23} color={color} />
                </TouchableOpacity>
                <Text style={styles.cant}>{this.state.cantProducto}</Text>
                <TouchableOpacity style={styles.iconCont} onPress={() => this.setState({ cantProducto: this.state.cantProducto + 1 })}>
                    <AntDesign name='pluscircleo' size={23} color={color} />
                </TouchableOpacity>
            </View >
        )
    }
    render() {
        // console.log(this.props.data);
        return (
            <View style={styles.screenContainer}>
                <View style={styles.restosCont}>
                    {
                        this.props.data.map((producto, i) => {
                            return (
                                <ImageBackground source={bg} resizeMode='stretch' style={styles.cardContainer} key={i}>
                                    <View style={styles.row}>
                                        <View>
                                            {this.hayFoto(producto.foto)}
                                        </View>
                                        <View style={styles.column}>
                                            <Text style={styles.titulo}>{producto.titulo}</Text>
                                            {this.masYmenos()}
                                        </View>
                                    </View>
                                </ImageBackground>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenContainer: {
        width: '100%'
    },
    restosCont: {
        width: '95%',
        alignSelf: 'center'
    },
    cardContainer: {
        width: '100%',
        marginVertical: 3,
        paddingVertical: 10,
    },
    imagen: {
        height: 90,
        width: 90,
        marginHorizontal: 10,
        borderRadius: 100 / 10,
        overflow: "hidden",
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    iconCont: {
        margin: 3,
        alignSelf: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 17,
    },
    cant: {
        alignSelf: 'center',
        marginHorizontal: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
