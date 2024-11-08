import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Perfil() {

    const [afrodite, setAfrodite] = useState(false);
    const [ajuda, setAjuda] = useState(false);
    return (
        
        <View style={css.container}>
            <View style={css.palavras}>
            <Text style={css.textperfil}>MEU PERFIL</Text>
            <Text style={css.textperfil}>EDITAR PERFIL</Text>
     
            </View>
        
        <View style={css.bigcontainer}>
        <Image source={require("../../assets/perfil.png")} style={css.perfil} />
        
        <Text style={css.textbemvindo}>Seja bem vindo(a), Maitê!</Text>
        
        <View style={css.boxtexto}>
            <View style={css.mconta}>
                <Icon style={css.icones} name="archive-star-outline" size={30} color="black" /><Text>Meus Combos</Text>
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="archive-outline" size={30} color="black" /><Text>Meus Agendamentos</Text>
            </View>

            <View style={css.mconta}>
                <Icon style={css.icones} name="cog" size={30} color="black" /><Text>Configurações</Text>
            </View>

            <Pressable style={css.mcontaDistante} onPress={() => setAfrodite((current) => !current)} >
                <Text style={css.contanegrito}>AFRODITE</Text><Icon style={css.icones2} name={(afrodite) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>
            {afrodite &&
                <>
                    <View style={css.mconta}>
                        <Icon style={css.icones} name="charity" size={30} color="black" /><Text>Nossa Equipe</Text>
                        
                    </View>

                </>
            }
            <Pressable style={css.mcontaDistante} onPress={() => setAjuda((current) => !current)}>
                <Text style={css.contanegrito}>AJUDA</Text><Icon style={css.icones2} name={(ajuda) ? "chevron-down" : "chevron-right"} size={23} color="black" />
            </Pressable>

            {ajuda &&

                <View style={css.mconta}>
                    <Icon style={css.icones} name="account-question" size={30} color="black" /><Text>Perguntas frequentes</Text>
                </View>  
            }
            </View>
        </View>
        </View>
    )
}

const css = StyleSheet.create({
    bigcontainer:{
        width: "100%",
        height: 510,
        display: "flex",
        alignSelf: "center",
        backgroundColor: "#F4E7EB",
        marginTop: 50,
    },
    container: {
        marginTop: 30,
    },
    boxtexto: {
        marginTop: 40,
    },

    palavras: {
        marginTop: 60,
        display: "flex",
        flexDirection: "row",
        gap: 160,
    },

    textperfil: {
        
        fontWeight: "bold",
        fontSize: 13,
        color: "#B34361",
        marginLeft: 20,
    },
    textbemvindo: {
        fontSize: 13,
        color: "black",
        alignSelf:"center",
        marginTop: 60,
        fontWeight: "bold",
        
    },
    perfil: {
        width: 130,
        height: 130,
        alignSelf:"center",
        marginVertical: -65,
    },

    imagem: {
        width: "95%",
        height: 250,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginBottom: 40,
    },
    mconta: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 20,
        marginLeft:20,
        
    },
    mcontaDistante: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginLeft:20,
    },
    contanegrito: {
        fontWeight: "bold",
        fontSize: 17,
        color: "#B34361",
    },
    icones: {
        fontSize: 22,
        marginRight: 10,
    },
    icones2: {
        fontSize: 23,
        marginRight: 20,
    },
    color: {
        color: "#B34361",
    },
})