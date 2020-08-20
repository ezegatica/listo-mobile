import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
export default function Test() {
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.titleTxt}>Buscador</Text>
        </View>
    );
}