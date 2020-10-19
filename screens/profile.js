import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
export default function Profile() {
    const logOut = () => {
        auth.signOut()
            .then(() => {
                //console.log('pito o algo asi');
            })
    }
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.titleTxt}>Perfil</Text>
            <TouchableOpacity onPress={() => { logOut() }}>
                <Text>Cerrar seciion</Text>
            </TouchableOpacity>
        </View>
    );
}