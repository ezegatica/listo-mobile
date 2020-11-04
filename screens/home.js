import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { globalStyles } from '../styles/global'
import IComida from '../assets/food.jpg'
import FloatList from '../components/floatList'
import Favs from '../components/favs'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
export default function Home({ navigation }) {
    //<Favs navigation={navigation} />
    const datos = [
        {
            imagen: IComida,
            txt: 'Restaurantes'
        },
    ]
    //  <Favs navigation={navigation} />             


    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={globalStyles.screenContainer}>
                    <FloatList navigation={navigation} data={datos} />
                    <Favs navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center',
    },
    imageView: {
        padding: 40,
        width: '100%'
    },
    scroll: {
        width: '100%',
        height: '100%'
    },
})