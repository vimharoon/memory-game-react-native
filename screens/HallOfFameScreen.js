import React from 'react';
import { ScrollView, ImageBackground, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class HallOfFameScreen extends React.Component {
  static navigationOptions = {
    title: 'Scores',
    headerTransparent: true,
    headerTitleStyle: {
      fontFamily: 'cartoon',
      fontSize: 30,
      color: '#0E5C03',
    },
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
  headerBackground: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'transparent',
  },
});
