import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../Context/AuthContext';

export default function Clube() {

    const{clube, setClube} = useContext( AuthContext );

    const { widthScreen } = Dimensions.get("screen").width;
    const [ pagamento, setPagamento ] = useState(false);
    

    const [clubes, setClubes] = useState();
    const [tiposClube, setTiposClube] = useState();

    const [clubeOdonto, setClubeOdonto] = useState();
    const [clubeEstetica, setClubeEstetica] = useState();
    const [clubeNutri, setClubeNutri] = useState();


    const [anual, setAnual] = useState(false);
    const [mensal, setMensal] = useState(false);

    const [opcao, setOpcao] = useState({ id: 0, opcao: "" });

    if (pagamento) {
        return (
            <pagamento setPagamento={setPagamento} />
        )
    }
    

    async function getClubes() {
        await fetch('http://10.133.22.24:5251/api/Clube/GetAllClube', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setClubes(json))
            .catch(err => console.log(err))
    }

    async function getTiposClubes() {
        await fetch('http://10.133.22.24:5251/api/TipoClube/GetAllTipoClube', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setTiposClube(json))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getClubes();
        getTiposClubes();
    }, [])

    

    useEffect(() => {
        if (tiposClube && clubes) {

            tiposClube.map((item) => {
                if (item.nomeTipoClube == "Clube Estética") {
                    const filtroEstetica = clubes.filter(value => value.tipoClubeId == item.tipoClubeId);
                    setClubeEstetica(filtroEstetica);
                }
                if (item.nomeTipoClube == "Clube Odonto") {
                    const filtroOdonto = clubes.filter(value => value.tipoClubeId == item.tipoClubeId);
                    setClubeOdonto(filtroOdonto);
                }
                if (item.nomeTipoClube == "Clube Nutri") {
                    const filtroNutri = clubes.filter(value => value.tipoClubeId == item.tipoClubeId);
                    setClubeNutri(filtroNutri);
                }

            })
        }
    }, [tiposClube, clubes]);

    return (
        <ScrollView style={css.scrollviewClube}>
            <View style={css.containerClube}>
                <View style={css.caixinha}>
                    <Text style={css.textClube}>CLUBE</Text>
                    <Pressable onPress={() => setClube(false)} >
                        <Text style={css.botaoVoltar}>VOLTAR</Text>
                    </Pressable>
                </View>



                <Text style={css.textfunciona}>Como funciona?</Text>
                <View style={css.boxClube}>
                    <View style={css.row}>
                        <View style={css.item}>
                            <Image style={css.bolotas} source={require("../../assets/clube 1.png")} />
                            <Text style={css.textbolotas}>Escolha seu plano Afrodite: bag, box ou shell.</Text>
                        </View>
                        <View style={css.item}>
                            <Image style={css.bolotas} source={require("../../assets/clube 2.png")} />
                            <Text style={css.textbolotas}>Escolha a recorrência: anual ou mensal.</Text>
                        </View>
                        <View style={css.item}>
                            <Image style={css.bolotas} source={require("../../assets/clube 3.png")} />
                            <Text style={css.textbolotas}>Preencha seus dados</Text>
                        </View>
                    </View>
                    <View style={css.row}>
                        <View style={css.item}>
                            <Image style={css.bolotas} source={require("../../assets/clube 4.png")} />
                            <Text style={css.textbolotas}>Aproveite os benefícios de ser assinante</Text>
                        </View>
                        <View style={css.item}>
                            <Image style={css.bolotas} source={require("../../assets/clube 5.png")} />
                            <Text style={css.textbolotas}>Receba sua edição do mês.</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={css.textfunciona}>Escolha já a sua Concha de Afrodite!</Text>
                    <View>

                        {clubeEstetica &&
                            <>
                                <Text style={css.textConchaClube}>CLUBE ESTÉTICA</Text>
                                <View style={css.caixonaClube}>
                                    <FlatList
                                        data={clubeEstetica}
                                        renderItem={({ item }) => (
                                            <View style={css.caixaClube}>
                                                <Text style={css.textCombo}>{item.nomeClube}</Text>
                                                <Image style={css.imagemclube} source={{ uri: item.fotoClube }} />
                                                <Text style={css.textescolha}>Escolha sua recorrência</Text>

                                                <View style={css.boxTipo}>
                                                    <Pressable
                                                        style={[css.btnAnual, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Anual") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Anual" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Anual</Text>
                                                        <Text style={css.prazo}>R$ {item.valorClube},00 / mês</Text>
                                                    </View>
                                                </View>

                                                <View style={css.boxTipo}>
                                                    <Pressable
                                                        style={[css.btnMensal, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Mensal") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Mensal" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Mensal</Text>
                                                        <Text style={css.prazoMensal}> R$ {item.valorClube + 30},00 / mês</Text>
                                                    </View>
                                                </View>

                                                <Text style={css.textDetalhes}>{item.detalhesClube}</Text>
                                                <View>

                                                    <Pressable style={css.botaocomprar} onPress={() => setPagamento(false)}>
                                                        <Text style={css.textoBotaoComprar}>COMPRAR COMBO</Text>
                                                    </Pressable>
                                                </View>
                                            </View>

                                        )}
                                        keyExtractor={item => item.clubeId}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ width: widthScreen, flexDirection: "row", gap: 20, paddingHorizontal: clubeEstetica.length * 5 }}
                                    />
                                </View>
                            </>
                        }

                        {clubeOdonto &&
                            <>
                                <Text style={css.textConchaClube}>CLUBE ODONTO</Text>
                                <View style={css.caixonaClube}>
                                    <FlatList
                                        data={clubeOdonto}
                                        renderItem={({ item }) => (
                                            <View style={css.caixaClube}>
                                                <Text style={css.textCombo}>{item.nomeClube}</Text>
                                                <Image style={css.imagemclube} source={{ uri: item.fotoClube }} />
                                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                                <View style={css.boxTipo}>
                                                    <Pressable
                                                        style={[css.btnAnual, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Anual") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Anual" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Anual</Text>
                                                        <Text style={css.prazo}>R$ {item.valorClube},00 / mês</Text>
                                                    </View>

                                                </View>
                                                <View style={css.boxTipo}>

                                                    <Pressable
                                                        style={[css.btnMensal, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Mensal") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Mensal" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Mensal</Text>
                                                        <Text style={css.prazoMensal}> R$ {item.valorClube + 30},00 / mês</Text>
                                                    </View>
                                                </View>
                                                <Text style={css.textDetalhes}>{item.detalhesClube}</Text>
                                                <View>
                                                <Pressable style={css.botaocomprar} onPress={() => setPagamento(false)}>
                                                        <Text style={css.textoBotaoComprar}>COMPRAR COMBO</Text>
                                                    </Pressable>
                                                </View>

                                            </View>
                                        )}
                                        keyExtractor={item => item.clubeId}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ width: widthScreen, flexDirection: "row", gap: 20, paddingHorizontal: clubeOdonto.length * 5 }}

                                    />
                                </View>
                            </>
                        }

                        {clubeNutri &&
                            <>
                                <Text style={css.textConchaClube}>CLUBE NUTRI</Text>
                                <View style={css.caixonaClube}>
                                    <FlatList
                                        data={clubeNutri}
                                        renderItem={({ item }) => (
                                            <View style={css.caixaClube}>
                                                <Text style={css.textCombo}>{item.nomeClube}</Text>
                                                <Image style={css.imagemclube} source={{ uri: item.fotoClube }} />
                                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                                <View style={css.boxTipo}>
                                                    <Pressable
                                                        style={[css.btnAnual, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Anual") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Anual" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Anual</Text>
                                                        <Text style={css.prazo}>R$ {item.valorClube},00 / mês</Text>
                                                    </View>

                                                </View>
                                                <View style={css.boxTipo}>

                                                    <Pressable
                                                        style={[css.btnMensal, { backgroundColor: (opcao.id == item.clubeId && opcao.opcao == "Mensal") ? "#B34361" : "white" }]}
                                                        onPress={() => setOpcao({ id: item.clubeId, opcao: "Mensal" })}
                                                    />
                                                    <View style={css.caixatipo}>
                                                        <Text>Mensal</Text>
                                                        <Text style={css.prazoMensal}> R$ {item.valorClube + 30},00 / mês</Text>
                                                    </View>
                                                </View>
                                                <Text style={css.textDetalhes}>{item.detalhesClube}</Text>
                                                <View>
                                                <Pressable style={css.botaocomprar} onPress={() => setPagamento(false)}>
                                                        <Text style={css.textoBotaoComprar}>COMPRAR COMBO</Text>
                                                    </Pressable>
                                                </View>
                                            </View>
                                        )}
                                        keyExtractor={item => item.clubeId}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        contentContainerStyle={{ width: widthScreen, flexDirection: "row", gap: 20, paddingHorizontal: clubeNutri.length * 5 }}
                                    />
                                </View>
                            </>
                        }

                        <View style={css.rodapeClube}></View>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

const css = StyleSheet.create({
    scrollviewClube: {
        width: "100%",
        height: "70%",
        marginTop: 20
    },
    botaoVoltar: {
        color: "#b34361",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: "75%",
        top: -20
    },
    boxClube: {
        width: "90%",
        alignSelf: "center",
        marginTop: 20,
    },
    textClube: {
        color: "#B34361",
        fontSize: 17,
        marginLeft: 30,
        fontWeight: "bold",
    },
    textfunciona: {
        fontWeight: "bold",
        marginTop: 20,
        fontSize: 16,
        textAlign: "center"
    },
    caixaBolotas: {
        display: "flex",
        flexDirection: "row",
    },
    bolotas: {
        width: 80,
        height: 80,
    },
    textbolotas: {
        width: "70%",
        height: 90,
        fontSize: 13,
        textAlign: "center",
    },
    row: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        gap: 20,
    },
    item: {
        width: "33.3%",
        alignItems: "center",
    },
    textConchaClube: {
        color: "#B34361",
        fontSize: 17,
        marginTop: 20,
        marginLeft: 30,
        fontWeight: "bold",
    },
    caixaConcha: {
        width: "100%",
        height: 100,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "grey",

    },
    caixonaClube: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 420,
        marginTop: 20,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    caixaClube: {
        backgroundColor: "#F8F1F3",
        width: 290,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#FFC0CB",

    },
    imagemclube: {
        width: "35%",
        height: 85,
        alignSelf: "center",
        marginTop: 20
    },
    textCombo: {
        fontSize: 15,
        marginTop: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    textescolha: {
        textAlign: "center",
    },
    boxTipo: {
        width: "90%",
        alignSelf: "center",
        marginTop: 13,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F1F3",
        borderWidth: 2,
        borderColor: "#FFC0CB",
        borderRadius: 5
    },
    caixatipo: {
        height: 30,
        display: "flex",
        flexDirection: "row",
        padding: 5,
        gap: 70,
    },
    prazo: {
        fontSize: 12,
        height: 30,
        width: "45%",

    },
    prazoMensal: {
        fontSize: 12,
        height: 30,
        width: "45%",

        marginLeft: -10
    },
    textDetalhes: {
        fontSize: 10,
        marginTop: 5,
        padding: 13
    },
    botao: {
        width: "90%",
        height: 30,
        alignSelf: "center",
        marginTop: 13,
        borderWidth: 2,
        borderColor: "#FFC0CB",
        borderRadius: 5
    },
    botaocomprar: {
        width: "90%",
        height: 30,
        alignSelf: "center",
        marginTop: 13,
        borderWidth: 2,
        backgroundColor: "#b34361",
        borderColor: "#b34361",
        borderRadius: 5
    },
    textoBotao: {
        width: "100%",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
    },
    textoBotaoComprar: {
        width: "100%",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 3,
        color: "white"
    },
    rodapeClube: {
        marginTop: 80,
        backgroundColor: "#f4e7eb",
        width: "100%",
        height: 80,
    },
    btnAnual: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#ffc0cb",
        marginLeft: 20,
        marginVertical: 5
    },
    btnMensal: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "#ffc0cb",
        marginLeft: 20,
        marginVertical: 5
    },
    botaovoltar: {
        fontSize: 18,
        color: 'blue',

    },

})
