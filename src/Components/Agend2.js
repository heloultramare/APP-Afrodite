import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../Context/AuthContext';
export default function Agend2() {

    const [diaSelecionado, setDiaSelecionado] = useState();
    const [profissionalAtual, setProfissionalAtual] = useState("Selecione");
    const [mostrarSelecao, setMostrarSelecao] = useState(false);
    const [horaSelecionada, setHoraSelecionada] = useState(null);
    const [observacao, setObservacao] = useState("");
    const [profissionalId, setProfissionalId] = useState(0);
    const [profissionais, setProfissionais] = useState();
    const [tipoProfissioanl, setTipoProfissioanl] = useState();
    const {procedimento, usuario, setProcedimento } = useContext( AuthContext );

    const navigation = useNavigation();

    if( diaSelecionado ) {
        console.log( diaSelecionado );
    }
    


    const horarios = [
        { id: '1', data: '08:00' },
        { id: '2', data: '09:00' },
        { id: '3', data: '10:00' },
        { id: '4', data: '11:00' },
        { id: '5', data: '13:00' },
        { id: '6', data: '14:00' },
        { id: '7', data: '15:00' },
        { id: '8', data: '16:00' },
        { id: '9', data: '17:00' },
        { id: '10', data: '18:00' },
    ];

    

    async function getProfissionais() {
        await fetch('http://10.133.22.32:5251/api/Profissional/GetAllProfissional', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                setProfissionais(json);
            })
            .catch(err => console.log(err))
    }

    async function getTipoProfissional() {
        await fetch('http://10.133.22.32:5251/api/TipoProfissional/GetAllTipoProfissional', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                setTipoProfissioanl(json);
            })
            .catch(err => console.log(err))
    }

    async function Agendar() {
        await fetch('http://10.133.22.32:5251/api/Agendamento/CreateAgendamento', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                procedimentoId: procedimento.procedimentoId,
                dataHoraAgendamento: diaSelecionado + "T" + horaSelecionada + ":00.00Z",
                profissionalId: profissionalId,
                observacaoAgendamento: observacao,
                clienteId: usuario.clienteId
              })
        })
            .then(res => res.json())
            .then(json => {
                Alert.alert( "Agendamento Concluído com Sucesso" );
                setProcedimento( null );
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProfissionais();
        getTipoProfissional();
    }, []);

    const RenderProfissional = ({ item }) => (
        <TouchableOpacity
            style={css.botaoProfissional}
            onPress={() => {
                setProfissionalId( item.profissionalId);
                setProfissionalAtual(item.nomeProfissional);
                setMostrarSelecao(false);
            }}
            key={item.profissionalId}
        >
            <Text style={css.textoBotao}>{item.nomeProfissional} | {tipoProfissioanl.filter(value => value.tipoProfissionalId == item.tipoProfissionalId).map(value => value.nomeTipoProfissional)} </Text>
        </TouchableOpacity>
    );

    const renderHorario = ({ item }) => (
        <TouchableOpacity
            style={[css.caixaitemhora, horaSelecionada === item.data && css.horaSelecionada]}
            onPress={() => setHoraSelecionada(item.data)}
        >
            <Text style={[css.itemhora, { color: horaSelecionada == item.data ? "#F4E7EB" : "#B34361" }]}>{item.data}</Text>
        </TouchableOpacity>
    );

    const handleSave = () => {
        if (!profissionalAtual || !horaSelecionada || !diaSelecionado) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        Alert.alert("Sucesso", "Seu agendamento foi concluído com sucesso!", [
            { text: "OK", onPress: () => navigation.navigate('Home') }
        ]);
    };

    return (
        <ScrollView style={css.scrollview}>
            <View style={css.caixaimagem}>
                <Image style={css.imagem} source={require("../../assets/agendeafrodite.png")} />
            </View>
            <View>
                <Text style={css.titulo}>AFRODITE LIFECARE</Text>
                <Text style={css.texto}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP</Text>
            </View>

            <View style={css.containerEquipe}>
                <Text style={css.label}>Equipe:</Text>
                <View style={css.equipeContainer}>
                    <Text style={css.profissionalAtual}>{profissionalAtual}</Text>
                    <TouchableOpacity
                        style={css.botaoAlterar}
                        onPress={() => setMostrarSelecao(!mostrarSelecao)}
                    >
                        <Text style={css.textoBotaoAlterar}>Alterar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {mostrarSelecao && (
                <View style={css.listaProfissionais}>
                    <Text style={css.label}>Equipe Disponível:</Text>
                    {profissionais.map((item) =>
                        <RenderProfissional item={item} />
                    )}
                </View>
            )}

            <View style={css.calendario}>
                <CalendarPicker
                    weekdays={['Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sab', 'Dom']}
                    months={[
                        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
                    ]}
                    previousTitle="Anterior"
                    nextTitle="Próximo"
                    todayBackgroundColor="#EFEFEF"
                    selectedDayColor="#F4E7EB"
                    selectedDayTextColor="#B34361"
                    onDateChange={(date) => setDiaSelecionado(date.toISOString().split("T")[0])}
                    width={350}
                />
            </View>

            <FlatList
                data={horarios}
                renderItem={renderHorario}
                keyExtractor={(item) => item.id}
                style={css.list}
                horizontal={true}
                contentContainerStyle={{
                    gap: 16,
                    paddingLeft: 20
                }}
            />

            <View style={css.caixaobservacao}>
                <TextInput
                    style={css.observacao}
                    placeholder='OBSERVAÇÕES:'
                    value={observacao}
                    onChangeText={setObservacao}
                />
            </View>

            <TouchableOpacity style={css.botaoSalvar} onPress={Agendar}>
                <Text style={css.textoBotaoSalvar}>Agendar</Text>
            </TouchableOpacity>

            <View style={css.rodape} />
        </ScrollView>
    );
}

