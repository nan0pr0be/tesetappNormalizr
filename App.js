/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from "react-native-code-push";
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';
import ListScreen from './app/containers/ListContainer';
import configureStore from './app/store/configureStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = configureStore();

const MyNavigator = StackNavigator({
  home: {
    screen: ListScreen
  }
});

export default class App extends Component<{}> {
  componentDidMount () {
    codePush.sync({updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE});
  }
  render() {
    return (
      <Provider store = {store}>
        <MyNavigator/>
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
