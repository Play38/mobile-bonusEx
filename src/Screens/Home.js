import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './containerStyle'
const stylesHome = StyleSheet.create({
  button: {
    backgroundColor: '#0598fa',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default class App extends Component {
  static propTypes = {
    navigation: PropTypes.any.isRequired
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Home Screen</Text>
        <TouchableOpacity
          style={stylesHome.button}
          onPress={() => this.props.navigation.navigate('Accelerometer')}
        >
          <Text style={stylesHome.buttonText}>Accelerometer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesHome.button}
          onPress={() => this.props.navigation.navigate('GeoLocation')}
        >
          <Text style={stylesHome.buttonText}>GeoLocation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesHome.button}
          onPress={() => this.props.navigation.navigate('Gestures')}
        >
          <Text style={stylesHome.buttonText}>Gestures</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesHome.button}
          onPress={() => this.props.navigation.navigate('Gyroscope')}
        >
          <Text style={stylesHome.buttonText}>Gyroscope</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
