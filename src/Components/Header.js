import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from '../Pages/Perfil';


export default function Header({ texto, cor }) {

    const navigation = useNavigation();  
    const screenWidth = Dimensions.get("screen").width;

    const [perfil, setPerfil] = useState(false);

    if (perfil) {
        return (
            <Perfil setPerfil={setPerfil} />
        );
    }

    return (
        <View style={[css.header, { width: screenWidth }]}>
            <TouchableOpacity
                style={{ zIndex: 1, marginTop: 20 }}
                onPress={() => navigation.openDrawer()} 
            >
                <Icon name="menu" size={30} color="#B34361" title="Abrir" />
            </TouchableOpacity>
                
           
          
            <Image style={css.logo} source={require("../../assets/logoconchaescrita.png")} />
                
            <TouchableOpacity
                onPress={() => navigation.navigate("Perfil")}  
                style={{ zIndex: 2, marginTop: 20 }}
            >
                <Icon name="account-circle" size={30} color="#B34361" title="Abrir" />
            </TouchableOpacity>
        </View>
    );
}

const css = StyleSheet.create({
    header: {
        height: 120,
        flexDirection: "row",
        justifyContent: "space-around",  
        alignItems: "center",            
        backgroundColor: "#F4E7EB"
    },
    logo: {
        width: "70%",    
        height: 100,      
        resizeMode: "contain", 
        top: 10
    },
});