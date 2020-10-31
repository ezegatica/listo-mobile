import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchStack } from './searchStack'
import { AntDesign } from '@expo/vector-icons'
import { HomeStack } from './homeStack'
import { StyleSheet } from 'react-native'
import { ProfileStack } from './profileStack'

const Tabs = createBottomTabNavigator();

export const AppTabs = ({ }) => {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Inicio') {
                    iconName = 'home'
                    return <AntDesign name={iconName} size={25} color={color} />;

                } else if (route.name === 'Buscar') {
                    iconName = 'search1'
                    return <AntDesign name={iconName} size={25} color={color} />;
                }
                else if (route.name === 'Perfil') {
                    iconName = 'user'
                    return <AntDesign name={iconName} size={25} color={color} />;

                }
            },
            title: () => { },
        })}
            tabBarOptions={{
                activeTintColor: '#01579B',
                inactiveTintColor: '#696969',
                tabStyle: { backgroundColor: '#ffffff', },

            }}>
            <Tabs.Screen name='Inicio' component={HomeStack} />
            <Tabs.Screen name='Buscar' component={SearchStack} />
            <Tabs.Screen name='Perfil' component={ProfileStack} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    Tab: {
        padding: 10,
    },
})