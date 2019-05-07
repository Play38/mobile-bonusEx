import React, {Component} from "react";
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from "react-native";

type Props = {};
export default class App extends Component<Props> {
    render() {
       return (
           <View style={styles.container}>
               <Text style={styles.heading}>Home Screen</Text>
               <TouchableOpacity
                   style = {styles.button}
                   onPress={() => this.props.navigation.navigate('Accelerometer')}
               >
                   <Text style = {styles.buttonText}>Accelerometer</Text>
               </TouchableOpacity>
               <TouchableOpacity
                   style = {styles.button}
                   onPress={() => this.props.navigation.navigate('GeoLocation')}
               >
                   <Text style = {styles.buttonText}>GeoLocation</Text>
               </TouchableOpacity>
               <TouchableOpacity
                   style = {styles.button}
                   onPress={() => this.props.navigation.navigate('Gestures')}
               >
                   <Text style = {styles.buttonText}>Gestures</Text>
               </TouchableOpacity>
               <TouchableOpacity
                   style = {styles.button}
                   onPress={() => this.props.navigation.navigate('Gyroscope')}
               >
                   <Text style = {styles.buttonText}>Gyroscope</Text>
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
        backgroundColor:"#F5FCFF",
    },
    heading:{
        fontSize: 20,
        textAlign:"center",
        margin:10
    },
    button:{
        backgroundColor: '#0598fa',
        height:50,
        justifyContent:"center",
        paddingLeft:5,
        paddingRight:5,
        marginTop:10,
        marginBottom:10
    },
    buttonText:{
        color:'#ffffff',
        fontWeight:'bold',
        fontSize: 20
    }
})