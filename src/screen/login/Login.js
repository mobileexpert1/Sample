import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import Styles from './Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomInputView from '../../components/CustomInputView';
import image from '../../assets/image/image';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { checkIfEmpty, isInputNumber, checkTextLength, checkNetwork } from '../../utils/Validations';
import Font from '../../assets/Font';
import AsyncStorage from '@react-native-community/async-storage';
import ActivityLoader from '../../components/ActivityLoader';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import Toast from 'react-native-simple-toast'
import NetInfo from '@react-native-community/netinfo'
import ConnectionView from '../../components/ConnectionView';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      password: '',
      isNumberFocused: false,
      isPassFocused: false,
      numberError: false,
      passError: false,
      errorMessage: '',
      loading: false,
      connection_Status: false
    }
    this.unsubscribe=NetInfo.addEventListener(state => {
      this.setState({ connection_Status: state.isConnected })
    });
  }

  componentDidMount() {
    this.checkConnection()
  }

  checkConnection = () => {
    NetInfo.fetch().done((data) => {
      if (data.isConnected == true) {
        this.setState({ connection_Status: true })
      }
      else {
        this.setState({ connection_Status: false })
      }
    });
  }

  handleConnectivityChange = (data) => {
    alert("here")
    if (data.isConnected == true) {
      this.setState({ connection_Status: true })
    }
    
    else {
      this.setState({ connection_Status: false })
    }
  };


  componentWillUnmount(){
    this.unsubscribe();
  }
  
  handlenumber = (text) => {
    if (this.state.number === '') {
      this.setState({ isNumberFocused: true, number: text, })
    }
    else {
      this.setState({ isNumberFocused: true, number: text, })
    }
  }

  handlePass = (text) => {
    if (this.state.number === '') {
      this.setState({ isNumberFocused: true, numberError: false, password: text, })
    }
    else {
      if (isInputNumber(this.state.number) === false) {
        this.setState({ isNumberFocused: true, password: text, numberError: true, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول' })
      }
      else if (checkTextLength(this.state.number, 10)) {
        this.setState({ numberError: true, password: text, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول' })
      }
      else {
        this.setState({ isNumberFocused: true, password: text, numberError: false })
      }
    }
    this.setState({ isPassFocused: true, password: text, passError: false })
  }

  checkIfValidate() {
    this.setState({ loading: true, numberError: false, passError: false })
    if (checkIfEmpty(this.state.number)) {

      this.setState({ numberError: true, errorMessage: 'أدخل رقم الجوال', loading: false })
    }
    else if (checkIfEmpty(this.state.password)) {
      this.setState({ numberError: false, passError: true, errorMessage: 'من فضلك أدخل كلمة المرور', loading: false })
    }
    else if (isInputNumber(this.state.number) === false) {

      this.setState({ passError: false, numberError: true, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول', loading: false })
    }
    else if (checkTextLength(this.state.number, 10)) {

      this.setState({ passError: false, numberError: true, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول', loading: false })
    }

    else if (this.state.numberError === false && this.state.passError === false) {
      let form_data = new FormData();
      form_data.append("mobile", this.state.number);
      form_data.append("password", this.state.password);
      setTimeout(() => {
        this.setState({ loading: false }, () => this.props._loginUser(form_data))
      }, 3000);
    }
  }

  validateDetails() {
    if (this.props.loginUserResponse.response !== null) {
      if (this.props.loginUserResponse.response.status === 1) {
        console.log("hh " + JSON.stringify(this.props.loginUserResponse.response))
        Toast.show(this.props.loginUserResponse.response.message, Toast.LONG);
        let user_id = this.props.loginUserResponse.response.user_id;
        let token = this.props.loginUserResponse.response.token
        this.storeData(user_id, token);
        this.props._resetResponse();
      }
      else {
        Alert.alert(
          'خطأ',
          this.props.loginUserResponse.response.message, [{
              text: 'حسنا',
            },
            ]
            ,{
            cancelable: false
          },
        );
        // alert(JSON.stringify(this.props.loginUserResponse.response.message))
        this.props._resetResponse();
      }
    }
    else {
      this.props._resetResponse();
    }
  }

  storeData = async (user_id, token) => {
    try {
      await AsyncStorage.setItem(AsyncStorageKeys.IS_USER_LOGIN, '1');
      await AsyncStorage.setItem(AsyncStorageKeys.IS_USER_PHONE, '1');
      await AsyncStorage.setItem(AsyncStorageKeys.user_id, user_id);
      await AsyncStorage.setItem(AsyncStorageKeys.token, token)
      this.props.navigation.navigate("ShowCase");
    } catch (e) {
      // saving error
    }
  };

  render() {
    return (
      this.state.connection_Status ?
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          flexGrow={1}
          enableAutomaticScroll={true}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}>
          {this.validateDetails()}
          <View style={Styles.container}>
            {this.state.loading ? <ActivityLoader /> : null}
            <TouchableOpacity style={Styles.subContainer}>
            </TouchableOpacity>
            <Text style={Styles.textContainer}>تسجيل الدخول</Text>
            <CustomInputView
              value={this.state.number}
              isFocused={this.state.isNumberFocused}
              handleFocus={(text) => this.handlenumber(text)}
              placeholder='رقم الجوال'
              onFocus={() => this.setState({ isNumberFocused: true })}
              image={image.phone}
              error={this.state.numberError}
              errorMessage={this.state.errorMessage}
              keyboardType='numeric'
              maxLength={10}
            />
            <CustomInputView isFocused={this.state.isPassFocused}
              secureTextEntry={true}
              handleFocus={(text) => this.handlePass(text)}
              placeholder='كلمة المرور'
              image={image.lock}
              isFocused={this.state.isPassFocused}
              onFocus={() => this.setState({ isPassFocused: true })}
              value={this.state.password}
              maxLength={15}
              error={this.state.passError}
              errorMessage={this.state.errorMessage}
            />
            <TouchableOpacity style={{ width: wp('85%'), alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
              <Text style={{ margin: 5,textAlign:'left', fontSize: hp('1.8%'), color: '#788490', fontFamily: Font.APP_ALMARAI_REGULAR }}>نسيت كلمة المرور ؟</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.checkIfValidate()} style={{ backgroundColor: '#4ECEA1', borderRadius: 10, width: wp('85%'), height: hp('7%'), alignSelf: 'center', marginTop: hp('5%'), alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: 'white', fontFamily: Font.APP_ALMARAI_BOLD }}>مرحبا بك</Text>
            </TouchableOpacity>
            <View onPress={() => this.props.navigation.navigate('Signup')} style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, width: wp('80%'), height: hp('7%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: hp('5%') }}>
              <Text style={{ padding: 5, fontSize: hp('1.6%'), textAlign: 'center', color: '#788490', fontFamily: Font.APP_ALMARAI_BOLD }}>لا تمتلك أي حساب ؟</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                <Text style={{ padding: 5, fontSize: hp('1.6%'), textAlign: 'center', color: '#FF7E67', fontFamily: Font.APP_ALMARAI_BOLD }}>إنشاء حساب</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ alignSelf: 'center', marginTop: '8%', height: hp('10%') }} onPress={() => this.props.navigation.navigate('ShowCase')}>
              <Text style={{ padding: 5, fontSize: hp('1.6%'), textAlign: 'center', color: '#788490', fontFamily: Font.APP_ALMARAI_BOLD }}>تصفح دون الدخول</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        :
        <ConnectionView />
    )
  }
}