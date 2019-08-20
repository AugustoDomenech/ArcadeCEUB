import React, { Component } from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Content,
  Title,
  Button,
  Form,
  Item,
  Input,
  Label,
  Icon
} from "native-base";
import aluno from "../Demo/aluno";

import ProgressBar from "react-native-progress/Bar";

import imgProfile from "../resource/Person.png";
import imgNivel from "../resource/smiling-baby.png";

//Screen
import imgFriend from "../resource/Screen/Friend.png";

import imgConquest from "../resource/Conquest/Conquest.png";

import photoFriend01 from "../resource/Friend/01.jpg";
import photoFriend02 from "../resource/Friend/02.jpg";
import photoFriend03 from "../resource/Friend/03.jpg";
import photoFriend04 from "../resource/Friend/04.jpg";

export default class Profile extends Component {
  state = {
    pontos: 0
  };
  update = () => {
    this.setState({
      pontos: aluno.pontos
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.head}>
            <View style={styles.headItemPhoto}>
              <Image
                source={imgProfile}
                style={{ width: 140, height: 140, borderRadius: 140 / 2 }}
              />
            </View>
            <Text style={styles.textH1} onPress={this.update}>
              {" "}
              AUGUSTO DOMENECH{" "}
            </Text>
            <Text style={styles.textH2}>
              {" "}
              ANÁLISE E DESENVOLVIMENTO DE SISTEMA{" "}
            </Text>

            <View
              style={[
                styles.headContainerInfo,
                { backgroundColor: "#EFEFEF", borderRadius: 45 }
              ]}
            >
              <View style={styles.headItem}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#445EA0" }}
                >
                  CONQUISTAS
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#293D7C" }}
                >
                  14 / 21
                </Text>
              </View>
              <View style={styles.headItem}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#A8A8A8" }}
                >
                  XP
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#C8C8C8" }}
                >
                  350
                </Text>
              </View>
              <View style={styles.headItem}>
                <Text style={styles.textCoin}>COINS</Text>
                <Text style={styles.textCoinNumber}>{this.state.pontos}</Text>
              </View>
            </View>
          </View>

          <View
            style={{ width: "100%", height: 1, backgroundColor: "#C8C8C8" }}
          />

          <View style={styles.body}>
            <View style={styles.bodyHead}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                NÍVEL
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#0094FF"
                }}
              >
                VER
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image source={imgNivel} style={{ height: 40, width: 40 }} />
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 22,
                  fontWeight: "bold",
                  marginLeft: 7
                }}
              >
                CALOURO
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "85%",
                marginTop: 5,
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 7,
                  color: "lightgray"
                }}
              >
                330 XP
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: 7 }}>
                500 XP
              </Text>
            </View>
            <ProgressBar
              progress={0.7}
              borderRadius={10}
              width={320}
              height={10}
              color={"#FFAB23"}
              borderColor={"#FFF3D7"}
              unfilledColor={"#FFF3D7"}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 2,
                color: "#C8C8C8"
              }}
            >
              66%
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              marginTop: 10,
              backgroundColor: "#C8C8C8"
            }}
          />

          <View style={styles.body} style={{ height: 260 }}>
            <View style={styles.bodyHead}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                CONQUISTAS
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#0094FF"
                }}
                onPress={() => this.props.navigation.push("conquest")}
              >
                VER
              </Text>
            </View>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Image source={imgConquest} style={{ height: 210, width: 390 }} />
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 1,
              marginTop: 10,
              backgroundColor: "#C8C8C8"
            }}
          />

          <View style={styles.body}>
            <View style={styles.bodyHead}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  alignSelf: "center"
                }}
              >
                AMIGOS
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  alignSelf: "center",
                  color: "#0094FF"
                }}
                onPress={() => this.props.navigation.push("friend")}
              >
                VER
              </Text>
            </View>

            <View style={[styles.bodyHead, { marginTop: 25 }]}>
              <View style={styles.photoFriend}>
                <Image
                  source={photoFriend01}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <Text style={styles.textH2}> 1201 xp </Text>
              </View>
              <View style={styles.photoFriend}>
                <Image
                  source={photoFriend02}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <Text style={styles.textH2}> 980 xp </Text>
              </View>
              <View style={styles.photoFriend}>
                <Image
                  source={photoFriend03}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <Text style={styles.textH2}> 720 xp </Text>
              </View>
              <View style={styles.photoFriend}>
                <Image
                  source={photoFriend04}
                  style={{ width: 80, height: 80, borderRadius: 80 / 2 }}
                />
                <Text style={styles.textH2}> 662 xp </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class Friend extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                name="arrow-back"
                onPress={() => this.props.navigation.goBack()}
              />
            </Button>
          </Left>
          <Body>
            <Title>AMIGOS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={styles.background}>
            <Image
              source={imgFriend}
              style={{
                flex: 1,
                resizeMode: "stretch",
                width: "100%",
                height: 1000
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    margin: 5,
    height: 1000
    // backgroundColor: '#bfff00', //VERDE
  },
  head: {
    flex: 1,
    maxHeight: 300,
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 2
    //backgroundColor: '#00bfff', //AZUL
  },
  headItemPhoto: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10
    //  backgroundColor: '#ff4000', //LARANJA
  },
  headContainerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    height: 65,
    marginTop: 10
    // backgroundColor: '#ff00bf',
  },
  headItem: {
    width: "25%",
    height: 45,
    margin: 10,
    alignItems: "center"
    //     backgroundColor: '#00bfff', //AZUL
  },
  body: {
    width: "100%",
    height: 170,
    alignItems: "center"
    //backgroundColor: '#9D13EB', //ROXO
  },
  bodyHead: {
    flexDirection: "row",
    width: "100%",
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between"
    //   backgroundColor: '#5C9CEE', //ROXO
  },
  textH1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25
  },
  textH2: {
    color: "#C8C8C8",
    //fontWeight: 'bold',
    fontSize: 15,
    width: "65%",
    textAlign: "center"
  },
  textCoin: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#F5D20F"
  },
  textCoinNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFDB10"
  },
  photoFriend: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10
    // backgroundColor: '#ff4000', //LARANJA
  }
});
