/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDU_f1yxtqNzbKrb-DksDYicBw6mS7pP4g",
  authDomain: "fitbook-b8f06.firebaseapp.com",
  databaseURL: "https://fitbook-b8f06.firebaseio.com",
  storageBucket: "fitbook-b8f06.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class fitbook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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

AppRegistry.registerComponent('fitbook', () => fitbook);
