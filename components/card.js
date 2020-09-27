import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import Loading from '../screens/loading'
import { TouchableOpacity } from 'react-native-gesture-handler';
import IFruta from '../assets/market2.jpg'
export default class Cards extends React.Component {

    render() {
        if (this.props.data) {
            return (
                <View style={globalStyles.screenContainer}>
                    <View style={styles.restosContainer}>
                        {
                            this.props.data.map((r, i) => {
                                let foto = r.info.foto
                                if (!foto) {
                                    foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                }
                                return (
                                    <View key={i} style={styles.cont}>
                                        <TouchableOpacity style={styles.restoContainer}>
                                            <ImageBackground style={styles.imagenFondo} source={{ uri: foto }}>
                                                <View style={styles.txtContainer}>
                                                    <Text style={styles.fotoTxt}>{r.info.nombre}</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.loadingContainer}>
                    <Loading />
                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    loadingContainer: {
        width: '100%',
        height: 700,
        alignItems: "center",
        justifyContent: 'center'
    },
    cardContainer: {
        width: '100%',
        backgroundColor: '#fcfcff',
        marginVertical: 2,
        paddingVertical: 30,
        borderRadius: 5,
        justifyContent: 'center',
    },
    nombreContainer: {
        marginHorizontal: 10,

    },
    imagenFondo: {
        width: 400,
        height: 100,
        marginHorizontal: 10,
        marginVertical: 3,
        borderRadius: 10,
        overflow: "hidden",
    },
    cont: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.46,
    },
    restosContainer: {
        justifyContent: 'center',
    },
    txtContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 6,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.46,
    },
    fotoTxt: {
        alignSelf: "center",
        color: 'black',
        fontWeight: '700',
        fontSize: 17,
        padding: 5,
    }
})