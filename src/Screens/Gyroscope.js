import React, {Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import { setUpdateIntervalForType, SensorTypes, gyroscope } from 'react-native-sensors'

setUpdateIntervalForType(SensorTypes.gyroscope, 100)

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
        const sub = gyroscope.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
        this.setState({ sub })
    }

    componentWillUnmount() {
        this.state.sub.unsubscribe()
    }
    render() {
        return (
          <View style = {styles.container}>
              <Text>X: {this.state.x.toFixed(2)}</Text>
              <Text>Y: {this.state.y.toFixed(2)}</Text>
              <Text>Z: {this.state.z.toFixed(2)}</Text>
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