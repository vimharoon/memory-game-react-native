import React from 'react';
import { ScrollView, ImageBackground, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class HallOfFameScreen extends React.Component {
  static navigationOptions = {
    title: 'Scores',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/bgHallofFame.png')} style={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <Text>Hall of Fame</Text>
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
