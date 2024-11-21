import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Regras() {

    return (
        <View>
            <View>
                <Text style={css.titulo}>REGRAS DE SAÚDE E SEGURANÇA</Text>
            </View>
            <View>
                <Text style={css.texto}>- Somente com horário agendado</Text>
                <Text style={css.texto}>- Espaço de tempo estendido entre os agendamentos</Text>
                <Text style={css.texto}>- Funcionários usam máscaras</Text>
                <Text style={css.texto}>- Funcionários usam luvas</Text>
                <Text style={css.texto}>- Desinfetamos todas as superfícies do local</Text>
                <Text style={css.texto}>- Desinfetamos os equipamentos entre atendimentos</Text>
                <Text style={css.texto}>- Álcool em gel disponível para uso dos clientes</Text>
                <Text style={css.texto}>- Ventilação adequada</Text>

            </View>
        </View>

    )
}

const css = StyleSheet.create({
    titulo: {
        color: "#B34361",
        fontWeight: "bold",
        padding: 15
    },
    texto: {
        padding: 15
    }

})