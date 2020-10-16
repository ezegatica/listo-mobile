import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../api/firebase'

export default function HeaderUser() {

    const hayUsu = () => {
        if (global.UserUid) {
            return (<Text>{global.UserUid}</Text>)
        }
        else {
            return (<Text>No hay usuario Registrado</Text>)
        }
    }

    return (
        <View>
            <Text>{hayUsu()}</Text>
        </View>
    )
}
