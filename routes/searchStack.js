import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Buscador from '../screens/search'
import BtnCarrito from '../components/btnCarrito'
import Signup from '../screens/signup'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Login } from '../screens/login'

const Stack = createStackNavigator()

export const SearchStack = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAllowFontScaling: true,
            headerBackAllowFontScaling: true,
            headerShown: 'float',
            headerTitleStyle: { color: '#000', fontWeight: '500' },
            cardStyle: {
                backgroundColor: '#fff'
            },
            headerRight: () => (<BtnCarrito navigation={navigation} />)
        }} >
            <Stack.Screen name='Buscador' options={{
            }} component={Buscador} />
        </Stack.Navigator>
    )
}