import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, TouchableOpacity, Alert} from "react-native";

export default class App extends Component<Props> {
    state = {
        location: null
    };

    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
              const location = JSON.stringify(position);

              this.setState({ location });
          },
          error => Alert.alert(error.message),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    };

    render() {
        return (
          <View style={styles.container}>
              <TouchableOpacity onPress={this.findCoordinates}>
                  <Text style={styles.welcome}>Find My Coords?</Text>
                  <Text>Location: {this.state.location}</Text>
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