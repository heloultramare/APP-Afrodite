import { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable } from "react-native";

export default function Agend1() {
  const [Agend1, setAgend1] = useState(false);
  const [Areas, setAreas] = useState(false);

  return (
    <ScrollView>
      <View>
        <Image style={css.imagembanner} source={require("../../assets/agendeafrodite.png")} />
        <Text style={css.texto1}>AFRODITE LIFECARE</Text>
        <Text style={css.texto2}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP</Text>

        <Pressable style={css.boxRegras} onPress={() => setAgend1((current) => !current)} >
          <Text style={css.textRegras}>Regras de Saúde e Segurança</Text><Icon style={css.iconeRegras} name={(Agend1) ? "chevron-down" : "chevron-right"} size={23} color="black" />
        </Pressable>


        <Pressable style={css.boxAreas} onPress={() => setAreas((current) => !current)} >
          <Text style={css.textAreas}>ESTÉTICA</Text><Icon style={css.icones2} name={(Areas) ? "chevron-down" : "chevron-right"} size={23} color="black" />
        </Pressable>
        {Areas &&
          <>
            <View style={css.caixa}>
              <View style={css.caixaestetica}>
                <Text>Preenchimento Facial - Facial / R$ 3.000,00</Text>
              </View>

              <View style={css.caixaestetica}>
                <Text>Aplicação de Toxina Botulínica (Botox) - Facial / R$ 900,00</Text>
              </View>

              <View style={css.caixaestetica}>
                <Text>Microagulhamento - Facial / R$ 150,00</Text>
              </View>

              <View style={css.caixaestetica}>
                <Text>Lipo Enzimática de Papada - Facial / R$ 800,00</Text>
              </View>

              <View style={css.caixaestetica}></View>
              <Text>Fios de PDO - Facial / R$ 6.000,00</Text>
            </View>

            <Text style={css.ProcedimentosEstética}>Limpeza de pele - Facial/ R$ 250,00</Text>

            <Text style={css.ProcedimentosEstética}>Bioestimulador - Facial / R$ 2.500,00</Text>

            <Text style={css.ProcedimentosEstética}>Peelings Químicos - Facial  / R$ 350,00</Text>

            <Text style={css.ProcedimentosEstética}>Criolipólise - Corporal / R$ 600,00</Text>

            <Text style={css.ProcedimentosEstética}>Drenagem Linfática - Corporal / R$ 100,00</Text>

            <Text style={css.ProcedimentosEstética}>Crioterapia - Corporal / R$ 600,00</Text>

            <Text style={css.ProcedimentosEstética}>Radiofrequência - Corporal / R$ 300,00</Text>

            <Text style={css.ProcedimentosEstética}>Ozonioterapia Capilar - Capilar / R$ 500,00</Text>

            <Text style={css.ProcedimentosEstética}>Terapia Capilar - Capilar / R$ 500,00</Text>

            <Text style={css.ProcedimentosEstética}>Mesoterapia Capilar - Capilar / R$ 300,00</Text>

            <Text style={css.ProcedimentosEstética}>ILIB - Capilar / R$ 500,00</Text>
          </>
        }
      </View>

    </ScrollView >



  )
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
    fontSize: 15,
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
    color: "#B34361"
  },
  caixaestetica: {
    fontSize: 13,
    fontWeight: "bold",
    color: "black"

  },
})
