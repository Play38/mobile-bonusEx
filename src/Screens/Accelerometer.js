import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import { ProgressBar, Colors } from 'react-native-paper';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors'

setUpdateIntervalForType(SensorTypes.accelerometer, 400)
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
      let minusX, minusY,minusZ;
      minusX = minusCheck(this.state.x)
      minusY = minusCheck(this.state.x)
      minusZ = minusCheck(this.state.x)
        return (
          <View style = {styles.container}>
              <View style = {styles.box}>
                  <Text>{minusX}X: </Text>
              <ProgressBar style={styles.bar} progress={Math.abs(this.state.x/10)} color={Colors.red800} />
              </View>
              <View style = {styles.box}>
                  <Text>{minusY}Y: </Text>
              <ProgressBar style={styles.bar} progress={Math.abs(this.state.y/10)} color={Colors.red800} />
              </View>
              <View style = {styles.box}>
                  <Text>{minusZ}Z: </Text>
              <ProgressBar style={styles.bar} progress={Math.abs(this.state.z/10)} color={Colors.red800} />
              </View>
          </View>
        );
    }
}
function minusCheck( a )
{
  let minus
  if (a < 0)
    minus = '-'
  else minus = null
  return minus
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