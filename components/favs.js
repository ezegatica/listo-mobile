import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase, { db } from '../api/firebase'

export default class Favs extends Component {

    state = {
        favsInfo: null,
        favs: null
    }
    /*componentDidMount() {
        let Favs = []
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                Favs = snapshot.data().favoritos
                //console.log(favs);
                this.setState({ favs: Favs })
            })
            .then(() => {
                this.getRestoInfo()
            })
    }
    getRestoInfo = () => {
        a = []
        this.state.favs.forEach(element => {
            db.collection('restaurantes').doc(element).get()
            then(snapshot => {
                a.push(snapshot.data())
            })
        })
        console.log(a);
    }*/
    render() {
        return (
            <View>
                <Text> Tus favoritos </Text>
            </View>
        );
    }
}
