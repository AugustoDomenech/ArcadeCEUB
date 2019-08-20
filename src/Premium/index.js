import React, { Component } from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import img from "./icons/E.png";
import aluno from "../Demo/aluno";

export default class Premium extends Component {
  state = {
    title: "Essa é por minha conta ! ",
    description: "Uma diária do estacionamento do UniCEUB.",
    finsh: false,
    start: true,
    titleButton: "300 COINS"
  };

  // componentDidMount() {
  //   this.setState({
  //     title: this.props.title,
  //     start: this.props.start,
  //     finsh: this.props.finsh,
  //     description: this.props.description
  //   });
  // }

  alterStatusConquest = () => {
    if (aluno.pontos >= 300) {
      alert(
        "Parabens !! Pode deixar que uma diaria do estacionamento sera por nossa conta. Aproveite :P"
      );
      aluno.pontos -= 300;
    } else {
      alert("Desculpe, mas vc nao possui coins o suficiente !");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={img} />
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
