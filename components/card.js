import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import Loading from '../screens/loading'
import Productos from '../screens/productos'
import Ibg from '../assets/Card.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import IFruta from '../assets/market2.jpg'
import { set } from 'react-native-reanimated';

export default function Card({ data, navigation }) {
    const categoriaTxt = (r) => {
        if (r.info.cat2 == "") {
            return (
                <View>
                    <Text style={styles.categoriaTxt}>{r.info.cat}</Text>
                </View>
            )
        }
        else if (r.info.cat2 != "") {
            return (
                <View>
                    <Text style={styles.categoriaTxt}>{r.info.cat}, {r.info.cat2}</Text>
                </View>
            )
        }
    }
    const haylinea = (i) => {
        if (data[i + 1] != undefined) {
            return <View style={styles.linea2}></View>

        }
    }
    return (
        <View style={{ marginTop: 15 }}>
            <View style={styles.restosContainer}>
                {
                    data.map((r, i) => {
                        let imagen = r.info.foto
                        if (!imagen) {
                            imagen = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                        }
                        return (
                            <View key={i} source={Ibg} style={styles.cont} resizeMode='stretch' >
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Productos', {
                                        resto: r.id,
                                        nombre: r.info.nombre,
                                        foto: r.info.foto,
                                        cat: r.info.cat,
                                        cat2: r.info.cat2,
                                    })
                                }}>
                                    <View style={styles.cardContainer}>
                                        <View style={styles.fotoView}>
                                            <Image source={{ uri: imagen }} style={styles.foto} />
                                        </View>
                                        <View style={styles.textsContainer}>
                                            <Text style={styles.nombre}>{r.info.nombre}</Text>
                                            {categoriaTxt(r)}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                {haylinea(i)}
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cont: {
        width: '100%',
    },
    cardContainer: {
        flexDirection: 'row',
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
    nombreContainer: {
        marginHorizontal: 10,

    },
    foto: {
        width: 77,
        height: 77,
        marginHorizontal: 10,
        borderRadius: 100 / 10,
        overflow: "hidden",
    },
    restosContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '95%'
    },
    textsContainer: {
        marginLeft: 5,
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000'
    },
    categoriaTxt: {
        marginTop: 6,
        fontSize: 13,
        color: '#4F94CD',
        fontWeight: 'bold',
        textTransform: 'capitalize',
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