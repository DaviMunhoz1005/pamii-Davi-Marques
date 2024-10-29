import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import googleLogo from '../assets/logoGoogle.png'; // Certifique-se de que o caminho está correto

const Formulario = () => {
  const [emailOrCell, setEmailOrCell] = useState("");

  const handleSubmit = () => {
    console.log("Email ou Celular: ", emailOrCell);
  };

  const handleMoreOptions = () => {
    console.log("Mais opções clicadas");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image
          source={googleLogo} // Corrigido para usar diretamente a imagem importada
          style={styles.logo}
        />
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>Com sua conta Google</Text>

        <TextInput
          style={styles.input}
          value={emailOrCell}
          onChangeText={setEmailOrCell}
          placeholder="Email ou Celular"
        />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleMoreOptions}>
            <Text style={styles.moreOptions}>Mais Opções</Text>
          </TouchableOpacity>
          <Button title="Enviar" onPress={handleSubmit} />
        </View>
      </View>
      <View style={styles.infoContainer}>
          <TouchableOpacity>
            <Text style={styles.infoText}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoText}>Privacidade</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoText}>Termos</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "35%",
    height: "80%",
    padding: 40,
    paddingTop: 40, // Ajustado para dar espaço ao logo
    paddingBottom: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 40,
    marginBottom: 10, 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 70,
    width: "100%", // Ajuste para ocupar a largura total
    opacity: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  moreOptions: {
    color: "blue",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  infoContainer: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  infoText: {
    color: 'gray', // Cor azul para os textos
    paddingLeft: 10,
  },
});

export default Formulario;
