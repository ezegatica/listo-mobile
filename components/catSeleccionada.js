import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './card'
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'

export default class CatSeleccionada extends React.Component {
    state = {
        restaurantes: null
    }

    render() {
        if (this.props.data) {
            return (
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Card data={this.props.data} />
                </ScrollView>
            )
        }
        else {
            return (
                <Loading />
            )
        }

    }
}
