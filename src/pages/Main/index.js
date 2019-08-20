import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text
} from "native-base";
import Profile from "~/pages/Profile";
// import Beer from "../Beer";
import Ranking from "../Ranking";
import Premium from "../../Premium";
import Desafio from "~/Desafio";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Tabs tabBarPosition="bottom">
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-person" />
              </TabHeading>
            }
          >
            <Profile />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-planet" />
              </TabHeading>
            }
          >
            <Desafio />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-beer" />
              </TabHeading>
            }
          >
            {/* <Beer /> */}
          </Tab>

          <Tab
            heading={
              <TabHeading>
                <Icon name="medal" />
              </TabHeading>
            }
          >
            <Ranking />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="ios-cart" />
              </TabHeading>
            }
          >
            <Premium />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
