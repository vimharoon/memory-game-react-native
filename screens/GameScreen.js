import React, { Component } from 'react';
import { ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    title: 'Jouer',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/bgApp.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <Text>Game</Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
});
