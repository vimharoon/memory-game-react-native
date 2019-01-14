import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(15)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    that.setState({
      dataSource: items,
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={styles.cardContainer}
              onPress={this.props.clickCard}
              activeOpacity={0.75}
              underlayColor={'transparent'}>
              <View>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
              </View>
            </TouchableHighlight>
          )}
          numColumns={3}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 90,
    width: 80,
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 10,
    marginLeft: 'auto',
  },
});
