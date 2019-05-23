import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import styles from './containerStyle'
import MapView from 'react-native-maps'

const stylesMap = StyleSheet.create({
  mapContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '90%'
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  mapText: {
    position: 'absolute',
    top: 20,
    alignItems: 'center'
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      location2: null,
      click: 0
    }
  }

    handlePressFindCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const click = 1
        const location = position.coords.longitude
        const location2 = position.coords.latitude

        this.setState({ location, location2, click })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity style={stylesMap.mapText} onPress={this.handlePressFindCoordinates}>
              <Text>Click on me to get your current location</Text>
              {this.state.click === 1 &&
              <Text>Latitude: {this.state.location.toFixed(2)}   Longitude: {this.state.location2.toFixed(2)}</Text>
              }
          </TouchableOpacity>
        {this.state.click === 1 &&
            <View style={stylesMap.mapContainer}>
            <MapView
            style={stylesMap.map}
            showsUserLocation
            region={{
            latitude: this.state.location2,
            latitudeDelta: 0.1,
            longitude: this.state.location,
            longitudeDelta: 0.1
        }}
            >
            <MapView.Marker
            coordinate={{ latitude: this.state.location2, longitude: this.state.location }}
            />
            </MapView>
            </View>}

      </View>
    )
  }
}
