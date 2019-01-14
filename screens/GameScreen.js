import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Card from '../components/Card';
import Score from "../components/Score";

import shuffleArray from "../constants/ShuffleArray";

import cards_data from "../constants/Data";

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Jouer',
    headerTransparent: true,
    headerTitleStyle: {
      fontFamily: 'cartoon',
      fontSize: 30,
      color: '#BF3905',
    },
  };

  state = {
    current_selection: [],
    selected_pairs: [],
    score: 0,
    opponent_score: 0
  };

  clickRestart = () => {
    console.log('restart')
  }

  clickCard = () => {
    console.log('card clicked')
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/images/bgApp.png')}>
        <Score clickRestart={this.clickRestart}/>
        <Card clickCard={this.clickCard}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
