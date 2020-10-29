import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderUser from '../components/headerUsu'
import { globalStyles } from '../styles/global'
import IComida from '../assets/food.jpg'
import FloatList from '../components/floatList'
import Favs from '../components/favs'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function Home({ navigation }) {

    const datos = [
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
    ]
    return (
        <SafeAreaView>
            <HeaderUser />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.screenContainer}>
                    <FloatList navigation={navigation} data={datos} />
                    <Favs navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}