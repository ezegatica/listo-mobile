import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from '../api/firebase'
import Loading from '../screens/loading'
import { List } from 'react-native-paper'
import PedidoCard from '../components/pedidoCard'

export default class Pedidos extends Component {

    state = {
        pedidos: {
            activos: [],
            pasados: [],
            todos: [],
            vacio: false,
        },
        cargado: true,
    }
    componentDidMount() {
        this.leerDB()
    }
    leerDB = () => {
        this.setState({ cargado: true })
        db.collection('pedidos').where('usuario', '==', global.UserUid).orderBy('estado', "asc").orderBy('horario_de_pedido', 'desc').onSnapshot(
            resp => {
                const Pedidos = []
                resp.forEach(doc => {
                    let info = doc.data()
                    let id = doc.id
                    Pedidos.push({ info, id })
                })
                let Vacio = false
                if (Pedidos.length === 0) {
                    Vacio = true
                }
                this.setState({
                    pedidos: {
                        todos: Pedidos,
                        activos: Pedidos.filter(pedido => pedido.info.estado < 4),
                        pasados: Pedidos.filter(pedido => pedido.info.estado >= 4),
                        vacio: Vacio,
                    },
                    cargado: false
                })
            })
    }

    render() {
        //console.log(this.state.pedidos);
        if (this.state.pedidos.vacio) {
            return (
                <View style={styles.noExisteV}>
                    <Text style={styles.noExiste}>No tenés ningún pedido:(</Text>
                    <TouchableOpacity style={styles.btnView} onPress={() =>
                        this.props.navigation.navigate('Inicio')
                    }>
                        <Text style={styles.btnTxt}>¡Comprar productos!</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else if (!this.state.pedidos.vacio && !this.state.cargando) {
            return (
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                    <View>
                        <Text style={{ alignSelf: 'center', fontSize: '20', color: '#007ffa', fontWeight: '600', margin: 20 }}>Pedidos activos ({this.state.pedidos.activos.length})</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <List.AccordionGroup>
                                {
                                    this.state.pedidos.activos.map((pedido, i) => {
                                        const info = pedido.info
                                        return (
                                            <View key={i}>
                                                <PedidoCard pedido={info} id={i} />
                                            </View>
                                        )
                                    })
                                }
                            </List.AccordionGroup>
                        </ScrollView>
                    </View>
                </View>
            );
        }
        else if (this.state.cargado) {
            console.log(hola);
            return (
                <Loading />
            )
        }
    }
}

const styles = StyleSheet.create({
    noExisteV: {
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    noExiste: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    btnView: {
        margin: 10,
        alignSelf: 'center',
        padding: 15,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        width: '70%'
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
})