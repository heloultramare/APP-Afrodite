import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
import CalendarPicker from 'react-native-calendar-picker'


export default function Agend2() {

    const [diaSelecionado, setDiaSelecionado,] = useState();

    const equipe = [
        { id: '1', equipe: 'Heloísa Ultramare' },
        { id: '2', equipe: 'Paola Rovari' },
        { id: '3', equipe: 'Maria Heloísa Carvalho' },
        { id: '4', equipe: 'Rafael Celes Freitas' },
        { id: '5', equipe: 'Leonardo Alves' },
    ];
    const renderItem2 = ({ item }) => (
        <View style={css.caixaitem}>
            <Text style={css.item}>{item.equipe}</Text>
        </View>
    );
    

    const data = [
        { id: '1', data: '08:00' },
        { id: '2', data: '09:00' },
        { id: '3', data: '10:00' },
        { id: '4', data: '11:00' },
    ];
    const renderItem = ({ item }) => (

        <View style={css.caixaitemdata}>
            <Text style={css.itemdata}> {item.data}</Text>
        </View>
    );

    return (
        <View>
            <View>
                <Text style={css.titulo}>AFRODITE LIFECARE</Text>
                <Text style={css.texto}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP</Text>
            </View>
            <FlatList
                equipe={equipe}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
                style={css.list}
                contentContainerStyle={{ display: "flex" , flexDirection: "row" , 
                gap: 16 , alignSelf: "center"}}
            />
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
                contentContainerStyle={{ display: "flex" , flexDirection: "row" , 
                gap: 16 , alignSelf: "center"}}
            />


        </View>
    )
}

const css = StyleSheet.create({
    titulo: {
        color: "#B34361",
        fontWeight: "bold",
        textAlign: "right",
        marginRight: 25,
        marginTop: 20,
        fontSize: 15
    },
    texto: {
        textAlign: "right",
        marginRight: 25,
        fontSize: 13,
        marginBottom: 10
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
    list: {
        width: "100%",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
        marginTop: 10,
    },
    caixaitemdata: {
        backgroundColor: "#B34361",
        width: 80,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        
    },
    itemdata: {
        color: "white",
        fontSize: 13,
        textAlign: "center",
        marginTop: 10

    }
})