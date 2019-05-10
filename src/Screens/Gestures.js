import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity} from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Draggable from 'react-native-draggable';
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            myText: 'Swipe me!',
            gestureName: 'none',
            backgroundColor: '#fff'
        };
    }
    onSwipeUp(gestureState) {
        this.setState({myText: 'You swiped up!'});
    }

    onSwipeDown(gestureState) {
        this.setState({myText: 'You swiped down!'});
    }

    onSwipeLeft(gestureState) {
        this.setState({myText: 'You swiped left!'});
    }

    onSwipeRight(gestureState) {
        this.setState({myText: 'You swiped right!'});
    }

    onSwipe(gestureName, gestureState) {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
        this.setState({gestureName: gestureName});
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({backgroundColor: 'red'});
                break;
            case SWIPE_DOWN:
                this.setState({backgroundColor: 'green'});
                break;
            case SWIPE_LEFT:
                this.setState({backgroundColor: 'blue'});
                break;
            case SWIPE_RIGHT:
                this.setState({backgroundColor: 'yellow'});
                break;
        }
    }
    handlerLongClick = () => {
        //handler for Long Click
        Alert.alert(' You long pressed me thanks!');
    };
    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Gestures</Text>
                <TouchableOpacity
                  onLongPress={this.handlerLongClick}
                  //Here is the trick
                  activeOpacity={0.6}
                  style={styles.button}>
                    <Text style={styles.TextStyle}> Long press me desu :3 </Text>
                </TouchableOpacity>
                <GestureRecognizer
                  onSwipe={(direction, state) => this.onSwipe(direction, state)}
                  onSwipeUp={(state) => this.onSwipeUp(state)}
                  onSwipeDown={(state) => this.onSwipeDown(state)}
                  onSwipeLeft={(state) => this.onSwipeLeft(state)}
                  onSwipeRight={(state) => this.onSwipeRight(state)}
                  config={config}
                  style={{
                      backgroundColor: this.state.backgroundColor,
                      width:200,height:200, marginTop:20,justifyContent:"center",
                  }}
                >
                    <Text style = {styles.TextStyle}>{this.state.myText}</Text>
                </GestureRecognizer>
                <Draggable reverse={false} renderColor='red' renderShape='square' offsetX={0} offsetY={0} renderText='P&D'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"#F5FCFF"
    },
    heading:{
        fontSize: 20,
        textAlign:"center",
        margin:10
    },
    button: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#EE5407',
    },

    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    }
})