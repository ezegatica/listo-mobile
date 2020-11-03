import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/home'
import Categoria from '../screens/category'
import Productos from '../screens/productos'
import Producto from '../screens/producto'
import BtnCarrito from '../components/btnCarrito'
import Carrito from '../screens/carrito'
import Pedidos from '../screens/pedidos'
import { StyleSheet } from 'react-native'
import navbar from '../assets/navbar.png'

const Stack = createStackNavigator()

export const HomeStack = ({ navigation }) => {

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
            <Stack.Screen name='Inicio' options={{

            }} component={Home} />
            <Stack.Screen name='Categoria' options={{
                headerTitle: '',
                headerBackTitle: 'Inicio'
            }} component={Categoria} />
            <Stack.Screen name='Productos' options={{
                headerTitle: '',
                headerBackTitle: 'Restaurantes'
            }} component={Productos} />
            <Stack.Screen name='Producto' options={{
                headerTitle: '',
                headerBackTitle: 'Productos',
            }} component={Producto} />
            <Stack.Screen name='Carrito' options={{
                headerTitle: '',
                headerBackTitle: 'Atras',
                headerRight: null
            }} component={Carrito} />
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