const css = StyleSheet.create({
    scrollview: {
        width: "100%",
        height: "70%",
    },
    imagem: {
        width: "100%",
        height: 130,
        objectFit: "contain"
    },
    titulo: {
        color: '#B34361',
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 25,
        marginTop: 20,
        fontSize: 15,
    },
    texto: {
        textAlign: 'right',
        marginRight: 25,
        fontSize: 13,
        marginBottom: 10,
    },
    containerEquipe: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        color: '#000',
        marginBottom: 5,
    },
    equipeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        padding: 10,
        borderRadius: 8,
    },
    profissionalAtual: {
        fontSize: 14,
        color: '#333333',
    },
    botaoAlterar: {
        backgroundColor: '#B34361',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
    },
    textoBotaoAlterar: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    listaProfissionais: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    botaoProfissional: {
        backgroundColor: '#EFEFEF',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    textoBotao: {
        fontSize: 14,
        color: '#333333',
    },
    calendario: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#B34361',
        borderRadius: 5,
        padding: 30,
        marginTop: 20,
    },
    list: {
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
        marginTop: 10,
    },
    caixaitemhora: {
        backgroundColor: '#F4E7EB',
        width: 80,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    itemhora: {
        color: '#B34361',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
    },
    horaSelecionada: {
        backgroundColor: '#B34361',
    },
    caixaobservacao: {
        borderWidth: 2,
        borderColor: '#B34361',
        borderRadius: 5,
        width: "90%",
        height: 70,
        alignSelf: "center",
        marginTop: 15
    },
    observacao: {
        fontSize: 13,
        padding: 5
    },
    rodape: {
        marginTop: 30,
        backgroundColor: "#f4e7eb",
        width: "100%",
        height: 80,
    },
    botaoSalvar: {
        backgroundColor: '#B34361',
        paddingVertical: 15,
        marginVertical: 30,
        alignItems: 'center',
        borderRadius: 8,
        width: "90%",
        alignSelf: 'center',
    },
    textoBotaoSalvar: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});