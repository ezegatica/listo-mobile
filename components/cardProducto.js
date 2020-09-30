import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//Arregñar que no se muestran los 3 puntitos
export default class CardProducto extends Component {
    render() {

        return (
            <View>
                <View style={styles.prodsContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            this.props.data.map((r, i) => {
                                let foto = r.info.foto
                                if (!foto) {
                                    foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                }
                                return (
                                    <TouchableOpacity key={i} style={styles.cont}>
                                        <View style={styles.prodContainer}>
                                            <Image source={{ uri: foto }} style={styles.foto} />
                                            <View style={styles.textsContainer}>
                                                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.nombre}>{r.info.titulo}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
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
    prodsContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '95%'
    },
    foto: {
        height: 90,
        width: 90,
    },
    prodContainer: {
        flexDirection: 'row'
    },
    nombre: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#1b1b1b'
    },
    textsContainer: {
        marginLeft: 5,
        marginTop: 5
    },
})