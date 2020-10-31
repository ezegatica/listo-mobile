import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { List } from 'react-native-paper';

export default class PedidoCard extends Component {
    estado = (e) => {
        let estado = ''
        switch (e) {
            case 0:
                estado = 'Pendiente de confirmacion'
                break;
            case 1:
                estado = 'Confirmado'
                break;
            case 2:
                estado = 'En preparación'
                break;
            case 3:
                estado = 'Listo para retirar'
                break;
            case 4:
                estado = 'Entregado'
                break;
            case 10:
                estado = 'Cancelado'
                break;
            default:
                estado = 'Error'
                break;
        }
        return estado

    }
    render() {
        //console.log('holanda', this.props.pedido.productos);
        return (
            <View>
                <List.Accordion
                    title={'Pedido de ' + this.props.pedido.nombre_restaurante}
                    id={this.props.id.toString()}
                    style={styles.Accordion}>
                    <View>
                        {
                            this.props.pedido.data.map((item, i) => {
                                let foto = item.foto
                                if (!foto) {
                                    foto = 'https://firebasestorage.googleapis.com/v0/b/prueba-proyecto-tic.appspot.com/o/producto.png?alt=media&token=022e7368-74eb-4829-acd0-8da7661cc26f'
                                }
                                return (
                                    <View style={styles.detallesV} key={i}>
                                        <View style={{ flexDirection: 'row', marginVertical: 10, padding: 5 }}>
                                            <View style={styles.fotoV}>
                                                <Image source={{ uri: item.foto }} style={styles.foto} />
                                            </View>
                                            <View style={styles.linea}></View>
                                            <View style={{ alignSelf: 'center', flexDirection: 'column', }}>
                                                <Text style={{ fontWeight: '600' }}>{item.titulo} x {this.props.pedido.productos[i].cantidad}</Text>
                                                <Text style={{ color: 'green' }}>${parseFloat(item.precio) * parseFloat(this.props.pedido.productos[i].cantidad)}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.linea2}></View>
                                    </View>
                                )
                            })
                        }
                        <View style={styles.detallesGenerales}>
                            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{this.estado(parseFloat(this.props.pedido.estado))}</Text>
                            <View style={{ backgroundColor: '#66CD00', borderRadius: 10 }}>
                                <Text style={{ padding: 5, color: 'white', fontWeight: 'bold' }}>${this.props.pedido.precio}</Text>
                            </View>
                        </View>
                    </View>
                </List.Accordion>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    detallesV: {
        width: '90%',
        alignSelf: 'center',
    },
    detallesGenerales: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    Accordion: {
        margin: 10,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
    },
    fotoV: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 1,
        alignSelf: 'center',
    },
    foto: {
        height: 75,
        width: 75,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: '#DCDCDC'
    },
    linea: {
        backgroundColor: '#4fc3f7',
        marginHorizontal: 10,
        padding: 3,
        height: '85%',
        alignSelf: 'center',
        borderRadius: 5
    },
    linea2: {
        backgroundColor: '#d3d3d3',
        height: 3,
        borderRadius: 5,
        width: '100%',
        alignSelf: 'center'
    }

})