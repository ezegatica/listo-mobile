import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderProductos from '../components/headerProductos'
import Ibg from '../assets/Card.png'


//Arregñar que no se muestran los 3 puntitos
export default class CardProducto extends Component {
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
                                    <ImageBackground key={i} source={Ibg} style={styles.cont} resizeMode='stretch' >
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
                                                    <View>
                                                        <Text style={styles.precio}>${r.info.precio}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
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
        marginBottom: 189
    },
    cont: {
        width: '100%',
        marginVertical: 3,
        paddingVertical: 10,
    },
    prodsContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '95%'
    },
    foto: {
        height: 90,
        width: 90,
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
    precio: {
        color: 'green',
        fontSize: 15,
    },
    espacio: {
        paddingVertical: 150
    },
})