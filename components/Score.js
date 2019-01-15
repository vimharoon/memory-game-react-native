import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export default class Score extends Component {
  render() {
    const { score, username } = this.props;

    return (
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>Points: {score}</Text>
        <Text style={styles.username}>Nom: {username}</Text>
      </View>
    );
  }
}

const styles = {
  scoreContainer: {
    paddingTop: 55,
    height: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    height: 50,
    width: 150,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'cartoon',
    color: '#BF3905',
    fontWeight: "bold",
  },
  score: {
    height: 50,
    paddingLeft: 10,
    fontSize: 20,
    fontFamily: 'cartoon',
    color: '#BF3905',
    fontWeight: "bold"
  },
};
