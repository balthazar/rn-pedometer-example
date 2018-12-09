import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Pedometer from 'react-native-universal-pedometer'

type Props = {}
export default class App extends Component<Props> {
  componentWillMount() {
    Pedometer.isStepCountingAvailable((error, isAvailable) => {
      console.log('[PEDOMETER]', error, isAvailable)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>Pedometer example</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
