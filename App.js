import React, { Component } from 'react';
import AppNavigator from './src/AppNavigator';
import {createAppContainer} from "react-navigation";

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component<Props>{
  render(){
    return(
        <AppContainer/>
    )
  }

}
