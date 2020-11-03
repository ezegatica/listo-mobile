import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
export default function Profile({ navigation }) {
    const logOut = () => {
        navigation.navigate('Inicio')
        setTimeout(() => {
            auth.signOut()
        }, 500)
    }
    return (
        <View style={styles.noExisteV}>
            <Text style={styles.noExiste}>{global.UserName}</Text>
            <TouchableOpacity style={styles.btnView} onPress={() => { logOut() }}>
                <Text style={styles.btnTxt}>Cerrar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnView} onPress={() => { navigation.navigate('Pedidos') }}>
                <Text style={styles.btnTxt}>Ver mis pedidos</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    noExisteV: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    noExiste: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    btnView: {
        margin: 10,
        alignSelf: 'center',
        padding: 15,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        width: '70%'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
})