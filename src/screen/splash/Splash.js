import React from 'react';
import { View, Text, Alert, BackHandler,ImageBackground } from 'react-native'
import Styles from './Styles'
import Constants from '../../utils/Constants';
import NetInfo from '@react-native-community/netinfo'
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import Strings from '../../utils/Strings'
import image from '../../assets/image/image';

export default class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      connection_Status: ""
    }
  }

  isUserLoggedIn = async () => {
    let status = false;
    try {
      const value = await AsyncStorage.getItem(Constants.IS_USER_LOGIN);
      if (value !== null) {
        status = true;
      } else {
        status = false;
      }
    } catch (e) {
      // error reading value
    }
    return status;
  };

  

  alertToexit() {
    Alert.alert(
      'Warning',
      'Please connect internet connection first', [
        , {
          text: 'OK',
          onPress: () => BackHandler.exitApp()
        }], {
        cancelable: false
      }
    );
  }
  // setTimeout(() => {
  //   // move to next screen
  //   this.splashLogic();
  // }, Constants.SPLASH_TIME_OUT)

  componentDidMount() {
    Strings.idToSearch = '';
    setTimeout(() => {
       AsyncStorage.getItem(AsyncStorageKeys.IS_USER_LOGIN).then(res => {
      if (res === null) {
       this.props.navigation.navigate("Tutorial");
        //this.props.navigation.navigate("ArabicPhase2");
      }
      else if(res === '1'){
        this.props.navigation.navigate("FileText");
        // this.props.navigation.navigate("ConfirmPurchase");
      }
      else {
        this.props.navigation.navigate("Tutorial");
        // this.props.navigation.navigate("ArabicPhase2");
      }
     })
    }, Constants.SPLASH_TIME_OUT)
      }
     

  



  handleConnectivityChange = (isConnected) => {
    if (isConnected == true) {
      this.setState({ connection_Status: "Online" })
    }
    else {
      this.setState({ connection_Status: "Offline" })
    }
  };


  render() {
    return (
      <ImageBackground style={Styles.container} source={image.SplashScreen}>
        {/* <Text style={Styles.textLogo}>SPLASH</Text> */}
      </ImageBackground>
    )
  }
}