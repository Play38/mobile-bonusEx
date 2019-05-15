import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './containerStyle'
import { setUpdateIntervalForType, SensorTypes, gyroscope } from 'react-native-sensors'

setUpdateIntervalForType(SensorTypes.gyroscope, 100)

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
    const sub = gyroscope.subscribe(({ x, y, z }) => this.setState({ x, y, z }))
    this.setState({ sub })
  }

  componentWillUnmount() {
    this.state.sub.unsubscribe()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>X: {this.state.x.toFixed(2)}</Text>
        <Text>Y: {this.state.y.toFixed(2)}</Text>
        <Text>Z: {this.state.z.toFixed(2)}</Text>
      </View>
    )
  }
}
