import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
import { db } from '../api/firebase'
import BGprueba from '../assets/fondoPrueba.jpg'
import Global from '../global';

export function Login({ navigation }) {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setError] = useState("");

  const Entrar = () => {
    //firebase
    auth
      .signInWithEmailAndPassword(mail, pass)
      //navigation.navigate('Inicio'))
      .catch(function (error) {
        // Handle Errors here.
        errorMessage = error.message;
      }
      )
    //console.log(Global);
  }

  return (
    <ImageBackground source={BGprueba} style={globalStyles.bg}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Inisiar Sesión</Text>
          <View style={styles.inputCont}>
            <Text>{errorMessage}</Text>
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
            <Button title="Aceptar" onPress={Entrar} />
            <Button
              title="¿Todabía no tenés una cuenta? Registrate"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 50,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold'

  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,.5)',
    paddingLeft: 10,
    borderRadius: 20,
    fontSize: 15,
    marginVertical: 20,
    width: '100%',
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
    justifyContent: 'flex-start',
  },
  inputCont: {
    marginTop: 200
  }
})