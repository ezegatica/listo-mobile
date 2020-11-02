import React from 'react';
import Ihamburguesa from '../assets/hamburguesa.png'
import Isandwiches from '../assets/galletita.png'
import Isushi from '../assets/sushi.png'
import Ipollo from '../assets/jamon.png'
import Iempanadas from '../assets/taco.png'
import Ipasta from '../assets/pasta.png'
import Cards from '../components/card'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global'
import { ScrollView } from 'react-native-gesture-handler';
import firebase, { db } from '../api/firebase'
import CategoriasHeader from '../components/categoriasHeader'
export default class Categoria extends React.Component {
    state = {
        restaurantes: null,
        categorias: [
            {
                txt: 'sushi',
                image: Isushi
            },
            {
                txt: 'pollo',
                image: Ipollo
            },
            {
                txt: 'empanadas',
                image: Iempanadas,
            },
            {
                txt: 'sandwiches',
                image: Isandwiches
            },
            {
                txt: 'hamburguesas',
                image: Ihamburguesa
            },
            {
                txt: 'pasta',
                image: Ipasta
            }
        ],
    }
    getRestos = () => {
        db.collection('restaurantes').get()
            .then(snapshot => {
                const Restaurantes = []
                snapshot.forEach(doc => {
                    const info = doc.data()
                    const id = doc.id;
                    Restaurantes.push({ info, id })
                })
                this.setState({ restaurantes: Restaurantes })
            }).catch(error => console.log('ERROR:', error))
    }
    componentDidMount() {
        this.getRestos()
    }
    // <ScrollView showsVerticalScrollIndicator={false}>
    //<Cards data={this.state.restaurantes} />
    //</ScrollView>
    render() {
        return (
            <SafeAreaView>
                <CategoriasHeader data={this.state.categorias} navigation={this.props.navigation} />
            </SafeAreaView>
        );
    }
}