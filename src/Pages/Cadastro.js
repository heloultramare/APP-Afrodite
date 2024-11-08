import { Text, TextInput, FlatList, TouchableHighlight, TouchableOpacity, View, StyleSheet, ScrollView, Pressable } from "react-native";
import React, { useState } from 'react'
import Header from "../Components/Header";


export default function Cadastro({ setLogado, setCadastro, setCpf }) {

    const [masculino, setMasculino] = useState(false);
    const [feminino, setFeminino] = useState(false);

    console.log(masculino);

    function Cadastrar() {
        setCadastro(false);
        setLogado(false);
    }

    function Voltar() {
        setCadastro(false);
        setLogado(false);
    }
    return (
        <View style={css.container}>
            <Header />
            <ScrollView
                style={css.scrollContent}
                contentContainerStyle={css.content}
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
                showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >

                <Text style={css.btnTpc}>Nome:</Text>
                <TextInput
                    style={css.nome}
                />
                <Text style={css.Dtn}>Data de Nascimento:</Text>
                <TextInput
                    style={css.nome}
                />
                <Text>Sexo:</Text>
                <View style={css.flex}>
                    <Pressable
                        style={[css.radioBtn, { backgroundColor: masculino ? "#B34361" : "white" }]}
                        onPress={() => {
                            setMasculino(true);
                            setFeminino(false);
                        }}
                    />
                    <Text>Masculino</Text>
                    
                    <Pressable
                        style={[css.radioBtn2, { backgroundColor: feminino ? "#B34361" : "white" }]}
                        onPress={() => {
                            setFeminino(true);
                            setMasculino(false);
                        }}
                    />
                    <Text style={css.sexo2}>Feminino</Text>
                </View>
                <Text style={css.Cpf}>CPF:</Text>
                <TextInput
                    style={css.nome}
                />
                <Text style={css.Tel}>Telefone:</Text>
                <TextInput
                    style={css.nome}
                />
                <Text style={css.Sen}>Email:</Text>
                <TextInput
                    style={css.nome}
                />
                <Text style={css.Sen}>Senha:</Text>
                <TextInput
                    style={css.nome}
                />
                <TouchableOpacity style={css.btn} onPress={Cadastrar}>
                    <Text style={css.btnText}>Cadastrar</Text>
                </TouchableOpacity>
                <View style={css.flex}>
                    <Text style={css.textesqueceu}>Já tem Cadastro?</Text>
                    <TouchableOpacity onPress={Voltar}>
                        <Text style={css.fzrlogin}>FAZER LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={css.fim}></View>
            </ScrollView>

        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center"
    },
    scrollContent: {
        width: "90%",
        height: "80%",
        marginTop: 200
    },
    content: {
        justifyContent: "center"
    },
    btn: {
        width: '100%',
        height: 55,
        backgroundColor: "#B34361",
        borderRadius: 5,
        marginTop: 20,
        alignSelf: "center"
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
        lineHeight: 52
    },
    nome: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#F4E7EB",
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginBottom: 40,
        marginTop: 150
    },
    fzrlogin: {
        color: "#B34361"
    },
    btnTpc: {
        marginRight: 300,
    },
    Dtn: {
        marginRight: 215,
    },
    Tel: {
        marginRight: 290,
    },
    Cpf: {
        marginRight: 315,
    },
    Sen: {
        marginRight: 305,
    },
    flex: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 10,
    },
    fim: {
        width: "100%",
        height: 100
    },
    radioBtn: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
    },
    radioBtn2: {
        width: 20,
        height: 20,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,    
    },
    sexo2: {
     marginRight: 170,
    },
})