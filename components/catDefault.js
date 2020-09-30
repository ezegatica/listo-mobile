import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Card from './card'
import Loading from '../screens/loading'
import { SafeAreaView } from 'react-native-safe-area-context'
export default class CatDefault extends React.Component {

    test = () => {
        console.log(this.props.data)
    }
    render() {
        if (!this.props.data) {
            return (
                <Loading />
            )
        }
        if (this.props.data) {
            return (

                <ScrollView showsVerticalScrollIndicator={false} >
                    <Card data={this.props.data} navigation={this.props.navigation} />
                </ScrollView>

            )
        }

    }
}
