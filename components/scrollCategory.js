import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function ScrollCategorias({ title, data, navigation }) {
    return (
        <View style={styles.container} >
            <View style={styles.scrolContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleTxt}>{title}</Text>
                    <View style={styles.verMasView}>
                        <TouchableOpacity style={styles.verMas}>
                            <Text style={styles.verMasTxt}>ver todos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll} horizontal={true}>
                    {data.map((data, i) => {
                        let n = i;
                        return (
                            <TouchableOpacity style={styles.scrollItemContainer} key={i} onPress={
                                () => navigation.navigate('Categoria', {
                                    name: n,
                                })
                            }>
                                <Image style={styles.scrollItem} source={data.image} />
                                <Text style={styles.itemTxt}>{data.txt}</Text>
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
        marginTop: 30,
    },
    titleTxt: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 18,
        marginHorizontal: 10,
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
        height: 95,
        width: 95,
        borderRadius: 15,
        shadowColor: "#000",
    },
    itemTxt: {
        fontSize: 14,
        paddingTop: 3,
        alignSelf: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
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
    verMasTxt: {
        paddingHorizontal: 7,
        fontSize: 16,
        color: '#72bcd4',
        fontWeight: '700'

    },
    verMasView: {
        alignContent: 'center',
        justifyContent: "center",
        marginLeft: 150,
        marginBottom: 18,
        marginRight: 20,
    },

})