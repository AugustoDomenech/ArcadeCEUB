import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
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
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProgressBar from "react-native-progress/Bar";

import imgDetail from "../../../resource/Screen/Detail.png";

import styles from "./styles";

//import Conquest from './Conquest/'
import img01 from "../../../resource/Conquest/Hello.png";
import img02 from "../../../resource/Conquest/Champion01.png";
import img03 from "../../../resource/Conquest/Friend.png";
import img04 from "../../../resource/Conquest/Rocketz.png";
import img05 from "../../../resource/Conquest/BiusnessMan.png";
import img06 from "../../../resource/Conquest/Champion.png";
import img07 from "../../../resource/Conquest/Fest.png";
import img08 from "../../../resource/Conquest/Present.png";

class ConquestList extends Component {
  render() {
    return (
      <View>
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
            <Title>CONQUISTAS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <ScrollView style={{ backgroundColor: "rgba(241, 241, 241, 0.4)" }}>
          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img01} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>Hello Word !</Text>
                <Text style={styles.desc}>
                  Primeiro acesso ao espaço aluno.
                </Text>

                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={1}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>1 / 1</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img02} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>Campeão \o/</Text>
                <Text style={styles.desc}>Chegue ao topo do ranking.</Text>
                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={1}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>2 / 3</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img03} />
              <View style={styles.itemsDesc}>
                <Text
                  style={styles.title}
                  onPress={() => this.props.navigation.push("detail")}
                >
                  Social :P
                </Text>
                <Text style={styles.desc}>
                  Faça 15 amizades pelo CEUB Gamefication :)
                </Text>
                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={0.75}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>10 / 15</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img04} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>O CÉU NÃO É O LIMITE !</Text>
                <Text style={styles.desc}>
                  Se mantenha no topo do ranking semanal durante 1 mês.
                </Text>

                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={0.75}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>3 / 4</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img05} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>
                  Pequenas Empresas Grandes Negócios
                </Text>
                <Text style={styles.desc}>
                  Inicie sua Startup com o UniCEUB.
                </Text>

                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={1}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>1 / 1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img06} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>Festeiro'</Text>
                <Text style={styles.desc}>
                  Participe de 3 eventos do UniCEUB.
                </Text>

                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={0}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>0 / 3</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.items}>
              <Image style={styles.image} source={img08} />
              <View style={styles.itemsDesc}>
                <Text style={styles.title}>Presente em todas o/</Text>
                <Text style={styles.desc}>Conclua o semestre sem faltas.</Text>

                <View style={styles.progress}>
                  <View style={{ height: 10 }}>
                    <ProgressBar
                      progress={0.7}
                      borderRadius={10}
                      width={250}
                      height={10}
                      color={"#FFAB23"}
                      borderColor={"#FFF3D7"}
                      unfilledColor={"#FFF3D7"}
                    />
                  </View>
                  <Text style={styles.stage}>29 / 36</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

class Detail extends Component {
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
            <Title>SOCIAL</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.push("perfil")}
            >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image
              source={imgDetail}
              style={{
                flex: 1,
                marginTop: 10,
                resizeMode: "stretch",
                width: "99%",
                height: 750
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    main: ConquestList,
    detail: Detail
  },
  {
    initialRouteName: "main",
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
