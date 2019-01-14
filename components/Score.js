import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Score extends Component {
  render() {
    const { score } = this.props;

    return (
      <View style={styles.scoreContainer}>
        <View style={styles.scoreText}>
          <Text style={styles.score}>Points: {score}</Text>
        </View>
        <View style={styles.restartBtn}>
          <Button onPress={this.props.clickRestart} title="Rejouer" color="#BF3905"/>
        </View>
      </View>
    );
  }
}

const styles = {
  scoreContainer: {
    paddingTop: 60,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scoreText: {
    width: 150,
    height: 50,
    marginTop: 10,
    marginLeft: 20,
  },
  restartBtn: {
    width: 90,
    height: 50,
    marginRight: 20,
  },
  score: {
    fontSize: 20,
    fontFamily: 'cartoon',
    color: '#BF3905',
    fontWeight: "bold"
  },
};
