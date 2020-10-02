import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Signup from '../screens/signup'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

export const SearchStack = ({ navigation }) => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name='Inicio' options={{
                header: () => { null }
            }} component={Signup} />
        </Stack.Navigator>
    )
}