import React from 'react';
import { setNavigator } from './src/navigationRef'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as GateProvider } from './src/context/GateContext';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddGateScreen from './src/screens/AddGateScreen';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({
  loading: LoadingScreen,
  loginFlow: createStackNavigator({
    login: LoginScreen,
    register: RegisterScreen,
  }),
  mainFlow: createBottomTabNavigator({
    home: HomeScreen,
    addGate: AddGateScreen
  }, {
    tabBarOptions: {
      showLabel: false
    }
  })

});

const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <GateProvider>
      <AuthProvider>
        <App ref={(navigator) => {
          setNavigator(navigator);
        }} />
      </AuthProvider>
    </GateProvider>
  );
};