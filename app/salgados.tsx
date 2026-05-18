import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const itens = [
    {
        nome: "Coxinha",
        descricao: "Coxinha de frango com requeijão.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/coxinha.png")
    },
    {
        nome: "Esfiha",
        descricao: "Esfiha de frango com requeijão.",
        preco: "R$ 5,00",
        imagem: require("../assets/images/espiha.png")
    },
    {
        nome: "Risole",
        descricao: "Risole, feito com massa de pastel recheada com carne moída.",
        preco: "R$ 6,00",
        imagem: require("../assets/images/risoles.png")
    },
    {
        nome: "Pão de queijo",
        descricao: "Pão de queijo, feito com massa de queijo e recheado com queijo.",
        preco: "R$ 7,00",
        imagem: require("../assets/images/paodequeijo.png")
    },
    {
        nome: "Hambúguer",
        descricao: "Hambúguer, feito com carne moída e pão de hambúguer.",
        preco: "R$ 8,00",
        imagem: require("../assets/images/hamburguer.png")
    },
    {
        nome: "Pizza",
        descricao: "Pizza, feita com massa super leve e fofinha com recheio de creme de confeiteiro.",
        preco: "R$ 7,00",
        imagem: require("../assets/images/pizzas.png")
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
                        Os melhores Salgados{"\n"}os melhores Salgados da região!
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