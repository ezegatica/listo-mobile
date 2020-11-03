import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from './card'
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading'

export default class CatSeleccionada extends React.Component {

    render() {
        if (this.props.data) {
            return (
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <Card data={this.props.data} navigation={this.props.navigation} />
                </ScrollView>
            )
        }
        if (!this.props.data) {
            return (
                <Loading />
            )
        }

    }
}
const styles = StyleSheet.create({
    scroll: {
        height: '89.3%'
    }
})