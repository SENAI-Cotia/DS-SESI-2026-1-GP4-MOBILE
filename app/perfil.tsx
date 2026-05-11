import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Index() {
    const pedidos = [
        {
            id: 1,
            nome: "Coxinha",
            preco: "R$ 6,00",
            quantidade: 1,
            imagem:
                "data:image/jpeg;base64,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",
        },
        {
            id: 2,
            nome: "Chá Matte",
            preco: "R$ 7,00",
            quantidade: 1,
            imagem:
                "data:image/jpeg;base64,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",
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <Image source={require("../assets/images/logo.png")} style={styles.headerLogo} />
                </View>

                <View style={styles.profileArea}>
                    <View style={styles.userRow}>
                        <View style={styles.iconCircle}>
                            <Ionicons name="person" size={45} color="#fff" />
                        </View>

                        <View>
                            <Text style={styles.userName}>Maria</Text>

                            <View style={styles.userId}>
                                <Ionicons
                                    name="create-outline"
                                    size={14}
                                    color="#8f8f8f"
                                />

                                <Text style={styles.userText}>
                                    User_012345678
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.profileButton}>
                        <Text style={styles.profileButtonText}>
                            Meu Perfil
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Nome completo</Text>
                        <Text style={styles.value}>Maria</Text>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Data de nascimento</Text>
                        <Text style={styles.value}>19/03/1993</Text>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>CPF</Text>
                        <Text style={styles.value}>123.456.789-32</Text>
                    </View>

                    <View style={styles.inputBox}>
                        <Text style={styles.label}>Telefone</Text>
                        <Text style={styles.value}>(11) 1234-5678</Text>
                    </View>
                </View>

                <View style={styles.titleArea}>
                    <Text style={styles.titlePedidos}>
                        Últimos pedidos
                    </Text>
                </View>/

                <View style={styles.ordersContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={styles.date}>16/04/26</Text>

                        <Text style={styles.total}>
                            Valor total: R$13,00
                        </Text>
                    </View>

                    {pedidos.map((item) => (
                        <View key={item.id} style={styles.orderCard}>
                            <Image
                                source={{ uri: item.imagem }}
                                style={styles.foodImage}
                            />

                            <View style={styles.orderInfo}>
                                <Text style={styles.foodName}>
                                    {item.nome}
                                </Text>

                                <Text style={styles.foodDescription}>
                                    massa de batata, recheada com frango
                                    desfiado e requeijão,
                                    empanada e frita.
                                </Text>
                            </View>

                            <View style={styles.priceArea}>
                                <Text style={styles.price}>
                                    {item.preco}
                                </Text>

                                <Text style={styles.quantity}>
                                    Quantidade: {item.quantidade}
                                </Text>
                            </View>
                        </View>
                    ))}

                    <View style={styles.footerOrder}>
                        <View style={styles.footerItem}>
                            <Ionicons
                                name="time-outline"
                                size={14}
                                color="#000"
                            />

                            <Text style={styles.footerText}>
                                15:12
                            </Text>
                        </View>

                        <View style={styles.footerItem}>
                            <Ionicons
                                name="restaurant"
                                size={14}
                                color="#000"
                            />

                            <Text style={styles.footerText}>
                                Pix
                            </Text>
                        </View>

                        <View style={styles.footerItem}>
                            <Ionicons
                                name="ticket-outline"
                                size={14}
                                color="#000"
                            />

                            <Text style={styles.footerText}>
                                27
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomTab}>
                <TouchableOpacity style={styles.tabItem}>
                    <Ionicons
                        name="person"
                        size={22}
                        color="#c9573d"
                    />

                    <Text style={styles.tabText}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabItem}>
                    <Ionicons
                        name="cart"
                         size={22}
                        color="#c9573d"
                    />

                    <Text style={styles.tabText}>Carrinho</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4efe7",
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

    profileArea: {
        padding: 20,
    },

    userRow: {
        flexDirection: "row",
        alignItems: "center",
    },

    iconCircle: {
        width: 70,
        height: 70,
        borderRadius: 40,
        backgroundColor: "#c9573d",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },

    userName: {
        fontSize: 34,
        fontWeight: "bold",
        color: "#111",
    },

    userId: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    userText: {
        color: "#8a8a8a",
        fontSize: 14,
    },

    profileButton: {
        marginTop: 18,
        backgroundColor: "#fff",
        alignSelf: "flex-start",
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 15,
        elevation: 5,
    },

    profileButtonText: {
        color: "#d15d42",
        fontSize: 25,
        fontWeight: 400,
    },

    card: {
        backgroundColor: "#f3d5c5",
        marginHorizontal: 25,
        borderRadius: 22,
        padding: 18,
        elevation: 5,
    },

    inputBox: {
        marginBottom: 12,
    },

    label: {
        color: "#9d8d8d",
        marginBottom: 5,
        fontWeight: "600",
    },

    value: {
        backgroundColor: "#f8e6d8",
        padding: 14,
        borderRadius: 20,
        fontSize: 18,
        color: "#5a5555",
    },

    titleArea: {
        alignItems: "center",
        marginVertical: 18,
    },

    titlePedidos: {
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 20,
        color: "#d15d42",
        fontSize: 18,
        fontWeight: "bold",
    },

    ordersContainer: {
        backgroundColor: "#f3d5c5",
        marginHorizontal: 28,
        borderRadius: 10,
        padding: 10,
        marginBottom: 100,
    },

    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    date: {
        fontSize: 16,
        color: "#000",
    },

    total: {
        color: "#d15d42",
        fontSize: 18,
    },

    orderCard: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        flexDirection: "row",
        marginBottom: 12,
        elevation: 3,
    },

    foodImage: {
        width: 60,
        height: 60,
        marginRight: 10,
    },

    orderInfo: {
        flex: 1,
    },

    foodName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#111",
    },

    foodDescription: {
        fontSize: 12,
        color: "#777",
    },

    priceArea: {
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    price: {
        color: "#ff5a36",
        fontSize: 18,
        fontWeight: "bold",
    },

    quantity: {
        color: "#ff8a42",
        fontSize: 12,
        fontWeight: "600",
    },

    footerOrder: {
        flexDirection: "row",
        gap: 20,
        marginTop: 5,
        paddingHorizontal: 10,
    },

    footerItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    footerText: {
        fontWeight: "bold",
    },

    bottomTab: {
        height: 70,
        borderTopWidth: 1,
        borderColor: "#d15d42",
        backgroundColor: "#f4efe7",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    tabItem: {
        alignItems: "center",
    },

    tabText: {
        color: "#c9573d",
        fontWeight: "medium",
        fontSize: 12,
    },
});