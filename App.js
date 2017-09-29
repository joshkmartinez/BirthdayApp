import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/screens/main.js';

export default class App extends React.Component {
  render() {
    return (
      <Main>
        
      </Main>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
