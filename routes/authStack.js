import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Start from '../screens/start'
import Signup from '../screens/signup'
import { Login } from '../screens/login'

const Stack = createStackNavigator();

export const StackAuth = ({ }) => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }}
            initialRouteName='Start'>
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}
