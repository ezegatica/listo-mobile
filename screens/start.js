import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global'
import BGprueba from '../assets/fondoPrueba.jpg'
export default function Start({ navigation }) {

    return (
        <View style={globalStyles.screenContainer}>
            <ImageBackground source={BGprueba} style={globalStyles.bg}>
                <Text style={globalStyles.titleTxt}>Listo</Text>
                <View style={globalStyles.btnContainer}>
                    <TouchableOpacity style={globalStyles.btnAzul} onPress={() => navigation.navigate('Login')}>
                        <Text style={globalStyles.btnTxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.btnAzul} onPress={() => navigation.navigate('Signup')}>
                        <Text style={globalStyles.btnTxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

})