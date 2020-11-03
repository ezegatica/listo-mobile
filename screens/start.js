import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import BGprueba from '../assets/start.png'
export default function Start({ navigation }) {

    return (
        <View style={{ height: '100%', width: '100%' }}>
            <ImageBackground resizeMode='stretch' source={BGprueba} style={{ width: '100%', flex: 1, justifyContent: 'center' }}>
                <View style={styles.btnCont}>
                    <TouchableOpacity style={styles.btnAzul} onPress={() => navigation.navigate('Login')}>
                        <Text style={globalStyles.btnTxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAzul} onPress={() => navigation.navigate('Signup')}>
                        <Text style={globalStyles.btnTxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    btnCont: {
        marginTop: 300,
        width: '80%',
        alignSelf: "center",
    },
    btnAzul: {
        backgroundColor: '#007aff',
        borderRadius: 15,
        padding: 14,
        marginVertical: 10
    },

})