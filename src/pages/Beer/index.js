import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Right, Body, Content, Title, Button, Form, Item, Input, Label, Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import imgBeer from '../../resource/Screen/Beer.png'

class Beer extends Component {
    render() {
        return (
            <View style={{flex:1}}>               
                <ScrollView>
                    <View style={{alignItems:'center'}}>
                        <Image source={imgBeer} style={{
                            flex: 1,  
                            marginTop: 10,                          
                            resizeMode: "stretch",
                            width: '95%',
                            height: 1500
                            

                        }} />
                    </View>
                </ScrollView>
            </View>
        );
    }

};

const RootStack = createStackNavigator(
    {
        main: Beer,
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