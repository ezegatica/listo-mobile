import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

export default function Loading({ }) {
    return (
        <View style={styles.screenContainer}>
            <View>
                <ActivityIndicator style={styles.act} size='large' />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1

    },
    act: {
        alignSelf: 'center'
    }
})