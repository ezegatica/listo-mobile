import React from 'react'
import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ScrollHorizontal from './scrollHorizontal'
export default class CatDefault extends React.Component {
    state = {
        categorias: this.props.data
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                <ScrollHorizontal data={this.props.data}></ScrollHorizontal>
            </ScrollView>
        )
    }
}