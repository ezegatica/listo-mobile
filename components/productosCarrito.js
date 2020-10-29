import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import bg from '../assets/Card.png'
import { AntDesign } from '@expo/vector-icons'
import I from '../assets/carrito.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
export default class ProductosCarrito extends Component {
    state = {
        cantProducto: null,
        precio: null,
        cantTxt: null,
        apretado: false
    }
    componentDidMount() {
        this.setState({ cantProducto: 1, apretado: true })
    }
    componentDidUpdate() {
        if (this.state.apretado == true) {
            this.setState({ apretado: false })
        }
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
    puedeRestar = () => {
        if (this.state.cantProducto <= 1) {
            return true
        }
        else {
            return false
        }
    }
    puedeSumar = () => {
        if (this.state.cantProducto >= 9) {
            return true
        }
        else {
            return false
        }
    }
    pasarPrecio = (a) => {
        if (a == 'menos') {
            this.setState({ cantProducto: this.state.cantProducto - 1, apretado: true })
        }
        else {
            this.setState({ cantProducto: this.state.cantProducto + 1, apretado: true })
        }
    }
    txtCnat = () => {
        if (this.state.apretado) {
            this.props.precioTotal(this.state.cantProducto, this.props.data.precio)
        }
        return this.state.cantProducto
    }
    masYmenos = () => {
        let colorMas
        let colorMenos
        if (this.puedeRestar()) {
            colorMas = '#007AFF'
            colorMenos = '#696969'
        }
        else if (this.puedeSumar()) {
            colorMas = '#696969'
            colorMenos = '#007AFF'
        }
        else {
            colorMas = '#007AFF'
            colorMenos = '#007AFF'
        }
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.iconCont}
                    disabled={this.puedeRestar()}
                    onPress={() => this.pasarPrecio('menos')}>
                    <AntDesign name='minuscircleo' size={23} color={colorMenos} />
                </TouchableOpacity>
                <Text style={styles.cant}>{this.txtCnat()}</Text>
                <TouchableOpacity
                    style={styles.iconCont}
                    disabled={this.puedeSumar()}
                    onPress={() => this.pasarPrecio('mas')}>
                    <AntDesign name='pluscircleo' size={23} color={colorMas} />
                </TouchableOpacity>
                <View style={styles.precioCont}>
                    <Text style={styles.precio}>${this.state.cantProducto * this.props.data.precio}</Text>
                </View>
            </View >
        )
    }
    render() {
        //console.log(this.props.detalles);
        return (
            <View style={styles.screenContainer}>
                <View style={styles.restosCont}>
                    <ImageBackground source={bg} resizeMode='stretch' style={styles.cardContainer}>
                        <View style={styles.row}>
                            <View>
                                {this.hayFoto(this.props.data.foto)}
                            </View>
                            <View style={styles.column}>
                                <Text style={styles.titulo}>{this.props.data.titulo}</Text>
                                {this.masYmenos()}
                            </View>
                        </View>
                    </ImageBackground>
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
    },
    precioCont: {
        alignSelf: 'center',
        marginLeft: 5,
        padding: 5,
        paddingHorizontal: 6,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.46,

        elevation: 1,
    },
    precio: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#007AFF',
        fontSize: 14
    }
})
