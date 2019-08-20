import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Item,
  Input,
  Label,
  Icon
} from "native-base";

import styles from "./styles";

// Resources
import img from "~/resource/game-background.png";
import logo from "~/resource/logo.png";

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (email, pass) => {
    if (email == 21701215) {
      alert(
        `Seja bem vindo !! CHAVE DE ACESSO: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZ2FtZWZpY2F0aW9uLnVuaWNldWIuYnIiLCJuYW1laWQiOiJHQU1FRklDQVRJT04iLCJuYmYiOjE1NTc0NDE0MTIsImV4cCI6MTU1NzQ0MjYxMiwiaWF0IjoxNTU3NDQxNDEyLCJpc3MiOiJodHRwczovL3NlcnZpY29zLnVuaWNldWIuYnIvIn0.VNOry3T9F5LATo-hCmlan3BscPw0uaxiHn0xADPlPfA`
      );

      this.props.navigation.navigate("Main");
    } else {
      alert("RA ou Senha inválido :( ");
    }
  };

  render() {
    return (
      <ImageBackground source={img} style={styles.imgBackground}>
        <Image
          source={logo}
          style={{
            flex: 1,
            marginTop: 30,
            maxHeight: 100,
            resizeMode: "contain"
          }}
        />
        <Container style={styles.container}>
          <Form style={styles.form}>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.textInput}>RA</Label>
              <Icon type="Entypo" name="v-card" style={styles.icon} />
              <Input
                style={styles.txtBtnLogin}
                onChangeText={this.handleEmail}
              />
            </Item>

            <Item floatingLabel style={styles.item}>
              <Label style={styles.textInput}>Senha</Label>
              <Icon type="Entypo" name="eye" style={styles.icon} />
              <Input
                style={styles.txtBtnLogin}
                secureTextEntry={true}
                onChangeText={this.handlePassword}
              />
            </Item>

            <View>
              <TouchableOpacity
                style={styles.btnLogin}
                onPress={() =>
                  this.login(this.state.email, this.state.password)
                }
              >
                <Text style={styles.txtBtnLogin}>PRESS START</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </Container>
      </ImageBackground>
    );
  }
}
