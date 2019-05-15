import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
import Draggable from 'react-native-draggable'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  button: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#EE5407'
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  GestureStyle: {
    width: 200,
    height: 200,
    marginTop: 20,
    justifyContent: 'center'
  }
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myText: 'Swipe me!',
      gestureName: 'none',
      backgroundColor: '#fff'
    }
  }
  onSwipeUp() {
    this.setState({ myText: 'You swiped up!' })
  }

  onSwipeDown() {
    this.setState({ myText: 'You swiped down!' })
  }

  onSwipeLeft() {
    this.setState({ myText: 'You swiped left!' })
  }

  onSwipeRight() {
    this.setState({ myText: 'You swiped right!' })
  }

  onSwipe(gestureName) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections
    this.setState({ gestureName })
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({ backgroundColor: 'red' })
        break
      case SWIPE_DOWN:
        this.setState({ backgroundColor: 'green' })
        break
      case SWIPE_LEFT:
        this.setState({ backgroundColor: 'blue' })
        break
      case SWIPE_RIGHT:
        this.setState({ backgroundColor: 'yellow' })
        break
    }
  }
  handlerLongClick = () => {
    //handler for Long Click
    Alert.alert(' You long pressed me thanks!')
  }
  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Gestures</Text>
        <TouchableOpacity
          onLongPress={this.handlerLongClick}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.TextStyle}> Long press me! </Text>
        </TouchableOpacity>
        <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          onSwipeUp={state => this.onSwipeUp(state)}
          onSwipeDown={state => this.onSwipeDown(state)}
          onSwipeLeft={state => this.onSwipeLeft(state)}
          onSwipeRight={state => this.onSwipeRight(state)}
          config={config}
          style={[styles.GestureStyle, { backgroundColor: this.state.backgroundColor }]}
        >
          <Text style={styles.TextStyle}>{this.state.myText}</Text>
        </GestureRecognizer>
        <Draggable
          reverse={false}
          renderColor="red"
          renderShape="square"
          offsetX={0}
          offsetY={0}
          renderText="P&D"
        />
      </View>
    )
  }
}
