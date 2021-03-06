import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/multi'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples texto='flexível' />
                <ParImpar numero={28} />
                <Inverter texto='React Nativo!' />
                <MegaSena numeros={10} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSize: 40
    }
})