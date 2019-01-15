import React, { Component } from 'react';
import { FlatList, ImageBackground, Alert, StyleSheet } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Card from '../components/Card';
import Score from '../components/Score';
import DialogInput from '../components/DialogInput';

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
  };

  constructor(props) {
    super(props);

    this.username = null;
    let sources = {
      fontawesome: FontAwesome,
      entypo: Entypo
    };

    let clone = JSON.parse(JSON.stringify(cards_data));

    this.cards = cards_data.concat(clone);
    this.cards.map(obj => {
      let id = Math.random().toString(36).substring(7);
      obj.id = id;
      obj.src = sources[obj.src];
      obj.is_open = false;
    });

    this.cards = shuffleArray(this.cards);
  }

  componentDidMount() {
    this.setState({
      cards: this.cards
    });
    this.resetCards();
  }

  showDialog(isShow) {
    this.setState({isDialogVisible: isShow});
  }

  sendInput(inputText){
    this.username = inputText;
    this.showDialog(false);
  }

  render() {
    let contents = this.state.cards
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../assets/images/bgApp.png')}>
        <Score score={this.state.score} username={this.username}/>
        <DialogInput isDialogVisible={this.state.isDialogVisible}
          message={"Veuillez entrer votre nom."}
          hintInput ={"Rentre ton nom ici"}
          submitInput={ (inputText) => {this.sendInput(inputText)} }
          closeDialog={() => {this.showDialog(false)}}>
        </DialogInput>
        <FlatList
          data={contents}
          renderItem={this.renderCard}
          numColumns={4}
          keyExtractor={item => item.id}
          columnWrapperStyle={styles.flatlistRow}
        />
      </ImageBackground>
    );
  }

  renderCard = ({ item }) => {
    return (
      <Card
        key={item.id}
        src={item.src}
        name={item.name}
        color={item.color}
        is_open={item.is_open}
        clickCard={this.clickCard.bind(this, item.id)}
      />
    );
  };

  clickCard = id => {
    let selected_pairs = [...this.state.selected_pairs];
    let current_selection = this.state.current_selection;
    let score = this.state.score;
    let index = this.state.cards.findIndex(card => {
      return card.id == id;
    });
    let cards = [...this.state.cards];

    if (cards[index].is_open == false && selected_pairs.indexOf(cards[index].name) === -1) {
      cards[index].is_open = true;
      current_selection.push({
        index: index,
        name: cards[index].name
      });

      if (current_selection.length == 2) {
        if (current_selection[0].name == current_selection[1].name) {
          score += 1;
          selected_pairs.push(cards[index].name);
          if (score == 12) {
            score = 0;
            Alert.alert("Félicitations!", "Vous avez gagné la partie!");
            this.resetCards();
          }
        } else {
          cards[current_selection[0].index].is_open = false;
          setTimeout(() => {
            cards[index].is_open = false;
            this.setState({
              cards: cards
            });
          }, 500);
        }
        current_selection = [];
      }

      this.setState({
        score: score,
        cards: cards,
        current_selection: current_selection
      });
    }
  };

  resetCards = () => {
    let cards = this.cards.map(obj => {
      obj.is_open = false;
      return obj;
    });

    cards = shuffleArray(cards);

    this.setState({
      current_selection: [],
      selected_pairs: [],
      cards: cards,
      score: 0,
    });
  };
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  flatlistRow: {
    flex: 1,
    paddingTop: 40,
  },
});
