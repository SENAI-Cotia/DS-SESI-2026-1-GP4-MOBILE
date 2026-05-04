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

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppHeader />
        <HeroSection />
        <CategoryList />
      </ScrollView>

      <BottomMenu />
    </View>
  );
}

function AppHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: LOGO_URL }}
        style={styles.logo}
      />
    </View>
  );
}

function HeroSection() {
  return (
    <ImageBackground
      source={{ uri: HERO_IMAGE }}
      style={styles.banner}
      imageStyle={styles.bannerImage}
    >
      <View style={styles.bannerContent}>
        <Text style={styles.bannerSubtitle}>
          Qualidade em cada escolha!
        </Text>

        <Text style={styles.bannerTitle}>Salgados</Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>
            Ver produto
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    <View style={styles.bottomNav}>
      <NavButton icon="👤" label="Perfil" />
      <NavButton icon="🛒" label="Carrinho" />
    </View>
  );
}

type NavButtonProps = {
  icon: string;
  label: string;
};

function NavButton({ icon, label }: NavButtonProps) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text style={styles.navIcon}>{icon}</Text>
      <Text style={styles.navLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const LOGO_URL = "https://via.placeholder.com/80x80.png?text=Nexbite";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d";

const CATEGORIES = [
  {
    id: "1",
    title: "Salgados",
    image:
      "https://images.unsplash.com/photo-1625944190203-3b7d0d1f47c7",
  },
  {
    id: "2",
    title: "Doces",
    image:
      "https://images.unsplash.com/photo-1606312619344-98cfdc98d5b2",
  },
  {
    id: "3",
    title: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4efe9",
  },

  header: {
    padding: 16,
  },

  logo: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },

  banner: {
    height: 180,
    marginHorizontal: 16,
    justifyContent: "center",
  },

  bannerImage: {
    borderRadius: 16,
  },

  bannerContent: {
    padding: 16,
  },

  bannerSubtitle: {
    color: "#fff",
    fontSize: 14,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 6,
  },

  primaryButton: {
    backgroundColor: "#f59e0b",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
  },

  section: {
    marginTop: 12,
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

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },

  navItem: {
    alignItems: "center",
  },

  navIcon: {
    fontSize: 20,
  },

  navLabel: {
    fontSize: 12,
    color: "#b45309",
    marginTop: 2,
  },
});