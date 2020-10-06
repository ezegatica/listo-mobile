import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Test from '../screens/search'
import BtnCarrito from '../components/btnCarrito'
import Signup from '../screens/signup'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

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
            }} component={Signup} />
        </Stack.Navigator>
    )
}