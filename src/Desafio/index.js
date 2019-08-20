import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import ChellengeItem from "./ChallengeItem";
import img03 from "./icons/03.png";
export default class Desafio extends Component {
  render() {
    return (
      <View>
        <ChellengeItem
          title={"A Caminho da vitória"}
          description={"Manter as médias parciais acima ou igual a MS"}
          icon={img03}
        />
        <ChellengeItem
          title={"Sempre presente o/"}
          description={"Ter 85% de presença durante o semestre."}
          icon={img03}
        />
        <ChellengeItem
          title={"Por dentro de tudo :P"}
          description={
            "Mantenha o Feed de notícias do espaço aluno sempre atualizado"
          }
          icon={img03}
        />
      </View>
    );
  }
}
