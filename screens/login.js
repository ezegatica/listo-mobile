import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ImageBackground, TextInput, SafeAreaView, Alert } from 'react-native';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
import { db } from '../api/firebase'
import BGprueba from '../assets/template.png'

export function Login({ navigation }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setError] = useState("");

  const Entrar = () => {
    //firebase
    auth.signInWithEmailAndPassword(mail, pass)
      .catch(function (error) {
        Alert.alert(
          "Error",
          error.message,
        );
      })
  }

  return (
    <ImageBackground source={BGprueba} style={styles.bg} resizeMode='cover'>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titulo}>Iniciar Sesión</Text>
          <View style={styles.inputCont}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => setMail(email)}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => setPass(password)}
            />
            <TouchableOpacity onPress={Entrar} style={styles.btnView}>
              <Text style={styles.btnText}>Aceptar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.txt}>¿Todavía no tenés una cuenta? {<Text style={{ fontWeight: 'bold' }}>Registrate</Text>}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%'
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#007aff'

  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    opacity: 1,
    paddingLeft: 10,
    borderRadius: 20,
    fontSize: 15,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center'
  },
  btns: {
    flex: 2,
    flexDirection: 'row'
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  inputCont: {
    marginTop: 100
  },
  btnView: {
    margin: 10,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007aff',
    borderRadius: 10,
    width: '30%',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
  txt: {
    color: '#007aff',
    fontSize: 18,
    alignSelf: 'center'
  },
})