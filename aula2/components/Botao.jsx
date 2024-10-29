import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = ({ label, corFundo, onPress }) => { 
  const botaoStyle = {
    backgroundColor: corFundo,
    padding: 10,
    borderRadius: 5,
  };

  return (
    <TouchableOpacity onPress={onPress} style={botaoStyle}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Botao; 