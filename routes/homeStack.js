import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Categoria from '../screens/category'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Stack = createStackNavigator()

export const HomeStack = ({ }) => {
    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerTitleAllowFontScaling: true,
            headerBackAllowFontScaling: true,
            headerShown: 'float',
            headerTitleStyle: { color: '#333', fontWeight: '700' },
        }}>
            <Stack.Screen name='Inicio' options={{

            }} component={Home} />
            <Stack.Screen name='Categoria' options={{
                headerTitle: ''
            }} component={Categoria} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    headerRightTxt: {
        fontSize: 17,
        alignSelf: 'center',
        color: 'blue'
    },
})