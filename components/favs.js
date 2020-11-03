import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Image } from 'react-native';
import firebase, { db } from '../api/firebase'

export default class Favs extends Component {

    state = {
        favsInfo: [],
        loading: true,
        vacio: true
    }
    componentDidMount = () => {
        var Favs = []
        var a = []
        //console.log("entro")
        db.collection('usuarios').doc(global.UserUid).onSnapshot(
            snapshot => {
                Favs = []
                a = []
                if (snapshot.data().favoritos) {

                    snapshot.data().favoritos.forEach(element => {
                        Favs.push(element)
                    })
                    Favs.forEach(elemento => {
                        db.collection("restaurantes").doc(elemento).get()
                            .then(snapshot => {
                                a.push(snapshot.data())
                            })
                            .then(() => {
                                this.setState({ favsInfo: a, vacio: false, loading: false });
                            })
                    });
                }
                else {
                    this.setState({ loading: false, vacio: true })
                }
            })
    }
    render() {
        var arrayNombres = []
        var arrayID = []
        this.state.favsInfo.forEach(i => {
            arrayNombres.push(i)
            arrayID.push(i.id)
        })
        //console.log('HOLA', arrayNombres);

        if (this.state.loading == true) {
            return (
                <ActivityIndicator style={this.styles.act} size='small'>
                </ActivityIndicator>
            )
        }
        else if (!this.state.loading && !this.state.vacio) {
            return (
                <View style={this.styles.cont}>
                    <Text style={this.styles.titulo}>¡Tus favoritos!</Text>
                    <View style={this.styles.linea}></View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={this.styles.scroll}>

                        {
                            arrayNombres.map((fav, i) => {
                                var j = fav
                                //console.log(fav)
                                if (fav) {
                                    let foto = fav.foto
                                    if (!foto) {
                                        foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                    }
                                    //<Image source={{ uri: foto }} style={this.styles.foto}></Image>

                                    {
                                        return (
                                            <TouchableOpacity key={i} style={this.styles.fav} onPress={() => {
                                                console.log(j.id);
                                                var str = j.id.replace(/\s+/g, '');
                                                this.props.navigation.navigate('Productos',{
                                                    resto: str,
                                                    nombre: fav.nombre,
                                                    foto: fav.foto,
                                                    cat: fav.cat,
                                                    cat2: fav.cat2,})
                                            }}>
                                                <Image source={{ uri: foto }} style={this.styles.foto}></Image>
                                                <Text style={this.styles.tituloFav}>{fav.nombre}</Text>
                                            </TouchableOpacity>
                                        )
                                        //}
                                    }
                                }
                            })
                        }
                    </ScrollView>

                </View>
            )
        }
        else {
            return <Text>No tienes favoritos :(</Text>
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
            alignSelf: 'center',
            marginTop: 10
        },
        fav: {
            marginHorizontal: 8,
            backgroundColor: '#E4DEE3',
            borderRadius: 6,
        },
        foto: {
            height: 100,
            width: 200,
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
            fontSize: 14,
            alignSelf: 'center',
            margin: 5,
            color: '#000',
            fontWeight: 'bold'
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
