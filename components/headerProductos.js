import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import firebase, { db } from '../api/firebase'
import Loading from '../screens/loading';

export default class HeaderProductos extends Component {
    state = {
        like: null,
        favs: null,
        cargado: false,
    }
    componentDidMount() {
        db.collection('usuarios').doc(global.UserUid).get()
            .then((snapshot) => {
                //console.log(snapshot.data().favoritos)
                this.setState({ favs: snapshot.data().favoritos, cargado: true })
            })
            .then(() => {
                if (this.state.favs.includes(this.props.data.resto)) {
                    this.setState({ like: true })
                }
                else {
                    this.setState({ like: false })
                }
            })
    }
    likeado = () => {
        let iconName
        let color
        if (this.state.cargado) {
            if (this.state.like) {
                iconName = 'heart'
                color = 'red'
                return (
                    <TouchableOpacity onPress={() => {
                        this.dislike()
                    }}>
                        <AntDesign name={iconName} size={25} color={color} />
                    </TouchableOpacity>

                )
            }
            else {
                iconName = 'hearto'
                color = 'red'
                return (
                    <TouchableOpacity onPress={() => { this.like() }}>
                        <AntDesign name={iconName} size={25} color={color} />
                    </TouchableOpacity>
                )
            }
        }
        else {
            return <ActivityIndicator size='small' />

        }
    }
    like = () => {
        db.collection('usuarios').doc(global.UserUid).update({ "favoritos": firebase.firestore.FieldValue.arrayUnion(this.props.data.resto) })
            .then(() => {
                this.setState({ like: true })
            })
            .catch((err) => { console.log(err) })
    }
    dislike = () => {
        db.collection('usuarios').doc(global.UserUid).update({ "favoritos": firebase.firestore.FieldValue.arrayRemove(this.props.data.resto) })
            .then(() => {
                console.log('se elimino');
                this.setState({ like: false })
            })
            .catch((err) => { console.log(err) })
    }
    imagen = () => {
        let foto
        if (this.props.data.foto != undefined) {
            foto = this.props.data.foto
            return foto
        }
        else {
            foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
            return foto

        }
    }
    cat = () => {
        if (this.props.data.cat2 != '') {
            return (<Text style={styles.categoria} >{this.props.data.cat}, {this.props.data.cat2}</Text>)
        }
        else {
            return (<Text style={styles.categoria} >{this.props.data.cat}</Text>)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.fotoView}>
                        <Image style={styles.foto} source={{ uri: this.imagen() }} />
                    </View>
                    <View style={styles.linea}></View>
                    <View style={styles.test}>
                        <Text style={styles.titulo}>{this.props.data.nombre}</Text>
                        {this.cat()}
                    </View>
                </View>
                <View style={styles.iconV}>
                    {
                        this.likeado()
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
    },
    fotoView: {
        paddingVertical: 10,
        marginLeft: 20,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 2,
            },
            android: {
                elevation: 1,
            },
        }),
    },
    foto: {
        height: 60,
        width: 60,
        borderRadius: 15,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        paddingVertical: 5
    },
    test: {
        alignSelf: 'center',
        justifyContent: 'flex-start'
    },
    linea: {
        backgroundColor: '#4fc3f7',
        marginHorizontal: 15,
        padding: 2,
        height: '60%',
        alignSelf: 'center',
        borderRadius: 5
    },
    categoria: {
        fontSize: 13,
        color: '#4F94CD',
        textTransform: 'capitalize',
    },
    iconV: {
        alignSelf: 'center',
        marginRight: 16
    }
})






