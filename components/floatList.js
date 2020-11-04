import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function FloatList({ navigation, data }) {


    return (
        <View style={styles.container}>
            <View style={styles.floatContainer}>
                <View style={styles.rowContainer}>
                    {
                        data.map((data, i) => {
                            let n = i;
                            return (
                                <View key={i}>
                                    <Text style={styles.itemTxt}>{data.txt}</Text>
                                    <View style={styles.linea}></View>
                                    <TouchableOpacity style={styles.itemContainer} onPress={
                                        () => navigation.navigate('Categoria')
                                    }>

                                        <View style={styles.shadow}>
                                            <Image style={styles.floatItem} source={data.imagen} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.rowContainer}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    floatContainer: {
        paddingHorizontal: 7,
        borderRadius: 5,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 2.46,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    itemContainer: {
        width: '100%',
    },
    floatItem: {
        height: 220,
        width: 300,
        borderRadius: 15,
        alignSelf: 'center'
    },
    itemTxt: {
        alignSelf: 'center',
        fontSize: 25,
        alignSelf: 'center',
        margin: 10
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    linea: {
        alignSelf: 'center',
        width: '60%',
        backgroundColor: '#007aff',
        padding: 2,
        marginBottom: 15

    }
})