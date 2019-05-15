import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import styles from './containerStyle'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      location2: null
    }
  }

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position.coords.longitude)
        const location2 = JSON.stringify(position.coords.latitude)

        this.setState({ location, location2 })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.findCoordinates}>
          <Text style={styles.welcome}>Click on me to get GeoLocation</Text>
          <Text>longitude: {this.state.location}</Text>
          <Text>latitude: {this.state.location2}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
