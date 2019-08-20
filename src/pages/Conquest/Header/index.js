import React, { Component } from 'react';

import { View, Text } from 'react-native';
import styles from './styles';
import { Icon } from 'native-base';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <Icon style={styles.icon} name='ios-arrow-back' />
                    <Text style={styles.title}> CONQUISTAS</Text>              
                    <Icon style={styles.icon} name='ios-more' size={28}/>      
                </View>
                <View style={styles.line} />
            </View>
        );
    }
}
