import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const itens = [
    {
        nome: "Coxinha",
        descricao: "Massa de batata, recheada com frango desfiado e requeijão, empanada e frita.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/Rectangle 92.png")
    },
    {
        nome: "Esfiha",
        descricao: "Massa macia assada, recheada com carne, frango ou calabresa temperada.",
        preco: "R$ 5,00",
        imagem: require("../assets/images/image 32.png")
    },
    {
        nome: "Risole",
        descricao: "Massa leve, recheada com presunto e queijo, empanada e frita até dourar.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/image 34.png")
    },
    {
        nome: "Pão de queijo",
        descricao: "Bolinho assado de polvilho e queijo, crocante por fora e macio por dentro.",
        preco: "R$ 5,00",
        imagem: require("../assets/images/image 32 (2).png")
    },
    {
        nome: "Hambúrguer",
        descricao: "Pão macio recheado com carne bovina grelhada, queijo derretido, alface, tomate e molho especial.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/Rectangle 90.png")
    },
    {
        nome: "Pizza",
        descricao: "Massa fina assada, coberta com molho de tomate e queijo derretido.",
        preco: "R$ 5,00",
        imagem: require("../assets/images/image 32 (1).png")
    },

];

export default function Salgados() {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <Image source={require("../assets/images/logo.png")} style={styles.headerLogo} />
                </View>

                <View style={styles.headerTop}>
                    <Ionicons name="arrow-back" size={22} color="#d06b2f" />
                    <Text style={styles.title}>Salgados</Text>
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.subtitle}>
                        Os melhores salgados{"\n"}para o seu momento de fome!
                    </Text>

                    <Image
                        source={require("../assets/images/chef.png")}
                        style={styles.chef}
                    />
                </View>

                {itens.map((item, index) => (
                    <View key={index} style={styles.card}>

                        <Image source={item.imagem} style={styles.image} />

                        <View style={styles.info}>
                            <Text style={styles.nome}>{item.nome}</Text>
                            <Text style={styles.desc}>{item.descricao}</Text>
                        </View>

                        <View style={styles.priceBox}>
                            <Text style={styles.preco}>{item.preco}</Text>
                            <Text style={styles.unidade}>unidade</Text>
                            <Text style={styles.restante}>restantes: 8</Text>
                        </View>

                    </View>
                ))}

            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="person" size={22} color="#c94c2c" />
                    <Text style={styles.footerText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="cart" size={22} color="#c94c2c" />
                    <Text style={styles.footerText}>Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9e2d8",
    },

    header: {
        height: 100,
        padding: 10,
        backgroundImage: 'radial-gradient(circle, #C1442E 0%, #71271B 100%)',
    },
    
    headerLogo: {
        width: 100,
        height: 100,
        padding: 10,
    },

    headerTop: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
    },

    title: {
        fontSize: 32,
        color: "#d06b2f",
        fontWeight: "medium",
        marginLeft: 10,
        marginBottom: 0,
    },

    headerContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom:10
    },

    subtitle: {
        padding: 25,
        color: "#555",
        flex: 1,
    },

    chef: {
        width: 100,
        height: 100,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginBottom: 12,
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        elevation: 3,
    },

    image: {
        width: 65,
        height: 65,
        borderRadius: 10,
    },

    info: {
        flex: 1,
        marginHorizontal: 10,
    },

    nome: {
        fontWeight: "bold",
        fontSize: 14,
    },

    desc: {
        fontSize: 11,
        color: "#777",
    },

    priceBox: {
        alignItems: "flex-end",
    },

    preco: {
        color: "#ff3b30",
        fontWeight: "bold",
        fontSize: 14,
    },

    unidade: {
        fontSize: 10,
        color: "#777",
    },

    restante: {
        fontSize: 10,
        color: "#ff3b30",
        marginTop: 4,
    },

    footer: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#c94c2c",
    },

    footerItem: {
        alignItems: "center",
    },

    footerText: {
        fontSize: 12,
        color: "#c94c2c",
        marginTop: 3,
    },
});