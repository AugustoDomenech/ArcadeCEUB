import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const Conquest = ({ conquest: { image, name, bio, stage, stageMax } }) => (
  <View>

    <Text style={styles.name}>{name}</Text>
    <Text style={styles.bio}>{bio}</Text>
    <Text style={styles.state}>{stage} / {stageMax}</Text>
  </View>

);
export default Conquest;
