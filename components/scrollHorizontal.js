import React from 'react'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class ScrollHorizontal extends React.Component {

    state = {
        categorias: null
    }

    /*organizarDatos = () => {
         this.props.data.map((cat, i) => {
             let Categorias = []
             Categorias.push(cat.txt)
             if (Categorias) {
                 Categorias.map((c, i) => {
                     return (
                         <TouchableOpacity style={styles.scrollItemContainer} key={i} onPress={}>
                             <View style={styles.shadow}>
                                 <Text></Text>
                             </View>
                         </TouchableOpacity>
                     )
                 })
             }
         })
     }
     /*
     {data.map((data, i) => {
                         organizarDatos()
                         return (
                             <TouchableOpacity style={styles.scrollItemContainer} key={i} onPress={}>
                                 <View style={styles.shadow}>
                                     <Image style={styles.scrollItem} source={data.image} />
                                 </View>
                             </TouchableOpacity>
                         )
                     })}
     */
    render() {
        return (
            <View style={styles.container} >
                <View style={styles.scrolContainer}>
                    <View style={styles.titleContainer}>
                        <View style={styles.titleTxtContainer}>
                            <Text style={styles.titleTxt}>HOLA</Text>
                        </View>
                        <View style={styles.xxx}>
                            <View style={styles.verMasView}>
                                <TouchableOpacity style={styles.verMas} onPress={() => {

                                }}>
                                    <Text style={styles.verMasTxt}>ver todos</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.scroll} horizontal={true}>
                        {
                            this.organizarDatos()
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
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

        elevation: 1,
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