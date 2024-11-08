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




