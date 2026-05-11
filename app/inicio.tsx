import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <CategoryList />
      </ScrollView>

      <BottomMenu />
    </View>
  );
}

function Navbar() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.headerLogo}
        resizeMode="contain"
      />
    </View>
  );
}

function CategoryList() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Categorias</Text>

      {CATEGORIES.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </View>
  );
}

type CategoryCardProps = {
  title: string;
  image: string;
};

function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.cardImage}
        imageStyle={styles.cardImageRadius}
      >
        <View style={styles.cardOverlay}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

function BottomMenu() {
  return (
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
  );
}

const CATEGORIES = [
  {
    id: "1",
    title: "Salgados",
    image:
      "https://i.pinimg.com/736x/80/d2/ed/80d2ed2be438ea6b08d25a9a01c1cc89.jpg",
  },
  {
    id: "2",
    title: "Doces",
    image:
      "https://saborecia.com.br/wp-content/uploads/2020/08/MG_4421-scaled.jpg",
  },
  {
    id: "3",
    title: "Bebidas",
    image:
      "https://mandareceitas.com.br/wp-content/uploads/2023/12/Variacoes-do-Coquetel-de-Frutas-Sem-Alcool-1024x563.jpg",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4efe9",
  },

  header: {
    height: 100,
    padding: 10,
    justifyContent: "center",
    backgroundImage: 'radial-gradient(circle, #C1442E 0%, #71271B 100%)',
  },

  headerLogo: {
    width: 80,
    height: 80,
  },

  section: {
    marginTop: 12,
    paddingBottom: 90,
  },

  sectionTitle: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 16,
    color: "#d97706",
    fontWeight: "bold",
  },

  card: {
    marginHorizontal: 16,
    marginBottom: 16,
  },

  cardImage: {
    height: 120,
    justifyContent: "center",
  },

  cardImageRadius: {
    borderRadius: 16,
  },

  cardOverlay: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 16,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,

    height: 70,
    backgroundColor: "#f4efe9",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: "#c94c2c",
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
