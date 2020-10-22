import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Alert, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { globalStyles } from '../styles/global'
import { auth } from '../api/firebase'
import { db } from '../api/firebase'
import BGprueba from '../assets/fondoPrueba.jpg'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
export default function Signup({ navigation }) {
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
    <ImageBackground source={BGprueba} style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titulo}>Registrarse</Text>
        </View>
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
          <TouchableOpacity onPress={Registrar} style={styles.btnView}>
            <Text style={styles.btnText}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txt}>¿Ya tenés una cuenta? {<Text style={{ fontWeight: 'bold' }}>Iniciar sesión</Text>}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%'
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,.8)',
    paddingLeft: 10,
    borderRadius: 20,
    fontSize: 15,
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center'
  },
  btns: {
    flex: 2,
    flexDirection: 'row',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  btnView: {
    margin: 10,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    width: '30%',
  },

  btnText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white'
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center'
  },
})