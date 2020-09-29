import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

export default function Loading({ }) {
    return (
        <View style={styles.loadingCont}>
            <View style={styles.screenContainer}>
                <ActivityIndicator style={styles.act} size='large' />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screenContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    act: {
        alignSelf: 'center'
    },
    loadingCont: {
        marginTop: 250,
    }
})