import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'
import AddGateScreen from './src/screens/AddGateScreen'

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    login: LoginScreen,
    register: RegisterScreen,
  }),
  mainFlow: createBottomTabNavigator({
    home: HomeScreen,
    addGate: AddGateScreen
  })

})

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <App />
  );
};