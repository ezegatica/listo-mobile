import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import { globalStyles } from '../styles/global'
import {auth} from '../api/firebase'
import {db} from '../api/firebase'
export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fetching, setFetching] = useState(false)
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    const Registrar = () => {
        if(email !== "" && password !== ""){
        auth.createUserWithEmailAndPassword(
        email,
        password
        ).then((resp) => {
                console.log("UID: ", resp.user.uid)
                console.log("CREADO?")
                console.log("Mail: ", email)                    
                db.collection("testeos").doc(resp.user.uid).set({
                        nombre: nombre,
                        apellido: apellido,
                        initials: nombre[0] + apellido[0],
                    }).then(console.log("Si."))
                    }
                )
                }
    }

    return (
        <View style={{paddingTop:50}}>
        <TextInput
      label={"Email"}
      keyboardType="email-address"
      placeholder="Direccion de e-mail"
      onChangeText={text => {
        setEmail(text)
      }}
    />
    <TextInput
      label={"Password"}
      secureTextEntry
      placeholder="Contraseña"
      
      onChangeText={text => setPassword(text)}
    />
    <TextInput label={"Nombre"}
      placeholder="Nombre"
      onChangeText={text => {
        
        setNombre(text)
      }}/>
      <TextInput label={"Apellido"}
      placeholder="Apellido"
      onChangeText={text => {
        
        setApellido(text)
      }}/>
    <TouchableHighlight
      onPress={Registrar}
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