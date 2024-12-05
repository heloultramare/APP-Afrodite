import { useContext, useState } from "react";
import React from 'react'
import { Alert, Button, Image, Pressable, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from "../Context/AuthContext";


export default function Pagamento() {

    const {clubeSelecionado, setClubeSelecionado, usuario, opcao } = useContext( AuthContext );
    console.log( clubeSelecionado );
    console.log( opcao );

    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentSelect = (paymentType) => {
        setSelectedPayment(paymentType); // Altera o estado para o tipo de pagamento selecionado
    };

    async function Pagamento() {
        await fetch('http://10.133.22.34:5251/api/AssinaturaClube/CreateAssinaturaClube', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                clienteId: usuario.clienteId,
                clubeId: clubeSelecionado.clubeId
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log( json );
                Alert.alert( "Pagamento realizado" );
                setClubeSelecionado( null );
            })
            .catch(err => console.log(err))
    }
    
 
    return (
        <ScrollView contentContainerStyle={css.container}>
            <TouchableOpacity onPress={() => setClubeSelecionado(false)}>
                <Icon style={css.icones} name="chevron-left" size={23} color="black" />
            </TouchableOpacity>
            <Text style={css.title2}>AGENDA NA</Text>
            <Text style={css.title}>AFRODITE LIFECARE</Text>
            <View style={css.boxInfo}>
                <Text style={css.boxInfoText}>Nome completo:</Text>
                <View style={css.btn}>
                    <Text>{usuario.nomeCliente}</Text>
                </View>
                <Text style={css.boxInfoText}>Telefone:</Text>
                <View style={css.btn}>
                    <Text>{usuario.telCliente}</Text>
                </View>

                <Text style={css.boxInfoText}>Cpf:</Text>
                <View style={css.btn}>
                    <Text>{usuario.cpfCliente}</Text>
                </View>
            </View>

            <View style={css.boxRosa}>
                <View style={css.row}>
                    <View style={{ width: "50%", height: "100%" }}>
                        <Text style={css.escuro}>{opcao.tipoClube}</Text>
                    </View>
                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <Text style={css.escuro}>R${clubeSelecionado.valorClube}</Text>
                        <Text>Clube | {opcao.opcao}</Text>
                    </View>
                </View>
                <View style={css.linha}></View>
                <View style={css.row}>
                    <Text style={css.escuro3}>{clubeSelecionado.nomeClube}</Text>
                </View>
            </View>
            <View style={css.formapagamento}>
                <Text style={css.formapagamentotext}>FORMA DE PAGAMENTO</Text>
            </View>
            <View style={css.linha}></View>
            <View style={css.redondao}>
                {/* Dinheiro */}
                <TouchableOpacity onPress={() => handlePaymentSelect('dinheiro')}>
                    <View style={[css.redondo, selectedPayment === 'dinheiro' && css.selectedButton]}>
                        <Icon name="money" size={30} color={selectedPayment === 'dinheiro' ? "#B34361" : "#000"} />
                    </View>
                    <Text style={[css.label, selectedPayment === 'dinheiro' && { color: "#B34361" }]}>Dinheiro</Text>
                </TouchableOpacity>

                {/* Pix */}
                <TouchableOpacity onPress={() => handlePaymentSelect('pix')}>
                    <View style={[css.redondo, selectedPayment === 'pix' && css.selectedButton]}>
                        <Icon name="paypal" size={30} color={selectedPayment === 'pix' ? "#B34361" : "#000"} />
                    </View>
                    <Text style={[css.label, selectedPayment === 'pix' && { color: "#B34361" }]}>Pix</Text>
                </TouchableOpacity>

                {/* Débito */}
                <TouchableOpacity onPress={() => handlePaymentSelect('debito')}>
                    <View style={[css.redondo, selectedPayment === 'debito' && css.selectedButton]}>
                        <Icon name="credit-card" size={30} color={selectedPayment === 'debito' ? "#B34361" : "#000"} />
                    </View>
                    <Text style={[css.label, selectedPayment === 'debito' && { color: "#B34361" }]}>Débito</Text>
                </TouchableOpacity>

                {/* Crédito */}
                <TouchableOpacity onPress={() => handlePaymentSelect('credito')}>
                    <View style={[css.redondo, selectedPayment === 'credito' && css.selectedButton]}>
                        <Icon name="credit-card-alt" size={30} color={selectedPayment === 'credito' ? "#B34361" : "#000"} />
                    </View>
                    <Text style={[css.label, selectedPayment === 'credito' && { color: "#B34361" }]}>Crédito</Text>
                </TouchableOpacity>
            </View>


            <View style={css.linhadebaixo}></View>

            <View style={css.boxgrande} contentContainerStyle={{ paddingLeft: 200 }}>
                <View style={css.detalhes}>
                    <Text style={css.detalhepag}>DETALHES DO PAGAMENTO</Text>
                </View>

                <Text style={css.subb}>COMBO SELECIONADO</Text>
                <View style={css.sub}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={css.subb2}>Combo tal tal | COMBO | ANUAL</Text>
                        <Text style={css.subpreco}>R$ 6,00</Text>
                    </View>
                </View>
                <View style={css.sub}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={css.subb}>FORMA DE PAGAMENTO</Text>
                        <Text style={css.subpreco}>CRÉDITO</Text>
                    </View>
                </View>
                <View style={css.linha2} />
                <View style={css.sub}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={css.subb}>Total</Text>
                        <Text style={css.subpreco}>R$ 406,00</Text>
                    </View>
                </View>
                <View>
                    <Pressable
                        style={css.botaofinalizar}
                        title="FINALIZAR"
                        color="#ffc0cd"
                        onPress={() => Pagamento() }
                    >
                        <Text style={css.titulofinalizar}>FINALIZAR</Text>
                    </Pressable>

                </View>

            </View>

            <View style={css.rodape}>

            </View>
        </ScrollView>
    )
}
const css = StyleSheet.create({

    botaofinalizar: {
        width: "25%",
        height: 25,
        backgroundColor: "#FFC0CB",
        borderRadius: 5,
        alignSelf: "flex-end",
    },
    subpreco: {
        fontWeight: 'bold',
    },
    titulofinalizar: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        top: 4,
    },
    container: {
        width: "100%",
        padding: 15,
        flexGrow: 1

    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: "#b34361",
        marginLeft: 25,
    },
    title2: {
        fontSize: 15,
        marginTop: 100,
        color: "black",
        marginLeft: 25,
    },
    title3: {
        fontSize: 15,
        color: "black",
    },
    title4: {
        color: "#b34361",
        fontSize: 17,
    },
    boxInfoText: {
        marginTop: 10,
        width: "100%"
    },
    linha: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgrey",
    },
    linhadebaixo: {
        width: "100%",
        height: 1,
        backgroundColor: "lightgrey",
        marginBottom: 30,
        top: 10,
    },
    linha2: {
        width: "100%",
        height: 1.5,
        backgroundColor: "lightgrey",
        marginBottom: 20,
    },
    btn: {
        width: "100%",
        height: 35,
        borderRadius: 4,
        marginTop: 3,
        backgroundColor: "white",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#B34361",
        padding: 5,
    },
    boxInfo: {
        width: "90%",
        alignSelf: "center",
        justifyContent: "center"
    },
    btnOpcao: {
        width: "100%",
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    btnOpcaoText: {
        textAlign: "center",
        lineHeight: 47,
        verticalAlign: "middle",
        fontWeight: "bold"
    },
    formapagamento: {
        alignItems: "center",
        marginTop: 60,
    },
    formapagamentotext: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    forma: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10,
    },
    formatext: {
        lineHeight: 47,
        fontWeight: "bold",
    },
    boxpagamento: {
        width: "20%",
        alignItems: "center",
    },
    imagem: {
        height: 45,
        width: 45,
        resizeMode: "contain",
        borderWidth: 2,
        borderColor: "lightgrey",
        borderRadius: 5,
    },
    boxprincipal: {
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    boxgrande: {
        width: "100%",
        backgroundColor: "white",
        padding: 20,
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#b34361",
        borderRadius: 10,
        flex: 1,
    },
    sub: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 10,
    },
    subb: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 5,
        fontSize: 15,
    },
    subb2: {
        fontWeight: "bold",
    },
    subbpreco: {
        fontWeight: "bold",
    },
    detalhes: {
        padding: 10,
    },
    detalhepag: {
        color: "#b34361"
    },
    icones: {
        top: 90,
    },
    flex: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 30
    },
    boxRosa: {
        width: "100%",
        backgroundColor: "#eddbde",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        marginTop: 30,
        height: 150,
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    cluberosa: {
        marginTop: 25,
    },
    clubecor: {
        color: "#b34361"
    },
    rosaDentro: {

    },
    escuro: {
        fontWeight: "bold"
    },
    ladinho: {

        fontWeight: "bold",
    },
    rosaLadinho: {

    },
    escuro2: {
        fontWeight: "bold"
    },
    anual: {

    },
    escuro3: {
        fontWeight: "bold",
    },
    redondao: {
        flexDirection: 'row', // Alinha os ícones em linha
        justifyContent: 'space-around', // Espaçamento uniforme entre eles
        alignItems: 'center', // Centraliza no eixo vertical
        padding: 10,

    },
    redondo: {
        width: 70, // Largura do círculo
        height: 70, // Altura do círculo
        borderRadius: 10, // Bordas arredondadas
        backgroundColor: '#fff', // Cor de fundo
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
        alignItems: 'center', // Centraliza o conteúdo verticalmente
        borderWidth: 1,
        borderColor: "black",
        marginHorizontal: 10,
    },
    label: {
        marginTop: 5, // Espaçamento entre o círculo e o texto
        fontSize: 13, // Tamanho da fonte do texto
        color: '#000', // Cor do texto
        textAlign: 'center',
        fontWeight: 'bold',
    },

    rodape: {
        marginTop: 80,
        backgroundColor: "#f4e7eb",
        width: "100%",
        height: 80,
    }

})