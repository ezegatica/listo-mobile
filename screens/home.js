import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global'
import IComida from '../assets/food.jpg'
import ILibreria from '../assets/library.jpg'
import IFruta from '../assets/market2.jpg'
import ScrollHorizontal from '../components/scrollHorizontal';
import FloatList from '../components/floatList'
import { ScrollView } from 'react-native-gesture-handler';
export default function Home({ navigation }) {

    const datos = [
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
        {
            imagen: IComida,
            txt: 'buenas buenas'
        },
        {
            imagen: IComida,
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
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={globalStyles.screenContainer}>
                    <FloatList navigation={navigation} data={datos} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}