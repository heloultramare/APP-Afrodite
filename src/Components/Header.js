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