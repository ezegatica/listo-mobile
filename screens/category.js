import React from 'react';
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
                txt: 'sushi'
            },
            {
                txt: 'pollo'
            },
            {
                txt: 'empanadas'
            },
            {
                txt: 'sandwiches'
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
                <CategoriasHeader data={this.state.categorias} />
            </SafeAreaView>
        );
    }
}