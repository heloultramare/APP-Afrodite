import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Clube() {
    return (
        <ScrollView style={css.scrollviewClube}>
            <View style={css.containerClube}>
                <Text style={css.textClube}>CLUBE</Text>
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
                        <Text style={css.textConchaClube}>CLUBE ESTÉTICA</Text>

                        <View style={css.caixonaClube}>
                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>COMBO MAÇA DE OURO</Text>
                                <Image style={css.imagemclube} source={require("../../assets/COMBO - ESTÉTICA.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 170,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.caixona}>
                                <Text>Todo mês uma box e bag personalizadas com 8 a 11 
                                    produtos com valor +R$250</Text> 
                                </View>

                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BOX</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BOX.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 150,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BAG</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BAG - ESTÉTICA.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 130,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <Text style={css.textConchaClube}>CLUBE ODONTO</Text>
                        <View style={css.caixonaClube}>
                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>COMBO MAÇA DE OURO</Text>
                                <Image style={css.imagemclube} source={require("../../assets/COMBO - ODONTO.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 190,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BOX</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BOX.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 190,00/mês</Text>
                                    </View>
                                </View>

                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                                
                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BAG</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BAG - ODONTO.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 190,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={css.textConchaClube}>CLUBE NUTRI</Text>
                        <View style={css.caixonaClube}>
                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>COMBO MAÇA DE OURO</Text>
                                <Image style={css.imagemclube} source={require("../../assets/COMBO - NUTRIÇÃO.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 170,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BOX</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BOX.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 150,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={css.caixaClube}>
                                <Text style={css.textCombo}>BAG</Text>
                                <Image style={css.imagemclube} source={require("../../assets/BAG - NUTRIÇÃO.png")} />
                                <Text style={css.textescolha}>Escolha sua recorrência</Text>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Anual</Text>
                                        <Text style={css.prazo}>R$ 130,00/mês</Text>
                                    </View>
                                </View>
                                <View style={css.boxTipo}>
                                    <View style={css.caixatipo}>
                                        <Text style={css.prazo}>Mensal</Text>
                                        <Text style={css.prazo}>R$ 200,00/mês</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

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
        fontSize: 13
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
        height: 350,
        gap: 10,
        marginTop: 20,
        justifyContent: 'center',
    },
    caixaClube: {
        backgroundColor: "#F8F1F3",
        width: '60%',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#FFC0CB"

    },
    imagemclube: {
        width: "40%",
        height: 80,
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
        textAlign: "center"
    },
    boxTipo: {
        width: "90%",
        alignSelf: "center",
        marginTop: 13,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#F8F1F3",
        borderWidth: 2,
        borderColor: "#B34361",
        borderRadius: 5
    },
    caixatipo: {
        height: 30,
        display: "flex",
        flexDirection: "row",
        gap: 20,
    },
    prazo: {
        padding: 5
    },
    rodapeClube: {
        marginTop: 80,
        backgroundColor: "#f4e7eb",
        width: "100%",
        height: 80,
    }

})
