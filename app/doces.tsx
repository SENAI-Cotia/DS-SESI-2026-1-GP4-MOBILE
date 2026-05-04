// Testar
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
        nome: "Brigadeiro",
        descricao: "Brigadeiro feito com leite condensado, creme de leite e cacau em pó 50%.",
        preco: "R$ 4,00",
        imagem: require("../assets/images/brigadeiro.png")
    },
    {
        nome: "Beijinho",
        descricao: "Beijinho feito com leite condensado, creme de leite e côco ralado.",
        preco: "R$ 4,00",
        imagem: require("../assets/images/beijinho.png")
    },
    {
        nome: "Mini pudim",
        descricao: "Mini Pudim, feito com leite condensado, ovos, leite integral e açúcar pra a calda.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/pudim.png")
    },
    {
        nome: "Croissant de chocolate",
        descricao: "Croissant de chocolate, feito com massa folhada amanteigada recheada com chocolate.",
        preco: "R$ 7,00",
        imagem: require("../assets/images/croissaint.png")
    },
    {
        nome: "Bolo de pote",
        descricao: "Bolo de pote, feito com massa de chocolate com recheio de bigadeiro de cacau em pó 50%.",
        preco: "R$ 8,00",
        imagem: require("../assets/images/bolodepote.png")
    },
    {
        nome: "Sonho",
        descricao: "Sonho, feito com massa super leve e fofinha com recheio de creme de confeiteiro.",
        preco: "R$ 7,00",
        imagem: require("../assets/images/sonho.png")
    },

];

export default function Doces() {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <Image source={require("../assets/images/logo.png")} style={styles.headerLogo} />
                </View>

                <View style={styles.headerTop}>
                    <Ionicons name="arrow-back" size={22} color="#d06b2f" />
                    <Text style={styles.title}>Doces</Text>
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.subtitle}>
                        Os melhores doces{"\n"}os melhores doces  da região!
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
                            <Text style={styles.restante}>restantes: 14</Text>
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