import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Entre com sua conta</Text>

        <View style={styles.entry}>
          <Text style={styles.labelInput}>Nome de usuário</Text>

          <TextInput
            style={styles.input}
            placeholder="seu_usuario"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.entry}>
          <Text style={styles.labelInput}>E-mail</Text>
          <TextInput
            placeholder="seu@email.com"
            placeholderTextColor="#aaa"
            style={styles.input}
          />
        </View>

        <View style={styles.entry}>
          <Text style={styles.labelInput}>Senha</Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.actions}>
          <Pressable
            style={styles.rememberContainer}
            onPress={() => setChecked(!isChecked)}
          >
            <View style={[styles.checkboxBase, isChecked && styles.checkboxChecked]}>
              {isChecked && <Ionicons name="checkmark" size={18} color="white" />}
            </View>
            <Text style={styles.rememberText}>Lembrar de mim</Text>
          </Pressable>

          <TouchableOpacity>
            <Text style={styles.link}>Esqueci minha senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBotao}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Não tem login? <Text style={styles.linkCad}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient( #C1442E 0%, #71271B 100%)',
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width: "85%",
  },

  logo: {
    width: 400,
    height: 255,
    alignSelf: "center",
    marginBottom: 12,
  },

  title: {
    color: "#FFD2A6",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },

  subtitle: {
    color: "#F3B28E",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 17,
  },

  usuarioInput: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },

  userText: {
    color: "#000",
    fontWeight: "bold",
  },

  text: {
    marginHorizontal: 10,
    color: "#FFAD73",
  },

  entry: {
    marginBottom: 15,
  },

  labelInput: {
    color: "#FFD2A6",
    marginBottom: 5,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    color: "#000",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#FFD2A6',
    backgroundColor: 'transparent',
  },

  checkboxChecked: {
    backgroundColor: '#F2994A',
    borderColor: '#F2994A',
  },

  rememberText: {
    marginLeft: 8,
    color: "#FFD2A6",
    fontSize: 14,
  },
  
  link: {
    color: "#FFAD73",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },

  linkCad: {
    color: "#5a84d1",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: 'underline',
  },

  loginBotao: {
    backgroundColor: "#F2994A",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  footer: {
    marginTop: 20,
    textAlign: "right",
    color: "#FFD2A6",
  },
});