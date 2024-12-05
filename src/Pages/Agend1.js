import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Regras from '../Components/Regras';
import { AuthContext } from '../Context/AuthContext';

export default function Agend1() {
    const [Agend1, setAgend1] = useState(false);
    const [AreaEstetica, setAreaEstetica] = useState(false);
    const [AreaOdonto, setAreaOdonto] = useState(false);
    const [AreaNutri, setAreaNutri] = useState(false);
    const [regras, setRegras] = useState(false);
    const [estetica, setEstetica] = useState([]);
    const [odonto, setOdonto] = useState([]);
    const [nutricao, setNutricao] = useState([]);

    const {setProcedimento} = useContext( AuthContext );

    if (regras) {
        return (
            <Regras setRegras={setRegras} />
        )

    }



    async function getProcedimentos() {
        await fetch('http://10.133.22.24:5251/api/Procedimento/GetAllProcedimento', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                json.map((item) => {
                    const especialidade = item.nomeProcedimento.split("-");
                    if (especialidade[0].trim() == "Estético") {
                        const existe = estetica.find(value => value.procedimentoId == item.procedimentoId);
                        if (!existe) {
                            const newEstetica = [...estetica, item];
                            setEstetica(newEstetica);
                        }

                    }
                    if (especialidade[0].trim() == "Odontológico") {                        
                        const existe = odonto.find(value => value.procedimentoId == item.procedimentoId);
                        if (!existe) {
                            const newOdontologico = [...odonto, item];
                            setOdonto(newOdontologico);
                        }
                    }
                    if (especialidade[0].trim() == "Nutricional") {
                        const existe = nutricao.find(value => value.procedimentoId == item.procedimentoId);
                        if (!existe) {
                            const newNutricao = [...nutricao, item];
                            setNutricao(newNutricao);
                        }
                    }
                })
            })
    }




    useEffect(() => {
        getProcedimentos();
    }, [])


    return (
        <ScrollView>
            <View>
                <Image style={css.imagembanner} source={require("../../assets/agendeafrodite.png")} />
                <Text style={css.texto1}>AFRODITE LIFECARE</Text>
                <Text style={css.texto2}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP</Text>
                <Pressable style={css.boxRegras} onPress={() => setRegras(true)} >
                    <Text style={css.textRegras}>Regras de Saúde e Segurança</Text>
                    <Icon style={css.iconeRegras} name={regras ? "chevron-down" : "chevron-right"} size={23} color="black" />

                </Pressable>
                <Pressable style={css.boxAreas} onPress={() => setAreaEstetica((current) => !current)} >
                    <Text style={css.textAreas}>ESTÉTICA</Text>
                    <Icon style={css.icones2} name={AreaEstetica ? "chevron-down" : "chevron-right"} size={23} color="black" />
                </Pressable>
                {AreaEstetica &&
                    estetica.map((item) =>
                        <View style={css.caixa} key={item.procedimentoId}>
                            <Text style={css.caixaestetica}>
                                {item.nomeProcedimento.split('-')[1]} - {item.valorProcedimento}
                            </Text>
                            <Pressable onPress={() => setProcedimento( item ) }>
                                <Text style={css.botao}>AGENDAR</Text>
                            </Pressable>
                        </View>
                    )
                }
                <Pressable style={css.boxAreas} onPress={() => setAreaOdonto((current) => !current)} >
                    <Text style={css.textAreas}>ODONTOLOGIA</Text>
                    <Icon style={css.icones2} name={AreaOdonto ? "chevron-down" : "chevron-right"} size={23} color="black" />
                </Pressable>
                {AreaOdonto &&
                    odonto.map((item) =>
                        <View style={css.caixa} key={item.procedimentoId}>
                            <Text style={css.caixaodonto}>
                                {item.nomeProcedimento.split('-')[1]} - {item.valorProcedimento}
                            </Text>
                            <Pressable onPress={() => setProcedimento( item ) }>
                                <Text style={css.botao}>AGENDAR</Text>
                            </Pressable>
                        </View>
                    )
                }
                <Pressable style={css.boxAreas} onPress={() => setAreaNutri((current) => !current)} >
                    <Text style={css.textAreas}>NUTRIÇÃO</Text>
                    <Icon style={css.icones2} name={AreaNutri ? "chevron-down" : "chevron-right"} size={23} color="black" />
                </Pressable>
                {AreaNutri &&
                    nutricao.map((item) =>
                        <View style={css.caixa} key={item.procedimentoId}>
                            <Text style={css.caixanutri}>
                                {item.nomeProcedimento.split('-')[1]} - {item.valorProcedimento}
                            </Text>
                            <Pressable onPress={() => setProcedimento( item ) }>
                                <Text style={css.botao}>AGENDAR</Text>
                            </Pressable>
                        </View>
                    )
                }
                <View style={css.rodape}>
                </View>
            </View>
        </ScrollView>
    );
}

const css = StyleSheet.create({
    bigcontainer: {
        width: "100%",
        height: 510,
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#F4E7EB",
        marginTop: 50,
    },
    imagembanner: {
        width: "100%",
        height: 130,
        resizeMode: "contain",
    },
    texto1: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#B34361",
        marginLeft: 20,
        marginTop: 15,
    },
    texto2: {
        marginTop: 30,
        fontSize: 12,
        color: "black",
        marginLeft: 20,
        marginTop: 1,
    },
    caixaregras: {
        width: "90%",
        height: 40,
        backgroundColor: "#F4E7EB",
        marginLeft: 20,
        marginTop: 30,

    },
    textRegras: {
        fontSize: 10,
        padding: 10
    },
    boxRegras: {
        width: "90%",
        height: 50,
        backgroundColor: "#f4e7eb",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",
        marginLeft: 15,
    },
    textRegras: {
        fontSize: 15,
        padding: 10,
    },
    iconeRegras: {
        marginRight: 10,
    },
    boxAreas: {
        width: "90%",
        height: 50,
        fontWeight: "bold",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        alignItems: "center",
        marginLeft: 15,
    },
    textAreas: {
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 8,
        color: "#B34361",
    },
    icones2: {
        marginRight: 10,
    },

    caixaestetica: {
        width: "80%",
        
        fontSize: 12,
        fontWeight: "bold",
    },
    caixaodonto: {
        width: "80%",
       
        fontSize: 12,
        fontWeight: "bold",
    },
    caixanutri: {
        width: "80%",
        
        fontSize: 12,
        fontWeight: "bold",
    },
    botao: {
        color: "#B34361",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 15,
        columnGap:50,
        paddingVertical: 8,

        borderRadius: 8,
        width: "80%",
        
          
        
    },
    rodape: {
        marginTop: 115,
        backgroundColor: "#f4e7eb",
        width: "100%",
        height: 80,
    },
    caixa: {
        width: "92%",
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: "#ffffff",
        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        
    },
    detalhesTexto: {
        flex: 1,
        marginRight: 10,
    },
    procedimentoTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },
    procedimentoDetalhes: {
        fontSize: 13,
        color: "#666666",
        marginTop: 3,
    },
    preco: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#B34361",
        marginTop: 5,
    },
    botaoAgendar: {
        backgroundColor: "#B34361",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    textoBotaoAgendar: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
    },
});