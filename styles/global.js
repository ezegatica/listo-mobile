import React from 'react'
import { StyleSheet } from 'react-native'


export const globalStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    titleTxt: {
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold',
    },
    bg: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    btnAzul: {
        backgroundColor: 'rgba(70,70,235,1)',
        padding: 0,
        borderRadius: 10,
        padding: 13,
        marginTop: 20,
        marginBottom: 10,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    btnTxt: {
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
    },
    btnContainer: {
        width: '90%',
        marginTop: 150,
    },
})