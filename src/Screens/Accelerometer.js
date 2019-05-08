import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button} from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors'

setUpdateIntervalForType(SensorTypes.accelerometer, 500)
export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
            z: 0
        }
    }
    componentDidMount() {
        const sub = accelerometer.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
        this.setState({ sub })
    }

    componentWillUnmount() {
        this.state.sub.unsubscribe()
    }
    render() {
        return (
          <View style = {styles.container}>
              <View style = {styles.box}>
                  <Text>X: </Text>
              <ProgressBar style={styles.bar} progress={this.state.x} color={Colors.red800} />
              </View>
              <View style = {styles.box}>
                  <Text>Y: </Text>
              <ProgressBar style={styles.bar} progress={this.state.y} color={Colors.red800} />
              </View>
              <View style = {styles.box}>
                  <Text>Z: </Text>
              <ProgressBar style={styles.bar} progress={this.state.z} color={Colors.red800} />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F5FCFF",
    },
    heading:{
        fontSize: 20,
        textAlign:"center",
        margin:10
    },
    bar:{
        width:300,
        top:-5
    },
    box:{
        flexDirection: 'row'
    }
})