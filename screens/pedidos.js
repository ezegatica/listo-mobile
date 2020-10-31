import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
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
        console.log('hola');
        db.collection('pedidos').where('usuario', '==', global.UserUid).orderBy('estado', "asc").orderBy('horario_de_pedido', 'desc').get()
            .then((resp) => {
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
            }).catch(error => console.log(error))
    }

    render() {
        //console.log(this.state.pedidos);
        if (this.state.vacio && !this.state.cargado) {
            return (<Text>No tenes pedidos cargados</Text>)
        }
        else if (!this.state.vacio && !this.state.cargando) {
            return (
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '100%' }}>
                    <View>
                        <Text style={{ alignSelf: 'center', fontSize: '18', color: '#007ffa' }}>Pedidos activos:</Text>
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
                    <TouchableOpacity
                        style={{ width: '40%', padding: 10, backgroundColor: '#007aff', alignSelf: 'center', borderRadius: '10', marginBottom: 20 }}
                        onPress={() => this.leerDB()}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, alignSelf: 'center' }}>Actualizar</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else if (this.state.cargado) {
            return (
                <Loading />
            )
        }
    }
}
