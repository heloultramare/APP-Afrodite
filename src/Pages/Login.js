import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Keyboard } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Cadastro from './Cadastro';

export default function Login({setCadastro}) {
  
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const {Login} = useContext( AuthContext );


    function HandleLogin()
    {
        Login(email, senha );
    }
    return (
        <View style={css.View}>
        <View style={css.header}></View>
        <View style={css.welcome}>
            <Text style={css.welcomeText}></Text>
        </View>
        <View style={css.img}>
        <Image style={css.imgreal} source={require('../../assets/AFRODITE.png')} />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemail}>Email:</Text>
            <TextInput 
                onChangeText={(digitado) => setEmail(digitado)}
                value={email}
                style={css.inputs}
            />
        </View>
        <View style={css.inputBox}>
            <Text style={css.textsenhaemail}>Senha:</Text>
            <TextInput 
                onChangeText={(digitado) => setSenha(digitado)}
                value={senha}
                secureTextEntry={true}
                style={css.inputs}
            />
            <View style={css.flex2}>
            <Text style={css.textesqueceu}>Esqueceu sua senha?</Text>
        </View>
        </View>        
        <TouchableOpacity onPress={HandleLogin} style={css.btn}>
            <Text style={css.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <View style={css.flex}>
            <Text style={css.textesqueceu}>Não tem cadastro?</Text>
            <View>
        <TouchableOpacity onPress={() => { setCadastro( true ) }}>
                <Text style={css.textesqueceu2}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

const css = StyleSheet.create( {
    View: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom:20
    },
    header: {
        width: "100%",
        height: 200,
        position: "absolute",
        top: 0,
        backgroundColor: "#F4E7EB",
    },
    welcome: {
        marginTop: 150
    },
    welcomeText: {
        fontSize: 27,
    },
    inputBox: {
        width: "80%",
        marginTop: 20,
        
    },
    inputs: {
        width: "100%",
        height: 55,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#F4E7EB"
    },
    btn: {
        width: "80%",
        height: 55,
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: "#B34361",
        justifyContent: "center",
        color: "white",
        borderWidth: 1,
        borderColor: "black"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flex: {
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 5,
    },
    boxBottom: {
        width: "80%",
        marginTop: 50,
    },
    btnSmall: {
        width: "50%",
        height: 55,
        borderRadius: 5,
        marginTop: 70,
        justifyContent: "center",
        color: "white",
        alignSelf: "center",
        marginBottom: 5,
    },
    textBottom: {
        textAlign: "center"
    },
    textesqueceu: {
        color:"black", 
    },
    textesqueceu2: {
        color: "#B34361",
    },
    flex2: {
        color:"black",
        width: "100%",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "flex-start",

    },
    textsenhaemail: {
        color:"black",
    },
    img: {
        height: 100,
    },
    imgreal: {
        height: 120,
        width: 200,
        top: -130
    },
})