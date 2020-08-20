import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { globalStyles } from '../styles/global';

export default function Loading({ }) {
    return (
        <View style={globalStyles.screenContainer}>
            <ActivityIndicator size='large' />
        </View>
    )
}