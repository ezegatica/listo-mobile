import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BtnCarrito from '../components/btnCarrito'
import Pedidos from '../screens/pedidos'
import Carrito from '../screens/carrito'
import Profile from '../screens/profile'
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native'

const Stack = createStackNavigator()

export const ProfileStack = ({ navigation }) => {

    return (

        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerTitleAllowFontScaling: true,
            headerBackAllowFontScaling: true,
            headerShown: 'float',
            headerTitleStyle: { color: '#000', fontWeight: '500' },
            cardStyle: {
                backgroundColor: '#f4f4f4'
            },
            headerRight: () => (<BtnCarrito navigation={navigation} />)
        }} >
            <Stack.Screen name='Profile' options={{
                headerTitle: 'Perfil'
            }} component={Profile} />
            <Stack.Screen name='Pedidos' options={{
                headerTitle: '',
                headerBackTitle: 'Atras',
            }} component={Pedidos} />
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