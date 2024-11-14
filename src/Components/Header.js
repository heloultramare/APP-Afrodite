<<<<<<< HEAD
import { ImportExport } from 'aws-sdk';
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


export default function Header({ texto, cor, props }) {

  const navigation = useNavigation();

  return (
    <View style={[css.header, { backgroundColor: (cor) ? cor : "#F4E7EB", }]}>
      <View style={css.headerText}>

        <Icon name="menu" size={30} color="#B34361"  title="Abrir" style={{ position: "absolute", top: 60, left: 30, zIndex: 1}} onPress={() => props.navigation.openDrawer()}/>
        <Icon name="account-circle" size={30} color="#B34361" title="Abrir" style={{ position: "absolute", top: 60, left: 350, zIndex: 1 }} onPress={() => navigation.navigate('OtherScreen')}/>

        {texto && <Text style={css.texto}>{texto}</Text>}
        

      </View>
      {!texto && <Image style={css.logo} source={require("../../assets/logoconchaescrita.png")} />}
      



    </View>

  )
}

const css = StyleSheet.create({
  header: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    top: 25
  },
})




=======
import { StyleSheet, View, Image } from "react-native"

export default function Header() {
    return (
        <View style={css.header}>
            <View style={css.img}>
                <Image style={css.imgreal} source={require('../../assets/AFRODITE.png')} />
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    img: {
        height: 100,
    },
    imgreal: {
        height: 120,
        width: 200,
        resizeMode: "cover",
        alignSelf: "center"
    },
    header: {
        width: "100%",
        height: 180,
        position: "absolute",
        top: 0,
        backgroundColor: "#F4E7EB",
        justifyContent: "center",
        alignItens: "center"
    },
})
>>>>>>> f9ee73b5e926d88409047276e00059543122bd21
