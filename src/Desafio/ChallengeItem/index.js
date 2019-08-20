import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

import aluno from "~/Demo/aluno";

export default class ChellengeItem extends Component {
  static defaultProps = {};
  state = {
    title: this.props.title,
    description: this.props.description,
    finsh: false,
    start: true,
    titleButton: "Aceitar"
  };

  alterStatusConquest = () => {
    if (this.state.finsh) {
      alert("Parabens !! Você concluiu este desafio e recebeu 400 COINS ");
      aluno.pontos += 400;
      return;
    }
    this.setState({
      start: !this.state.start,
      titleButton: this.state.start ? "Participando" : "Aceitar"
    });
    if (this.state.start)
      alert("Participação confirmada com sucesso !!" + aluno.pontos);
    aluno.pontos += 50;
    setTimeout(() => {
      this.setState({
        titleButton: "Coletar Coin !!",
        finsh: true,
        start: false
      });
    }, 5000);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={this.props.icon} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.description}>{this.state.description}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={this.alterStatusConquest}
          >
            <Text style={styles.buttonText}>
              {String(this.state.titleButton)}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
