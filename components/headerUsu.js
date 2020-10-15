import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../api/firebase'

export default function HeaderUser() {

    const hayUsu = () => {
        if (global.UserUid != 'No hay nada') {
            //console.log('hay uid');
            return (<Text>{global.UserUid}</Text>)
        }
        else {
            return (<Text>No hay ndad</Text>)
        }
    }

    return (
        <View>
            <Text>{hayUsu()}</Text>
        </View>
    )
}
