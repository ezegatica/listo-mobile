import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HeaderUser from '../components/headerUsu'
import { globalStyles } from '../styles/global'
import IComida from '../assets/food.jpg'
import ILibreria from '../assets/library.jpg'
import IFruta from '../assets/market2.jpg'
import FloatList from '../components/floatList'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function Home({ navigation }) {

    const datos = [
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
        {
            imagen: IFruta,
            txt: 'buenas buenas'
        },
        {
            imagen: ILibreria,
            txt: 'buenas buenas'
        },
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
        {
            imagen: IFruta,
            txt: 'buenas buenas'
        },
        {
            imagen: ILibreria,
            txt: 'buenas buenas'
        },
        {
            imagen: IFruta,
            txt: 'Buenas buenas'
        },
    ]
    const uid = () => {
        const uid = global.UserUid
        if (uid != 'No hay nada') {
            return <Text>{uid}</Text>
        }
    }
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.screenContainer}>
                    <HeaderUser />
                    <FloatList navigation={navigation} data={datos} />
                    <Text>{uid()}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}