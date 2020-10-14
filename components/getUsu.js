import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../api/firebase'

export default function User() {

    const [usu, setUsu] = useState('')

    auth.onAuthStateChanged(user => {
        setUsu('hola')
    })

    const hayUsu = () => {
        if (usu) {
            return (<Text>{usu}</Text>)
        }
        else {
            return (<Text>no hay usuario registrado</Text>)
        }
    }

    return (
        <View>
            <Text>{hayUsu()}</Text>
        </View>
    )
}
