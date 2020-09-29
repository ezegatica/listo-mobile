import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'

export default class CatSeleccionada extends React.Component {
    state = {
        restaurantes: null
    }

    render() {
        if (this.props.data) {
            return (
                <View>
                    {
                        this.props.data.map((resto, i) => {
                            return (
                                <Text key={i}>{resto.id}</Text>
                            )
                        })
                    }
                </View>
            )
        }
        else {
            return (
                <Loading />
            )
        }

    }
}
