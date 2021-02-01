import React, { Component } from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import { View } from 'react-native';
 

class ActivityLoader extends Component {
  render() {
    return (
      <View style={{position:'absolute',justifyContent:'center',alignItems:'center',backgroundColor:'transparent',zIndex:1,width:'100%',height:'100%'}}>
      <MaterialIndicator color={'#4ECEA1'}  style={{alignSelf:'center',}} size={50}/>
      </View>
    );
  }
}
export default ActivityLoader;