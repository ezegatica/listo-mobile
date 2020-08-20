import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'
import ScrollCategorias from '../components/scrollCategory'
import IComida from '../assets/food.jpg'
import ILibreria from '../assets/library.jpg'
import IFruta from '../assets/market2.jpg'

export default function Home({ navigation }) {
    return (
        <View style={globalStyles.screenContainer}>
            <ScrollCategorias navigation={navigation} title='Categorías' data={[
                {
                    image: IComida,
                    txt: 'Restaurantes'
                },
                {
                    image: ILibreria,
                    txt: 'Librerías'

                },
                {
                    image: IFruta,
                    txt: 'Verdulerías'
                },
                {
                    image: IComida,
                    txt: 'Restaurantes'
                },
                {
                    image: IFruta,
                    txt: 'Verdulerías'

                },
            ]} />
            <ScrollCategorias navigation={navigation} title='Categorías' data={[
                {
                    image: IComida,
                    txt: ''
                },
                {
                    image: ILibreria,
                    txt: ''

                },
                {
                    image: IFruta,
                    txt: ''
                },
                {
                    image: IComida,
                    txt: ''
                },
                {
                    image: IFruta,
                    txt: ''

                },
            ]} />
        </View>
    );
}