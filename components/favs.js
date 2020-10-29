import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
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
                        this.setState({favsInfo:a});
                        this.setState({loading:false})
                    }) 
                });
            })
    }

    tarjeta = (name,categoria) => {
        return(
            <View>
                <Text>{name}</Text>
                <Text>{categoria}</Text>
            </View>
            
        )
    }

    render() {
        var arrayNombres = []
        this.state.favsInfo.forEach(i =>{
            arrayNombres.push(i.nombre," ")
        })


        if(this.state.loading == true){
            return(
            <ActivityIndicator style={this.styles.act} size='large'>
            </ActivityIndicator>
            )
        }
        //ESTA LINEA NO FUNCIONA NO ENTIENDOOOOOOOOOOOOOOOOOOO
        else{
            return(
                    <View>
                        <Text>{arrayNombres}</Text>
                    </View>
                )
        }
        
        
       
    }
    styles = StyleSheet.create({
        act: {
            alignSelf: 'center'
        },
    })
}
