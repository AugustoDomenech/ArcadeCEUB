import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Body, Content, Title, Button, Form, Item, Input, Label, Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import imgPremiun from '../../resource/Screen/Premios.png';


class Premiun extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imgPremiun} style={{
                            flex: 1,
                            marginTop: 10,
                            resizeMode: "stretch",
                            width: '99%',
                            height: 1000
                        }}/>

                    </View>
                </ScrollView>
            </View>
        );
    }

};

const RootStack = createStackNavigator(
    {
        main: Premiun,
        
    },
    {
        initialRouteName: 'main',
        mode: 'modal',
        headerMode: 'none',
    }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}