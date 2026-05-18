import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Index() {
  const [quantidade, setQuantidade] = useState(1);
  const [estoque, setEstoque] = useState(4);

  const precoUnitario = 5;
  const precoTotal = precoUnitario * quantidade;

  function aumentar() {
    if (quantidade < estoque) {
      setQuantidade(quantidade + 1);
    } else {
      Alert.alert("Limite atingido", "Não há mais brigadeiros disponíveis.");
    }
  }

  function diminuir() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function adicionarItens() {
    if (estoque <= 0) {
      Alert.alert("Produto esgotado");
      return;
    }

    setEstoque(estoque - quantidade);

    Alert.alert(
      "Carrinho atualizado 🛒",
      `${quantidade} brigadeiro(s) adicionado(s)`
    );

    setQuantidade(1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={22} color="#9b5b4b" />
        </TouchableOpacity>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/brigadeiro2.png")}
            style={styles.brigadeiroImage}
          />

          <View style={styles.infoArea}>
            <Text style={styles.title}>Brigadeiro</Text>

            <Text style={styles.description}>
              Feito com leite condensado, chocolate em pó e manteiga,
              cozido até atingir o ponto cremoso e depois enrolado em
              bolinhas cobertas com granulado de chocolate.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Ingredientes:</Text>

        <View style={styles.ingredients}>
          <View style={styles.item}>
            <Image   source={require("../assets/images/leitecondensado.png")}   style={{ width: 38, height: 38}} />
            <Text style={styles.itemText}>Leite condensado</Text>
          </View>

          <View style={styles.item}>
            <Image   source={require("../assets/images/cremedeleite.png")}   style={{ width: 38, height: 38}} />
            <Text style={styles.itemText}>Creme de leite</Text>
          </View>

          <View style={styles.item}>
            <Image   source={require("../assets/images/chocolateempo.png")}   style={{ width: 38, height: 38}} />
            <Text style={styles.itemText}>Chocolate em pó</Text>
          </View>

          <View style={styles.item}>
            <Image   source={require("../assets/images/manteiga.png")}   style={{ width: 38, height: 38}} />
            <Text style={styles.itemText}>Manteiga</Text>
          </View>
        </View>

        <View style={styles.priceCard}>
          <View>
            <Text style={styles.preco}>
              R$ {precoTotal.toFixed(2).replace(".", ",")}
            </Text>

            <Text style={styles.unidade}>unidade</Text>
          </View>

          <Text style={styles.stock}>
            Restantes: {estoque}
          </Text>
        </View>

        <View style={styles.bottomArea}>
          <View style={styles.balcao}>
            <TouchableOpacity
              style={styles.balcaoButton}
              onPress={diminuir}
            >
              <Text style={styles.balcaoText}>-</Text>
            </TouchableOpacity>

            <View style={styles.quantidadeBox}>
              <Text style={styles.quantidade}>
                {quantidade}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.balcaoButton}
              onPress={aumentar}
            >
              <Text style={styles.balcaoText}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.addButton}
            onPress={adicionarItens}
          >
            <Text style={styles.addButtonText}>
              Adicionar itens
            </Text>
          </TouchableOpacity>
        </View>
      </View>

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
    backgroundColor: "#f7f1ea",
  },

  header: {
    height: 100,
    backgroundImage: 'radial-gradient(circle, #C1442E 0%, #71271B 100%)',
    justifyContent: "center",
    padding: 10,
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  content: {
    flex: 1,
    padding: 16,
  },

  backButton: {
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#f4d8ca",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f0a07c",
    padding: 14,
    flexDirection: "row",
    marginBottom: 24,
  },

  brigadeiroImage: {
    width: 115,
    height: 115,
    marginRight: 16,
    marginTop: 10,
    resizeMode: "contain",
  },

  infoArea: {
    flex: 1,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d1a12",
    marginBottom: 6,
  },

  description: {
    fontSize: 13,
    color: "#7a5f57",
    lineHeight: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e1e1e",
    marginBottom: 18,
  },

  ingredients: {
    gap: 18,
    marginBottom: 30,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemText: {
    marginLeft: 12,
    color: "#9d938d",
    fontSize: 15,
  },

  priceCard: {
    backgroundColor: "#f8d8ca",
    borderRadius: 14,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },

  preco: {
    color: "#ff5b3f",
    fontSize: 28,
    fontWeight: "700",
  },

  unidade: {
    color: "#c9a49a",
    fontSize: 13,
  },

  stock: {
    color: "#ff5b3f",
    fontWeight: "700",
    fontSize: 15,
  },

  bottomArea: {
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  balcao: {
    flexDirection: "row",
    alignItems: "center",
  },

  balcaoButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ff6b57",
    justifyContent: "center",
    alignItems: "center",
  },

  balcaoText: {
    color: "#ff6b57",
    fontSize: 18,
    fontWeight: "700",
  },

  quantidadeBox: {
    marginHorizontal: 10,
    width: 40,
    height: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ff6b57",
    justifyContent: "center",
    alignItems: "center",
  },

  quantidade: {
    color: "#333",
    fontWeight: "600",
  },

  addButton: {
    backgroundColor: "#e69543",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  footer: {
    height: 75,
    borderTopWidth: 1,
    borderTopColor: "#d9654c",
    backgroundColor: "#f7f1ea",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  footerText: {
    fontSize: 12,
    color: "#c94c2c",
    marginTop: 3,
    fontWeight: "600",
  },
});