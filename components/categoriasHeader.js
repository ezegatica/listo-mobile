import React from 'react'
import Itodos from '../assets/verTodos.png'
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import CatSeleccionada from '../components/catSeleccionada'
import CatDefault from '../components/catDefault'
import firebase, { db } from '../api/firebase'
import { ThemeProvider } from '@react-navigation/native'
import Loading from '../screens/loading'
//<Image source={cat.image}></Image>
export default class CategoriasHeader extends React.Component {
    state = {
        cat: 'default',
        loading: true,
        restosDeLaCat: null,
        todosLosRestos: null,
    }

    componentDidMount() { //pongo todos los restos aca xq lo hace solo una ves
        db.collection('restaurantes').get()
            .then(snapshot => {
                const Todos = []
                let info
                let id
                snapshot.forEach(doc => {
                    info = doc.data()
                    id = doc.id;
                    Todos.push({ info, id })
                })
                this.setState({ todosLosRestos: Todos })
            })
            .catch(err => console.log('ERROR', err))
    }

    restosDeLaCat = () => {
        //se hace cada vez que se cambia de categoria
        this.setState({ restosDeLaCat: null })
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
        if (this.state.cat == 'default') {
            return (
                <CatDefault data={this.state.todosLosRestos} navigation={this.props.navigation} />
            )
        }
        else if (this.state.cat != 'default') {
            let restosDelaCat = this.state.restosDeLaCat
            //console.log('armando', restosDelaCat)
            //console.log('-------------------------------------------------------------')
            return (
                <CatSeleccionada data={restosDelaCat} navigation={this.props.navigation} />
            )

        }
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} >
                        <TouchableOpacity style={styles.catContainer} onPress={() => {
                            this.setState({ cat: 'default' })
                            this.restosDeLaCat()
                        }}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.imagen} source={Itodos} />
                            </View>
                            <Text style={styles.catTxt}>todos</Text>
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
        backgroundColor: '#ffffff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.7
    },
    catContainer: {
        marginHorizontal: 10,
        alignSelf: "center",
    },
    catTxt: {
        textTransform: 'capitalize',
        fontSize: 10,
        color: 'gray',
        alignSelf: 'center'
    },
    imagen: {
        height: 60,
        width: 60,
        marginBottom: 6,
        borderRadius: 100 / 4,
        alignSelf: 'center',
        overflow: 'hidden',
        borderColor: '#4fc3f7',
        borderWidth: 0.2,
    },
    imageContainer: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),

    }
})