import React, { Component } from 'react';

import { View} from 'react-native';

import styles from './styles';
import Header from './Header/index.js';
import ConquestList from './ConquestList';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <ConquestList />
            </View>


        );
    }
}
