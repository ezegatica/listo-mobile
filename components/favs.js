import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import firebase, { db } from '../api/firebase'

export default class Favs extends Component {

    state = {
        favsInfo: [],
        loading: true
    }
    componentDidMount = () => {
        var Favs = []
        var a = []
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                snapshot.data().favoritos.forEach(element => {
                    Favs.push(element)
                })
                Favs.forEach(elemento => {
                    db.collection("restaurantes").doc(elemento).get()
                        .then(snapshot => {
                            a.push(snapshot.data())
                        })
                        .then(() => {
                            this.setState({ favsInfo: a });
                            this.setState({ loading: false })
                        })
                });
            })
    }
    /* card = (fav, i) => {
         if (fav.nombre != undefined) {
             //console.log(i, fav.nombre);
             return true
         }
     }*/

    render() {
        var arrayNombres = []
        this.state.favsInfo.forEach(i => {
            arrayNombres.push(i, " ")
        })
        //console.log('HOLA', arrayNombres);

        if (this.state.loading == true) {
            return (
                <ActivityIndicator style={this.styles.act} size='small'>
                </ActivityIndicator>
            )
        }
        else {
            return (
                <View style={this.styles.cont}>
                    <Text style={this.styles.titulo}>¡Tus favoritos!</Text>
                    <View style={this.styles.linea}></View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scroll}>

                        {
                            arrayNombres.map((fav, i) => {
                                /*let foto = fav.foto
                                if (!foto) {
                                    foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                }*/
                                {
                                    //if (this.card(fav, i)) {
                                    //console.log('hola');
                                    return (
                                        <TouchableOpacity key={i} style={this.styles.fav} onPress={() => {
                                            this.props.navigation.navigate('Categoria')
                                        }}>
                                            <View style={this.styles.fotoV}>
                                            </View>
                                            <Text style={this.styles.tituloFav}>hola</Text>
                                        </TouchableOpacity>
                                    )
                                    // }
                                }

                            })
                        }
                    </ScrollView>

                </View>
            )
        }



    }
    styles = StyleSheet.create({
        cont: {
            alignItems: 'center',
            width: '100%'
        },
        titulo: {
            fontSize: 25,
            margin: 10
        },
        act: {
            alignSelf: 'center',
            marginTop: 50
        },
        scroll: {
            width: '100%',
            alignSelf: 'center'
        },
        fav: {
            marginHorizontal: 8,
        },
        foto: {
            height: 100,
            width: 100,
            alignSelf: "center",
            backgroundColor: '#b1b1b1',
            borderRadius: 10,
        },
        fotoV: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 3.46,
        },
        tituloFav: {
            fontSize: 11,
            alignSelf: 'center',
            margin: 5,
            color: '#000'

        },
        linea: {
            alignSelf: 'center',
            width: '60%',
            backgroundColor: '#4fc3f7',
            padding: 2,
            marginBottom: 15

        }
    })
}
