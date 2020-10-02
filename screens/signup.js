import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import auth from "@react-native-firebase/auth"
import { globalStyles } from '../styles/global'
export default function Signup() {
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [fetching, setFetching] = useState(false)
        const [error, setError] = useState("")
        const [isValid, setValid] = useState(true)
        const __doSignUp = () => {
          if (!email) {
            setError("Mail requerido")
            setValid(false)
            return
          } else if (!password && password.trim() && password.length > 6) {
            setError("Contraseña poco segura, por favor ingrese una contraseña de 6 digitos o mas.")
            setValid(false)
            return
          }
      
          __doCreateUser(email, password)
        }
      
        const __doCreateUser = async (email, password) => {
          try {
            let response = await auth().createUserWithEmailAndPassword(
              email,
              password
            )
            if (response && response.user) {
              Alert.alert("Creado ✅", "Cuenta creada.")
            }
          } catch (e) {
            console.error(e.message)
          }
        }
        return (
            <View style={{paddingTop:50}}>
            <TextInput
          label={"Email"}
          autoCapitalize={false}
          keyboardType="email-address"
          placeholder="Direccion de e-mail"
          onChangeText={text => {
            setError
            setEmail(text)
          }}
          error={isValid}
        />
        <TextInput
          label={"Password"}
          secureTextEntry
          autoCapitalize={false}
          placeholder="Contraseña"
          error={isValid}
          onChangeText={text => setPassword(text)}
        />
        <TouchableHighlight
          onPress={__doSignUp}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text>Registrar</Text>
          </View>
        </TouchableHighlight>
        </View>
    );
}