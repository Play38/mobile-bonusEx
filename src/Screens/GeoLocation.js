import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert, PermissionsAndroid} from "react-native";
import Permissions from 'react-native-permissions'

export default class App extends Component<Props> {
    state = {
        location: null,
        location2: null
    };
    findCoordinates = () => {

        navigator.geolocation.getCurrentPosition(
          position => {
              const location = JSON.stringify(position.coords.longitude);
              const location2 = JSON.stringify(position.coords.latitude);

              this.setState({ location,location2 });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        return (
          <View style={styles.container}>
              <TouchableOpacity onPress={this.findCoordinates}>
                  <Text style={styles.welcome}>Click on me to get GeoLocation</Text>
                  <Text>longitude: {this.state.location}</Text>
                  <Text>latitude: {this.state.location2}</Text>
              </TouchableOpacity>
          </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    },
    heading:{
        fontSize: 20,
        textAlign:"center",
        margin:10
    }
})