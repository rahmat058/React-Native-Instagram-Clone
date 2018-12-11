
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation"
import MainScreen from './components/MainScreen'

const AppStackNavigator = createStackNavigator({
  Main: { screen: MainScreen }
})

const AppContainer = createAppContainer(AppStackNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
