import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import { db } from '../api/firebase'
export default class HeaderUser extends Component {

    state = {
        usuario: null
    }
    hayUsu = () => {
        if (this.state.usuario) {
            return (
                <Text style={styles.txt}>Bienvenido {this.state.usuario}</Text>
            )
        }
        else {
            return (<ActivityIndicator style={{ alignSelf: 'center' }} size='small'></ActivityIndicator>)
        }
    }
    componentDidMount() {
        db.collection('usuarios').doc(global.UserUid).get()
            .then(snapshot => {
                this.setState({ usuario: snapshot.data().nombre })
            }).then(() => {
                global.UserName = this.state.usuario
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.cont}>
                <Text>{this.hayUsu()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        padding: 10,
        alignSelf: 'center'
    },
    txt: {
        fontSize: 15,
        fontWeight: '600',
        color: '#007aff',
        alignSelf: 'center'
    },

})
