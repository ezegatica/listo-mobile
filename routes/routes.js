import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../screens/loading'
import { AppTabs } from './tabs';
import { StackAuth } from './authStack'
import { YellowBox } from 'react-native';
import { auth } from '../api/firebase'

YellowBox.ignoreWarnings(['Setting a timer']);
export const Routes = ({ }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null) // se deberia cambiar desde otro archivo
    /*Codigo para routear al screen que corrresponde  
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })*/

    React.useEffect(() => {
        setTimeout(() => {
            auth.onAuthStateChanged(user => {

                if (user) {
                    //console.log('USUARIO', user.uid);
                    setUser(true)
                    setLoading(false)
                }
                else {
                    setUser(false)
                    setLoading(false)
                }
            })
        }, 2000)
    })
    if (loading) {
        return <Loading />
    }
    else if (user) {
        return <NavigationContainer><AppTabs /></NavigationContainer>
    }
    else {
        return <NavigationContainer><StackAuth /></NavigationContainer>
    }
}
