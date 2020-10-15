import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../api/firebase'

export default function HeaderUser() {

    const hayUsu = () => {
        return (<Text>{global.UserName}</Text>)
    }

    return (
        <View>
            <Text>{hayUsu()}</Text>
        </View>
    )
}
