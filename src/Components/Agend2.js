import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker'


export default function Agend2() {

    const [diaSelecionado, setDiaSelecionado,] = useState();

    const data = [
        { id: '1', data: '08:00' },
        { id: '2', data: '09:00' },
        { id: '3', data: '10:00' },
        { id: '4', data: '11:00' },
        { id: '5', data: '14:00' },
    ];
    const renderItem = ({ item }) => (

        <View style={css.caixaitem}>
            <Text style={css.item}> {item.data}</Text>
        </View>


    );

    return (
        <View>
            <View>
                <Text style={css.titulo}>AFRODITE LIFECARE</Text>
                <Text style={css.texto}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP</Text>
            </View>
            <View style={css.calendario}>
                <CalendarPicker
                    weekdays={["Seg", "Ter", "Quar", "Qui", "Sex", "Sab", "Dom"]}
                    months={["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]}
                    previousTitle="Anterior"
                    nextTitle="Próximo"
                    todayBackgroundColor='#EFEFEF'
                    selectedDayColor="#F4E7EB"
                    selectedDayTextColor='#B34361'
                    onDateChange={(date) => setDiaSelecionado(date)}
                    width={350}
                />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={css.list}
            />


        </View>
    )
}

const css = StyleSheet.create({
    titulo: {
        color: "#B34361",
        fontWeight: "bold",
        textAlign: "right",
        marginRight: 23,
        marginTop: 20
    },
    texto: {
        textAlign: "right",
        marginRight: 23
    },
    calendario: {
        width: "90%",
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#B34361",
        borderRadius: 5,
        padding: 30
    },
    caixahorarios: {
        width: "100%",
        height: 30,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        gap: 40
    },
    horarios: {
        width: "10%",
        gap: 0,
        backgroundColor: "green"
    },

    list: {
        width: "100%",
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row"
    },
    caixaitem: {
        backgroundColor: "green",
        flexDirection: "row",
        display: "flex",
        flexWrap: "nowrap"
    },

    item: {
        flexDirection: "row",
        display: "flex",
        
    }
})