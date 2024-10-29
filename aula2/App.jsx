import React from "react";
import { View, StyleSheet } from "react-native";
import Botao from "./components/Botao.jsx";

const App = () => {
  const handlePress = () => {
    console.log("Botão Pressionado!");
  };

  const teste = () => {
    console.log("Segundo Teste!");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Botao label="Clica" corFundo="purple" onPress={handlePress} /> 
      <Botao label="Clica" corFundo="green" onPress={teste} /> 
      <Botao label="Clica" corFundo="purple" onPress={handlePress} /> 
    </View>
  );
};