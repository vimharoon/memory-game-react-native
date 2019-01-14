import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GameScreen from '../screens/GameScreen';
import HallOfFameScreen from '../screens/HallOfFameScreen';
import SettingsScreen from '../screens/SettingsScreen';

const GameStack = createStackNavigator({
  Game: GameScreen,
});

GameStack.navigationOptions = {
  tabBarLabel: 'Jouer',
  tabBarOptions: {
    activeTintColor: '#B32AA4',
    labelStyle: {
      fontFamily: 'cartoon',
      fontSize: 12,
      color: '#FFFFFF',
    },
    style: {
      backgroundColor: '#E23622',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}
    />
  ),
};

const HallOfFameStack = createStackNavigator({
  HallOfFame: HallOfFameScreen,
});

HallOfFameStack.navigationOptions = {
  tabBarLabel: 'Scores',
  tabBarOptions: {
    activeTintColor: '#B32AA4',
    labelStyle: {
      fontFamily: 'cartoon',
      fontSize: 12,
      color: '#FFFFFF',
    },
    style: {
      backgroundColor: '#E23622',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Paramètres',
  tabBarOptions: {
    activeTintColor: '#B32AA4',
    labelStyle: {
      fontFamily: 'cartoon',
      fontSize: 12,
      color: '#FFFFFF',
    },
    style: {
      backgroundColor: '#E23622',
    },
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  GameStack,
  HallOfFameStack,
  SettingsStack,
});
