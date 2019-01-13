import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import GameScreen from '../screens/GameScreen';
import HallOfFameScreen from '../screens/HallOfFameScreen';
import SettingsScreen from '../screens/SettingsScreen';

const GameStack = createStackNavigator({
  Home: GameScreen,
});

GameStack.navigationOptions = {
  tabBarLabel: 'Jouer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}
    />
  ),
};

const HallOfFameStack = createStackNavigator({
  Links: HallOfFameScreen,
});

HallOfFameStack.navigationOptions = {
  tabBarLabel: 'Scores',
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
