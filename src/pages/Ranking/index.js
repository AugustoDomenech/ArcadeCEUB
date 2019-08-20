import React, { Component } from "react";

import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import styles from "./styles";

import { List } from "../../Demo/aluno";
import ItemList from "./itemList";

//RESOURCE
import bgStar from "./resource/bg-stars.png";

import trofeuOuro from "./resource/trofeu-ouro.png";
import trofeuPatra from "./resource/trofeu-prata.png";
import trofeuBronze from "./resource/trofeu-bronze.png";

import friend01 from "./resource/friend-01.jpg";
import friend02 from "./resource/friend-02.jpg";
import friend03 from "./resource/friend-03.png";

export default class Ranking extends Component {
  getList = () => {};

  render() {
    return (
      <ImageBackground style={styles.container} source={bgStar}>
        <ScrollView>
          <Text style={styles.title}>Ranking do mês de Junho</Text>
          <View style={styles.ctRankDestaque}>
            <View style={styles.containerTrPrata}>
              <Image style={styles.imgPrata} source={friend02} />
              <Text style={styles.textTrofeu}>Ana Paula</Text>
              <Image style={styles.trofeuPrata} source={trofeuPatra} />
            </View>
            <View style={styles.containerTrOuro}>
              <Image source={friend03} style={styles.imgOuro} />
              <Text style={styles.textTrofeu}>Carlos Augusto</Text>
              <Image style={styles.trofeuOuro} source={trofeuOuro} />
            </View>
            <View style={styles.containerTrBronze}>
              <Image source={friend01} style={styles.imgBronze} />
              <Text style={styles.textTrofeu}>Gabriel Velloso</Text>
              <Image style={styles.trofeuBronze} source={trofeuBronze} />
            </View>
          </View>
          <View style={styles.containerList}>
            {List.map((item, index) => {
              return (
                <ItemList
                  key={index}
                  nome={item.nome}
                  posicao={"#" + (index + 1)}
                  curso={item.curso}
                  pontos={item.pontos}
                  image={item.image}
                />
              );
            })}
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
