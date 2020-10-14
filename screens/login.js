import React, { useState } from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
import { db } from '../api/firebase'
import BGprueba from '../assets/fondoPrueba.jpg'

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
  }

  return (
    <View style={globalStyles.container}>
      <Text>Login</Text>
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
      <Button title="Login" onPress={Entrar} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('Signup')}
      />
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
    marginVertical: 20,
  },
  btns: {
    flex: 2,
    flexDirection: 'row'
  },
})