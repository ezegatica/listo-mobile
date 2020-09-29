import React from 'react'
import Itodos from '../assets/verTodos.png'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import CatSeleccionada from '../components/catSeleccionada'
import CatDefault from '../components/catDefault'
import firebase, { db } from '../api/firebase'
//<Image source={cat.image}></Image>
export default class CategoriasHeader extends React.Component {
    state = {
        cat: 'default',
        seHace: true,
        restosDeLaCat: null,
    }

    restosDeLaCat = () => {
        db.collection('restaurantes').get()
            .then(snapshot => {
                const Restaurantes = []
                let info
                let id
                let cat
                let cat2
                let categoria = this.state.cat
                snapshot.forEach(doc => {
                    info = doc.data()
                    id = doc.id;
                    cat = doc.data().cat
                    cat2 = doc.data().cat2
                    if (cat == categoria || cat2 == categoria) {
                        Restaurantes.push({ info, id })
                    }
                })
                this.setState({ restosDeLaCat: Restaurantes })
            })
    }
    kcat = () => {
        if (this.state.seHace) {
            if (this.state.cat == 'default') {
                return (
                    <CatDefault data={this.props.data} />
                )
            }
            else if (this.state.cat != 'default') {
                let restosDelaCat = this.state.restosDeLaCat
                //console.log('armando', restosDelaCat)
                //console.log('-------------------------------------------------------------')
                return (
                    <CatSeleccionada data={restosDelaCat} style={styles.test} />
                )

            }
            else if (!this.state.cat) {
                return (
                    <View>
                        <Text>LO QUE ESTAS BUSCANDO NO EXISTE</Text>
                    </View>
                )
            }
        }
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <TouchableOpacity style={styles.catContainer} onPress={() => {
                            this.setState({ cat: 'default', seHace: true })
                            this.restosDeLaCat()
                        }}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.imagen} source={Itodos} />
                            </View>
                            <Text style={styles.catTxt}>ver todos</Text>
                        </TouchableOpacity>
                        {
                            this.props.data.map((cat, i) => {
                                return (
                                    <TouchableOpacity style={styles.catContainer} key={i} onPress={() => {
                                        this.setState({ cat: cat.txt, seHace: true })
                                        this.restosDeLaCat()
                                    }}>
                                        <View style={styles.itemContainer}>
                                            <View style={styles.imageContainer}>
                                                <Image style={styles.imagen} source={cat.image} />
                                            </View>
                                            <Text style={styles.catTxt}>{cat.txt}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {
                    this.kcat()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        backgroundColor: '#fcfcff',
    },
    catContainer: {
        marginHorizontal: 10,
        alignSelf: "center",
    },
    catTxt: {
        textTransform: 'capitalize',
        fontSize: 12,
        color: '#333',
        alignSelf: 'center'
    },
    imagen: {
        height: 65,
        width: 65,
        marginBottom: 6,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        overflow: 'hidden'

    },
    imageContainer: {
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

    }
})