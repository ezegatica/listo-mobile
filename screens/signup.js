import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, SafeAreaView, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
import { db } from '../api/firebase'
import BGprueba from '../assets/fondoPrueba.jpg'
export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fetching, setFetching] = useState(false)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")

  const Registrar = () => {
    if (email !== "" && password !== "") {
      auth.createUserWithEmailAndPassword(
        email,
        password
      ).then((resp) => {
        db.collection("usuarios").doc(resp.user.uid).set({
          nombre: nombre,
          apellido: apellido,
          initials: nombre[0] + apellido[0],
        }).then(console.log("Si."))

      }
      )
        .catch(function (error) {
          // Handle Errors here.
          Alert.alert(
            "Error",
            error.message,
          );
        }
        )
    }
  }

  return (
    <ImageBackground source={BGprueba} style={globalStyles.bg}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Registrarse</Text>
        <View style={styles.inputCont}>
          <TextInput
            label={"Email"}
            keyboardType="email-address"
            placeholder="Direccion de e-mail"
            style={styles.input}
            onChangeText={text => {
              setEmail(text)
            }}
          />
          <TextInput
            label={"Password"}
            secureTextEntry
            placeholder="Contraseña"
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
          <TextInput label={"Nombre"}
            placeholder="Nombre"
            style={styles.input}
            onChangeText={text => {

              setNombre(text)
            }} />
          <TextInput label={"Apellido"}
            placeholder="Apellido"
            style={styles.input}
            onChangeText={text => {

              setApellido(text)
            }} />
          <Button title="Aceptar" onPress={Registrar} />
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
    justifyContent: 'flex-start',
  },
  inputCont: {
    marginTop: 100
  }
})