import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../Components/Header';
import Clube from '../Pages/Clube';


export default function Home(cor, borda) {

  return (
    <ScrollView style={css.scrollview} >
      <Image style={css.imagebanner} source={require("../../assets/BANNERS - AFRODITE LIFECARE.png")} />
      <View style={css.container}>
        <View style={css.caixa}>
          <Image style={css.imagemcaixa} source={require("../../assets/AFRODITE LIFECARE.png")} />
        </View>
        <View style={css.caixa}>
          <Image style={css.imagemcaixa} source={require("../../assets/AFRODITE LIFECARE - FUNDO BEGE.png") } />
        </View>
        <View style={css.linha}></View>

        <View style={css.caixacontato}>
          <View style={css.contato}>
            <Text style={css.textcontato}>Contato</Text>
            <Text style={css.textmelhorforma}>Escolha a melhor forma e entre em contato</Text>
          </View>


          <View style={css.caixaiconehome}>
            <Icon style={css.iconeshome} name="cellphone" size={23} color="white" /><Text style={css.texticon}>WhatsApp: 11 5461-7946</Text>
          </View>

          <View style={css.caixaiconehome}>
            <Icon style={css.iconeshome} name="map-marker" size={23} color="white" /><Text style={css.texticon}>Av. Brigadeiro Faria Lima, 280. São Paulo - SP CEP: 01451-001</Text>
          </View>
          <View style={css.caixaiconehome}>
            <Icon style={css.iconeshome} name="email-outline" size={23} color="white" /><Text style={css.texticon}>afroditelifecare@gmail.com</Text>
          </View>

          
        </View>
        <View style={css.container2}>
            <View style={css.caixaprofissional}>
              <View>
              <Image style={css.imagemprofissional} source={require("../../assets/M.H.png")} />
              <Text style={css.nomeprofissional}>Dra. Maria Heloísa Carvalho</Text>
              <Text style={css.profissao}>Dentista geral e pediatra </Text>
              </View>

              <View>
              <Image style={css.imagemprofissional} source={require("../../assets/L.A.png")} />
              <Text style={css.nomeprofissional}>Dr. Leonardo Alves</Text>
              <Text style={css.profissao}>Dentista geral e pediatra </Text>
              </View>              
            </View>

            <View style={css.caixaprofissional}>
              <View>
              <Image style={css.imagemprofissional} source={require("../../assets/H.U.png")} />
              <Text style={css.nomeprofissional}>Dra. Heloísa Ultramare</Text>
              <Text style={css.profissao}>Esteticista </Text>
              </View>

              <View>
              <Image style={css.imagemprofissional} source={require("../../assets/P.R.png")} />
              <Text style={css.nomeprofissional}>Dra. Paola Rovari</Text>
              <Text style={css.profissao}>Esteticista</Text>
              </View>              
            </View>

            <View style={css.caixaprofissional}>
              <View>
              <Image style={css.imagemprofissional5} source={require("../../assets//R.C.png")} />
              <Text style={css.nomeprofissional5}>Dr. Rafael Celes Freitas</Text>
              <Text style={css.profissao5}>Nutricionista</Text>
              </View>            
            </View>
          </View>
      </View>
      <View style={css.rodape}>
      
      </View>
    </ScrollView>
   

  )
}

const css = StyleSheet.create({
  scrollview:{
    height: "70%",
  },
  imagebanner: {
    width: "100%",
    height: 130,
    resizeMode: "contain",
  },
  container: {
    marginTop: 100,
    gap: 100,
  },
  caixa: {
    width: "100%",
    height: 220,
    backgroundColor: "#f4e7eb",
    alignItems: "center",
  },
  imagemcaixa: {
    width: "50%",
    height: 200,
    objectFit: "cover",
    alignItems: "center",
    marginVertical: -30,
    borderRadius: 6
  },
  linha: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: 2,
    marginVertical: -60,
  },
  caixacontato: {
    width: "90%",
    height: 230,
    backgroundColor: "#B34361",
    alignSelf: "center",
  },
  contato: {
    backgroundColor: "#FFDDE2",
    height: 50,

  },
  textcontato: {
    marginTop: 7,
    color: "#b34361",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  textmelhorforma: {
    color: "#b34361",
    fontSize: 13,
    textAlign: "center",
  },
  caixaiconehome: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20
  },
  iconeshome:{
    gap: 10,
    padding:5
  },
  texticon:{
    color: "white",
    padding: 4
  },
 caixaprofissional: {
    width: "100%",
    height: 160,
    backgroundColor: "#f4e7eb",
    display: "flex",
    flexDirection: "row",
    gap: 30
},
nomeprofissional:{
  top: 10,
  fontWeight: "bold",
  color: "#b34361",
  marginLeft: 15,
  fontSize: 13,
  textAlign: "center"

},
profissao:{
  top:12,
  textAlign: "center",
  marginLeft: 15,
  fontSize: 12,
  color: "#b34361",
},
imagemprofissional: {
  width: 130,
  height: 130,
  objectFit: "contain",
  marginLeft: 35,
  marginTop: -30,
  borderRadius: 6,
},
imagemprofissional5:{
  width: 130,
  height: 130,
  objectFit: "contain",
  marginTop: -30,
  borderRadius: 6,
  marginLeft: 140,
},
nomeprofissional5:{
  top: 10,
  fontWeight: "bold",
  color: "#b34361",
  marginLeft: 122,
  fontSize: 13,
  textAlign: "center"

},
profissao5:{
  top: 12,
  textAlign: "center",
  marginLeft: 122,
  fontSize: 12,
  color: "#b34361",
},
container2: {
  gap: 80
},
rodape:{
  marginTop: 80,
  backgroundColor: "#f4e7eb",
  width: "100%",
  height: 80,
}

})
