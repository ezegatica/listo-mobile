import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Loading from '../screens/loading'
import { AppTabs } from './tabs';
import { StackAuth } from './authStack'
import { YellowBox } from 'react-native';
import { auth, db } from '../api/firebase'

YellowBox.ignoreWarnings(['']);
export const Routes = ({ }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    global.UserUid = user.uid
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
    if (user && !loading) {
        return <NavigationContainer><AppTabs /></NavigationContainer>
    }
    else if (!user && !loading) {
        return <NavigationContainer><StackAuth /></NavigationContainer>
    }
    else {
        return <Loading />
    }
}
