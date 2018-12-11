import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Icon } from 'native-base'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

const AppTabNavigator = createBottomTabNavigator({
  HomeTab: {screen: HomeTab},
  SearchTab: {screen: SearchTab},
  AddMediaTab: {screen: AddMediaTab},
  LikesTab: {screen: LikesTab},
  ProfileTab: {screen: ProfileTab}
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false
  }
})

const AppBottomTabContainer = createAppContainer(AppTabNavigator)

class MainScreen extends Component {
  // static navigationOptions = {
  //   headerLeft: <Icon name='ios-camera-outline' style={{paddingLeft: 10}}/>,
  //   title: 'Instagram',
  //   headerRight: <Icon name='ios-send-outline' style={{paddingRight: 10}}/>
  // }

  static navigationOptions = {
    header: null
  }

  render() {
    return <AppBottomTabContainer/>
  }
}

export default MainScreen
