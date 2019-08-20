import React, { Component } from "react";

import { View, StyleSheet, Button } from "react-native";

// import { Container } from './styles';

import Conquest from "./components/Conquest";

export default class Sandbox extends Component {
  state = {
    array: [
      {
        id: 0,
        title: "Praticando que se aprende !",
        description:
          "Resolva todos os exercícios de programação  colocando em pratica todos os seus 0 e 1.",
        start: false
      },
      {
        id: 1,
        title: "Praticando que se aprende !",
        description:
          "Resolva todos os exercícios de programação  colocando em pratica todos os seus 0 e 1.",
        start: false
      },
      {
        id: 2,
        title: "Praticando que se aprende !",
        description:
          "Resolva todos os exercícios de programação  colocando em pratica todos os seus 0 e 1.",
        start: false
      }
    ]
  };

  addArray = () => {
    this.setState({
      array: [...this.state.array, "Não vamo se fuder"]
    });
  };

  render() {
    return (
      <View style={style.container}>
        {this.state.array.map(item => (
          <Conquest
            key={item.id}
            title={item.title}
            description={item.description}
            start={item.start}
          />
        ))}

        {/* <Button title="Noite de Sexo" onPress={this.addArray} /> */}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8C8C8",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});
