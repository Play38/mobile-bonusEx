import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar, Colors } from 'react-native-paper'
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors'
import styles from './containerStyle'
const stylesAcc = StyleSheet.create({
  bar: {
    width: 300,
    top: -5
  },
  box: {
    flexDirection: 'row'
  }
})

setUpdateIntervalForType(SensorTypes.accelerometer, 400)
export default class App extends Component {
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
    const minusX = minusCheck(this.state.x)
    const minusY = minusCheck(this.state.x)
    const minusZ = minusCheck(this.state.x)
    return (
      <View style={styles.container}>
        <View style={stylesAcc.box}>
          <Text>{minusX}X: </Text>
          <ProgressBar
            style={stylesAcc.bar}
            progress={Math.abs(this.state.x / 10)}
            color={Colors.red800}
          />
        </View>
        <View style={stylesAcc.box}>
          <Text>{minusY}Y: </Text>
          <ProgressBar
            style={stylesAcc.bar}
            progress={Math.abs(this.state.y / 10)}
            color={Colors.red800}
          />
        </View>
        <View style={stylesAcc.box}>
          <Text>{minusZ}Z: </Text>
          <ProgressBar
            style={stylesAcc.bar}
            progress={Math.abs(this.state.z / 10)}
            color={Colors.red800}
          />
        </View>
      </View>
    )
  }
}
function minusCheck(a) {
  let minus
  if (a < 0) minus = '-'
  else minus = null
  return minus
}
