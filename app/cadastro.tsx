import { Link } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

export default function Cadastro() {
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/image1.png")}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Cadastre-se</Text>
      <Text style={styles.subtitulo}>Crie sua conta</Text>

      <Text style={styles.label}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="seu@gmail.com"
        placeholderTextColor="#999"
      />
      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        placeholder="123.456.789-10"
        placeholderTextColor="#999"
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * *"
        placeholderTextColor="#999"
        secureTextEntry
      ></TextInput>
      <Text style={styles.regras}>
        A senha deve ter pelo menos:<br />
        1 letra maiúscula, 1 minúscula<br />
        1 número,<br />
        1 caractere especial<br />
        No mínimo 8 caracteres(ex: !@#$%&*).
      </Text>

      <Text style={styles.label}>Confirmar senha:</Text>
      <TextInput style={styles.input}
        placeholder="* * * * * * * *"
        placeholderTextColor="#999"
        secureTextEntry>
      </TextInput>

        <Text style={styles.footer}>
                Já tem login? <Link href={"/"} style={styles.linkCad}>Faça login</Link>
              </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Registrar</Text>
      </TouchableOpacity>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundImage: 'linear-gradient( #C1442E 0%, #71271B 100%)',
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImagem: {
    width: 150,
    height: 15,
    alignSelf:  "center",
    resizeMode: "contain",
    marginBottom: 10,
  },
  logo: {
    fontSize: 34,
    textAlign: "center",
    color: "#EB8B36",
    fontWeight: "bold",
    marginBottom: 15,
  },
  titulo: {
    fontSize: 28,
    color: "#EB8B36",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#EB8B36",
    textAlign: "center",
    marginBottom: 25,
  },
  divisor: {
    textAlign: "center",
    color: "#EB8B36",
    marginBottom: 15,
  },
  label: {
    color: "#EB8B36",
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 14,
  },
  regras:{
    color: "#EB8B36",
    fontSize: 11,
    marginTop: 8,
    lineHeight: 16,
  },
  botao: {
    backgroundColor: "#EB8B36",
    padding: 16,
    borderRadius: 14,
    marginTop: 25,
    marginBottom: 30,
  },
  botaoTexto: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
    textAlign: "right",
    color: "#FFD2A6",
  },
    linkCad: {
    color: "#5a84d1",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },
});