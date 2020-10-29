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
        if(this.state.loading == true){
            return(
            <ActivityIndicator style={this.styles.act} size='large'>
            </ActivityIndicator>
            )
        }
        console.log(this.state.favsInfo)
        //ESTA LINEA NO FUNCIONA NO ENTIENDOOOOOOOOOOOOOOOOOOO
        if(this.state.favsInfo.length >0){
            return(
                    <View>
                        <Text>{this.state.favsInfo[0].nombre}</Text>
                    </View>
                )
        }
        return <ActivityIndicator style={this.styles.act} size='large'>
        </ActivityIndicator>
        
       
    }
    styles = StyleSheet.create({
        act: {
            alignSelf: 'center'
        },
    })
}
