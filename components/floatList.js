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
                            if (n < 4) {
                                return (
                                    <TouchableOpacity style={styles.itemContainer} key={i} onPress={
                                        () => navigation.navigate('Categoria')
                                    }>
                                        <View style={styles.shadow}>
                                            <Image style={styles.floatItem} source={data.imagen} />
                                        </View>
                                        <Text style={styles.itemTxt}>{data.txt}</Text>
                                    </TouchableOpacity>
                                )
                            }
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
        marginTop: 2,
        paddingHorizontal: 7,
        backgroundColor: '#fcfcff',
        paddingVertical: 15,
        borderRadius: 5,
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
        marginVertical: 10,
    },
    itemContainer: {
    },
    floatItem: {
        height: 75,
        width: 75,
        borderRadius: 15,
        alignSelf: 'center'
    },
    itemTxt: {
        alignSelf: 'center',
        color: '#333',
        fontSize: 12,
        marginTop: 2,
        alignSelf: 'center'
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
})