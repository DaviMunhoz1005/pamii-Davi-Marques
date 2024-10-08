import React from "react";
import { View, StyleSheet } from "react-native";
import botao from "./components/Botao";

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
      alignItems: 'center'
    }
  });

  return (
    <View style={styles.container}>
      <botao label="Clica" corFundo="purple" onPress{handlePress}/>
      <botao label="Clica" corFundo="green" onPress{teste}/>
      <botao label="Clica" corFundo="purple" onPress{handlePress}/>
    </View>
  );
};