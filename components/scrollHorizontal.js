import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function ScrollHorizontal({ title, data, navigation }) {
    return (
        <View style={styles.container} >
            <View style={styles.scrolContainer}>
                <View style={styles.titleContainer}>
                    <View style={styles.titleTxtContainer}>
                        <Text style={styles.titleTxt}>{title}</Text>
                    </View>
                    <View style={styles.xxx}>
                        <View style={styles.verMasView}>
                            <TouchableOpacity style={styles.verMas}>
                                <Text style={styles.verMasTxt}>ver todos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll} horizontal={true}>
                    {data.map((data, i) => {
                        let n = i;
                        return (
                            <TouchableOpacity style={styles.scrollItemContainer} key={i} onPress={
                                () => navigation.navigate('Categoria', {
                                    num: n,
                                    nombre: data.txt,
                                    locales: data.locales,
                                })
                            }>
                                <View style={styles.shadow}>
                                    <Image style={styles.scrollItem} source={data.image} />
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    scrolContainer: {
        marginTop: 2,
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
    titleTxt: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 18,
    },
    scroll: {
        marginBottom: 0
    },
    scrollItemContainer: {
        paddingHorizontal: 10,
        alignSelf: 'center',
        alignItems: 'center'
    },
    scrollItem: {
        height: 77,
        width: 77,
        marginBottom: 6,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2.46,

    },
    itemTxt: {
        fontSize: 13,
        paddingTop: 3,
        alignSelf: 'center',
        color: '#333'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    verMas: {
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 3.46,

        elevation: 9,
    },
    titleTxtContainer: {
        marginLeft: 15
    },
    verMasTxt: {
        paddingHorizontal: 7,
        fontSize: 16,
        color: '#4fc3f7',
        fontWeight: '700'

    },
    verMasView: {
        justifyContent: "center",
        marginBottom: 18,
        marginRight: 15,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),

    },
})