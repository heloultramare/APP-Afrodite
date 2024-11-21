import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Clube() {
    return (
        <ScrollView style={css.scrollviewClube}>
            <View style={css.containerClube}>
                <Text style={css.textClube}>CLUBE</Text>

                <Text style={css.textfunciona}>Como funciona?</Text>

                <View style={css.boxClube}>
                    <View style={css.caixaBolotas}>
                        <View style={css.row}>
                            <View>
                                <Image style={css.bolotas} source={require("../../assets/clube 1.png")} />
                                <Text style={css.textbolotas}>Escolha seu plano Afrodite: bag, box ou shell.</Text>
                            </View>
                            <View>
                                <Image style={css.bolotas} source={require("../../assets/clube 2.png")} />
                                <Text style={css.textbolotas}>Escolha a recorrência: anual ou mensal.</Text>
                            </View>
                            <View>
                                <Image style={css.bolotas} source={require("../../assets/clube 3.png")} />
                                <Text style={css.textbolotas}>Preencha seus dados</Text>
                            </View>
                        </View>

                        <View style={css.row}>
                            <View style={css.caixaBolotas}>
                                <View>
                                    <Image style={css.bolotas} source={require("../../assets/clube 4.png")} />
                                    <Text style={css.textbolotas}>Aproveite os benefícios de ser assinante</Text>
                                </View>
                                <View>
                                    <Image style={css.bolotas} source={require("../../assets/clube 5.png")} />
                                    <Text style={css.textbolotas}>Receba sua edição do mês.</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </View>

        </ScrollView>
    )
}

const css = StyleSheet.create({
    scrollviewClube: {
        height: "70%",
        marginTop: 20
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
    bolotas: {
        width: 70,
        height: 70
    },
    textbolotas: {
        width: "30%",
        height: 60
    },
    row: {
        display: "flex",
        flexDirection: "row",
        height: 400,
        width: "30%"
    }
})
