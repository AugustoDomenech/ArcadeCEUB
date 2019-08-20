import React, { Component } from "react";

import { View, Text, Image } from "react-native";

import styles from "./styles";

export default class ItemList extends Component {
  static defaultProps = {
    nome: "ANA PAULA",
    posicao: "#1",
    pontos: 1000,
    image: require("../../../../resource/01.png"),
    curso: "FILOSOFIA"
  };

  render() {
    return (
      <View style={styles.item}>
        <View style={styles.containerImage}>
          <Text style={styles.posicaoText}>{this.props.posicao}</Text>
          <Image source={this.props.image} style={styles.image} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.nome}>{this.props.nome}</Text>
          <Text style={styles.curso}>{this.props.curso}</Text>
        </View>
        <Text style={styles.pontos}>{this.props.pontos} xp</Text>
      </View>
    );
  }
}
