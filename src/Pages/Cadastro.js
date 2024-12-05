import { Text, TextInput, FlatList, TouchableHighlight, TouchableOpacity, Alert, View, StyleSheet, ScrollView, Pressable, Image } from "react-native";
import React, { useState } from 'react'
import Header from "../Components/Header";


export default function Cadastro({ setCadastro }) {

    const [masculino, setMasculino] = useState(false);
    const [feminino, setFeminino] = useState(false);
    const[email, setEmail] = useState("");
    const[nome, setNome] = useState("");
    const[senha, setSenha] = useState("");
    const[datanascimento, setDataNascimento] = useState("");
    const[cpf, setCPF] = useState("");
    const[telefone, setTelefone] = useState("");
    const[sexo, setSexo] = useState("");

    const handleCPFChange = (text) => {
        // Remove qualquer caractere que não seja número
        const somenteNumeros = text.replace(/[^0-9]/g, '');
        setCPF(somenteNumeros);
    };

    const handleTelChange = (text) => {
        // Remove qualquer caractere que não seja número
        const somenteNumeros = text.replace(/[^0-9]/g, '');
        setTelefone(somenteNumeros);
    };
    
    async function Cadastrar() {
        
            console.log("Dados de cadastro:", { nome, email, datanascimento, cpf, sexo, telefone, senha});
            await fetch('http://10.133.22.34:5251/api/Cliente/CreateCliente', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    nomeCliente: nome,
                    emailCliente: email,
                    dataNascimentoCliente: datanascimento,
                    cpfCliente: cpf,
                    sexoCliente: ( masculino ) ? "masculino" : "feminino",
                    telCliente: telefone,
                    senhaCliente: senha,
                }),
            })
                .then((res) => res.json())
                .then((json) => {
                    if (json.clienteId) {
                        setCadastro(true)
                        Alert.alert("Sucesso", "Cadastro concluido com sucesso!");
                    }
                })
                .catch((err) => console.log(err));
        }

        function Voltar(){
            setCadastro(false)
        }

    return (
        
        <View style={css.container}>
            <View style={css.header}></View>
            <View style={css.img}>
                <Image style={css.imgreal} source={require('../../assets/AFRODITE.png')} />
            </View>
            <ScrollView
                style={css.scrollContent}
                contentContainerStyle={css.content}
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
                showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
            >
                <Text style={css.btnTpc}>Nome:</Text>
                <TextInput
                    style={css.nome}
                    onChangeText={(digitado) => setNome(digitado)}
                    value={nome}
                />
                <Text style={css.Dtn}>Data de Nascimento:</Text>
                <TextInput
                    style={css.nome}
                    onChangeText={(digitado) => setDataNascimento(digitado)}
                    value={datanascimento}
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
                        value={sexo}
                        onChangeText={(digitado) => setSexo(digitado)}
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
                    value={cpf}
                    keyboardType="numeric" // Garante o teclado numérico
                    onChangeText={handleCPFChange}
                />
                <Text style={css.Tel}>Telefone:</Text>
                <TextInput
                    style={css.nome}
                    value={telefone}
                    keyboardType="numeric" // Garante o teclado numérico
                    onChangeText={handleTelChange}
                />
                <Text style={css.Sen}>Email:</Text>
                <TextInput
                    style={css.nome}
                    onChangeText={(digitado) => setEmail(digitado)}
                    value={email}
                />
                <Text style={css.Sen}>Senha:</Text>
                <TextInput
                    style={css.nome}
                    onChangeText={(digitado) => setSenha(digitado)}
                    value={senha}
                    secureTextEntry={true} // Oculta os caracteres
                />
                <TouchableOpacity onPress={Cadastrar} style={css.btn}>
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
    header: {
        width: "100%",
        height: 200,
        position: "absolute",
        top: 0,
        backgroundColor: "#F4E7EB",
    },
    img: {
        height: 100,
    },
    imgreal: {
        height: 120,
        width: 200,
        marginTop: 40
    },
    scrollContent: {
        width: "90%",
        height: "80%",
        marginTop: 110
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