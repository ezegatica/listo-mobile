import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card from './card'
import Loading from '../screens/loading'
export default class CatDefault extends React.Component {

    render() {
        if (!this.props.data) {
            return (
                <Loading />
            )
        }
        if (this.props.data) {
            return (

                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    <Card data={this.props.data} navigation={this.props.navigation} />
                </ScrollView>

            )
        }

    }
}
const styles = StyleSheet.create({
    scroll: {
        marginBottom: 218,
    }
})

