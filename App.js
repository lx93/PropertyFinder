/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



type Props = {};


const App = StackNavigator({
  Home: {screen:SearchPage},
  Results: {screen:SearchResults},
});

export default App;

const styles = StyleSheet.create({

});
