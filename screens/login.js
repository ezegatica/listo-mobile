import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from '../styles/global'
import BGprueba from '../assets/fondoPrueba.jpg'
import { AuthContext, AuthProvider } from '../api/auth';

export function Login({ navigation }) {
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    const { user, login, logout } = useContext(AuthContext) //NO ANDA

    return (
        <View style={globalStyles.screenContainer}>
            <ImageBackground source={BGprueba} style={globalStyles.bg}>
                <Text style={globalStyles.titleTxt}>Iniciar sesión</Text>
                <KeyboardAvoidingView style={globalStyles.btnContainer} behavior='position'>
                    <TextInput
                        placeholder='E-Mail'
                        style={styles.input}
                        value={mail}
                        keyboardType='email-address'
                        textContentType="emailAddress"
                        onChangeText={(email) => setMail(email)}
                    />
                    <TextInput
                        placeholder='Contraseña'
                        style={styles.input}
                        secureTextEntry
                        value={pass}
                        onChangeText={(password) => setPass(password)}
                    />
                    <View>
                        <TouchableOpacity style={globalStyles.btnAzul} onPress={() => { login(); }}>
                            <Text style={globalStyles.btnTxt}>Aceptar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.btnAzul} onPress={() => navigation.navigate('Start')}>
                            <Text style={globalStyles.btnTxt}>Volver</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        backgroundColor: 'rgba(255,255,255,.5)',
        paddingLeft: 10,
        marginBottom: 25,
        borderRadius: 5,
        fontSize: 15,
    },
    btns: {
        flex: 2,
        flexDirection: 'row'
    },
})