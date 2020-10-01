import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import Loading from '../screens/loading'
import Productos from '../screens/productos'
import { TouchableOpacity } from 'react-native-gesture-handler';
import IFruta from '../assets/market2.jpg'
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
    return (
        <View style={globalStyles.screenContainer}>
            <View style={styles.restosContainer}>
                {
                    data.map((r, i) => {
                        let imagen = r.info.foto
                        if (!imagen) {
                            imagen = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                        }
                        return (
                            <TouchableOpacity key={i} style={styles.cont} onPress={() => {
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
                        )
                    })
                }
                <View style={styles.espacio}></View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    cont: {
        width: '100%',
        backgroundColor: '#fcfcff',
        marginVertical: 5,
        paddingVertical: 10,
        borderRadius: 5,
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
        width: 90,
        height: 90,
        marginHorizontal: 10,
        borderRadius: 4,
        overflow: "hidden",
    },
    restosContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '95%'
    },
    espacio: {
        height: 300
    },
    textsContainer: {
        marginLeft: 5,
        marginTop: 5
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1b1b1b'
    },
    categoriaTxt: {
        marginTop: 4,
        fontSize: 15,
        color: '#333',
        textTransform: 'capitalize',

    }
})