import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
export default function Categoria({ route }) {

    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.titleTxt}>{route.params.name}</Text>
        </View>
    );
}