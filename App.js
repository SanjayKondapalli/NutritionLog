/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Swiper from 'react-native-swiper'

import Home from './screens/Home.js'
import Camera from './screens/Camera.js'
import Library from './screens/Library.js'
import Daily from './screens/Daily.js'

export default class App extends React.Component {
  render() { 
    //return <AppContainer />;
    return(
      <Swiper
        loop={false}
        showsPagination={false}
        index={2}>
        <Library /> 
        <Daily />
        <Home />       
        <Camera />
        
      </Swiper>
    )
  }
}