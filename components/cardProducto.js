import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderProductos from '../components/headerProductos'
import Ibg from '../assets/Card.png'


//Arregñar que no se muestran los 3 puntitos
export default class CardProducto extends Component {
    hayLinea = (i) => {
        if (this.props.data[i + 1] != undefined) {
            return <View style={styles.linea2}></View>

        }
    }
    render() {

        return (
            <View>
                <HeaderProductos data={this.props.headerProps} />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <View style={styles.prodsContainer}>

                        {
                            this.props.data.map((r, i) => {
                                let foto = r.info.foto
                                if (!foto) {
                                    foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                }
                                return (
                                    <View key={i} source={Ibg} style={styles.cont} resizeMode='stretch' >
                                        <TouchableOpacity onPress={() => {
                                            this.props.navigation.navigate('Producto', {
                                                data: r.info,
                                                uid: r.id,
                                            })
                                        }}>
                                            <View style={styles.prodContainer}>
                                                <View style={styles.fotoView}>
                                                    <Image source={{ uri: foto }} style={styles.foto} />
                                                </View>
                                                <View style={styles.textsContainer}>
                                                    <View>
                                                        <Text ellipsizeMode='tail' numberOfLines={1} style={styles.nombre}>{r.info.titulo}</Text>
                                                    </View>
                                                    <View style={styles.precioV}>
                                                        <Text style={styles.precio}>${r.info.precio}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        {this.hayLinea(i)}
                                    </View>

                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        height: '100%',
        paddingTop: 15
    },
    cont: {
        width: '100%',
        marginVertical: 3,
    },
    prodsContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '95%'
    },
    foto: {
        backgroundColor: '#fff',
        height: 80,
        width: 80,
        marginHorizontal: 10,
        borderRadius: 100 / 10,
        overflow: "hidden",
    },
    fotoView: {
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
    prodContainer: {
        flexDirection: 'row'
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
    },
    textsContainer: {
        marginLeft: 5,
        marginTop: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    precioV: {
        backgroundColor: '#007aff',
        borderRadius: 10
    },
    precio: {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },
    espacio: {
        paddingVertical: 150
    },
    linea2: {
        backgroundColor: '#c4c4c4',
        height: 2,
        width: '95%',
        alignSelf: "center",
        marginVertical: 18,
        borderRadius: 10
    }
})