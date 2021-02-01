import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import Styles from './Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomInputView from '../../components/CustomInputView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { checkIfEmpty, isInputNumber, checkTextLength, checkEmailValid } from '../../utils/Validations';
import Font from '../../assets/Font';
import AsyncStorage from '@react-native-community/async-storage';
import ActivityLoader from '../../components/ActivityLoader';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import Toast from 'react-native-simple-toast'
import NetInfo from '@react-native-community/netinfo'
import ConnectionView from '../../components/ConnectionView';


export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      firstname: '',
      lastName: '',
      email: '',
      number: '',
      pass: '',
      confirmPass: '',
      firstnameFocused: false,
      lastNameFocused: false,
      emailFocused: false,
      numberFocused: false,
      passFocused: false,
      confirmPassFocused: false,
      firstnameError: false,
      lastNameError: false,
      emailError: false,
      numberError: false,
      passError: false,
      confirmPassError: false,
      errorMessage: '',
      loading: false,
      user_id: null,
      token: '',
      connection_Status: false
    }
    this.unsubscribe = NetInfo.addEventListener(state => {
      this.setState({ connection_Status: state.isConnected })
    });
  }

  handlefirstName = (text) => {
    this.setState({ firstnameFocused: true, firstname: text, firstnameError: false })
  }

  handleLastName = (text) => {
    this.setState({ lastNameFocused: true, lastName: text, lastNameError: false })
  }

  handleEmail = (text) => {
    this.setState({ emailFocused: true, email: text, emailError: false })
  }

  handleNumber = (text) => {
    this.setState({ numberFocused: true, number: text, numberError: false })
  }

  handlePass = (text) => {
    this.setState({ passFocused: true, pass: text, passError: false })
  }

  handleConfirmPass = (text) => {
    this.setState({ confirmPassFocused: true, confirmPass: text, confirmPassError: false })
  }

  checkIfValidate() {
    this.setState({ loading: true })
    if (checkIfEmpty(this.state.firstname)) {
      this.setState({ firstnameError: true, errorMessage: 'الرجاء إدخال الاسم الأول', loading: false })
    }
    else if (checkIfEmpty(this.state.lastName)) {
      this.setState({ lastNameError: true, errorMessage: ' الرجاء إدخال الاسم الأخير', loading: false })
    }
    else if (checkIfEmpty(this.state.email)) {
      this.setState({ emailError: true, errorMessage: 'الرجاء إدخال البريد الإلكتروني الأخير', loading: false })
    }
    else if (checkEmailValid(this.state.email)) {
      this.setState({ email: this.state.email, emailError: true, errorMessage: 'الرجاء إدخال بريد إلكتروني صحيح', loading: false })
    }

    else if (checkIfEmpty(this.state.number)) {
      this.setState({ numberError: true, errorMessage: 'أدخل رقم الجوال', loading: false })
    }
    else if (isInputNumber(this.state.number) === false) {
      this.setState({ number: this.state.number, numberError: true, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول', loading: false })
    }
    else if (checkTextLength(this.state.number, 10)) {
      this.setState({ number: this.state.number, numberError: true, errorMessage: 'ادخل رقم هاتف خلوي ساري المفعول', loading: false })
    }
    else if (checkIfEmpty(this.state.pass)) {
      this.setState({ passError: true, errorMessage: 'من فضلك أدخل كلمة المرور', loading: false })
    }
    else if (checkIfEmpty(this.state.confirmPass)) {
      this.setState({ confirmPassError: true, errorMessage: 'الرجاء إدخال كلمة المرور للتأكيد', loading: false })
    }
    else if (this.state.pass !== this.state.confirmPass) {
      this.setState({ passError: true, confirmPassError: true, errorMessage: 'كلمة المرور غير متطابقة', loading: false })
    }
    else if (this.state.emailError === false && this.state.numberError === false && this.state.firstnameError === false && this.state.lastNameError === false && this.state.passError === false && this.state.confirmPassError === false) {
      let formData = new FormData();
      formData.append("f_name", this.state.firstname);
      formData.append("l_name", this.state.lastName);
      formData.append("password", this.state.pass);
      formData.append("passwordconfirm", this.state.confirmPass);
      formData.append("email", this.state.email);
      formData.append("mobile", this.state.number);
      setTimeout(() => {
        this.setState({ loading: false }, () => this.props._registerUser(formData))
      }, 3000);
      // this.props.navigation.navigate('Login')
    }
  }
  checkConnection = () => {
    NetInfo.fetch().done((data) => {
      if (data.isConnected == true) {
        this.setState({ connection_Status: true })
      }
      else { this.setState({ connection_Status: false }) }
    });
  }

  handleConnectivityChange = (data) => {
    if (data.isConnected == true) { this.setState({ connection_Status: true }) }
    else { this.setState({ connection_Status: false }) }
  };


  componentWillUnmount() {
    this.unsubscribe()
  }

  validateResponse() {
    if (this.props.registerUserResponse.response !== null) {
      console.log(JSON.stringify(this.props.registerUserResponse.response))
      if (this.props.registerUserResponse.response.status) {
        Toast.show(this.props.registerUserResponse.response.message, Toast.LONG);
        let user_id = String(this.props.registerUserResponse.response.user_id);
        let token = this.props.registerUserResponse.response.token
        AsyncStorage.setItem(AsyncStorageKeys.user_id, user_id);
        AsyncStorage.setItem(AsyncStorageKeys.token, token)
        this.setState({ user_id: user_id, token: token }, () => this.mobileSendConfirmation())
      }
      else {
        alert(JSON.stringify(this.props.registerUserResponse.response.message))
        this.props._resetResponse();
      }
    }
    else {
      this.props._resetResponse();
    }
  }

  mobileSendConfirmation() {
    let formData1 = new FormData();
    formData1.append("token", this.state.token);
    formData1.append("user_id", this.state.user_id);
    setTimeout(() => {
      this.setState({ loading: false }, () => this.props._mobileUser(formData1))
    }, 3000);
    this.props.navigation.navigate('MobileConfirmation', { id: '0' })
  }
  componentDidMount() {
    this.checkConnection()
  }


  validateResponse1() {
    if (this.props.mobileUserResponse.response !== null) {
      // alert(JSON.stringify(this.props.mobileUserResponse.response))
      console.log(JSON.stringify(this.props.mobileUserResponse.response))
      if (this.props.mobileUserResponse.response.status === 1) {
        Toast.show(this.props.mobileUserResponse.response.message, Toast.LONG);
        // alert(JSON.stringify(this.props.mobileUserResponse.response.mobile_code))
        this.props.navigation.navigate('MobileConfirmation')
      }
      else {
        this.props._resetResponse();
      }
    }
    else {
      this.props._resetResponse();
    }
  }


  render() {
    return (
      this.state.connection_Status ?
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          flexGrow={1}
          enableAutomaticScroll={true}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          {this.validateResponse()}
          {this.validateResponse1()}
          <View style={Styles.container}>
            {this.state.loading ? <ActivityLoader /> : null}
            <TouchableOpacity style={Styles.subContainer}>
            </TouchableOpacity>
            <Text style={Styles.textContainer}>إنشاء حساب</Text>
            <ScrollView flexGrow={1}>
              <CustomInputView
                register
                onFocus={() => this.setState({ firstnameFocused: true })}
                error={this.state.firstnameError}
                errorMessage={this.state.errorMessage}
                value={this.state.firstname}
                isFocused={this.state.firstnameFocused}
                handleFocus={(text) => this.handlefirstName(text)} placeholder='الاسم الأول' />
              <CustomInputView error={this.state.lastNameError}
                register
                errorMessage={this.state.errorMessage}
                value={this.state.lastName}
                onFocus={() => this.setState({ lastNameFocused: true })}
                isFocused={this.state.lastNameFocused}
                handleFocus={(text) => this.handleLastName(text)}
                placeholder='الاسم الأخير' />
              <CustomInputView error={this.state.emailError}
                errorMessage={this.state.errorMessage}
                onFocus={() => this.setState({ emailFocused: true })}
                register
                value={this.state.email}
                keyboardType='email-address'
                isFocused={this.state.emailFocused}
                handleFocus={(text) => this.handleEmail(text)}
                placeholder='البريد الإلكتروني' />
              <CustomInputView error={this.state.numberError}
                onFocus={() => this.setState({ numberFocused: true })}
                register
                errorMessage={this.state.errorMessage}
                value={this.state.number}
                keyboardType='numeric'
                maxLength={10}
                isFocused={this.state.numberFocused}
                handleFocus={(text) => this.handleNumber(text)}
                placeholder='رقم الجوال' />
              <CustomInputView error={this.state.passError}
                errorMessage={this.state.errorMessage}
                onFocus={() => this.setState({ passFocused: true })}
                value={this.state.pass}
                register
                isFocused={this.state.passFocused}
                secureTextEntry={true}
                handleFocus={(text) => this.handlePass(text)}
                placeholder='كلمة المرور' />
              <CustomInputView error={this.state.confirmPassError}
                onFocus={() => this.setState({ confirmPassFocused: true })}
                errorMessage={this.state.errorMessage}
                value={this.state.confirmPass}
                register
                secureTextEntry={true}
                isFocused={this.state.confirmPassFocused}
                handleFocus={(text) => this.handleConfirmPass(text)}
                placeholder='تأكيد كلمة المرور' />
              <TouchableOpacity onPress={() => this.checkIfValidate()} style={{ marginTop: hp('3%'), marginBottom: hp('3%'), backgroundColor: '#4ECEA1', borderRadius: 10, width: wp('85%'), height: hp('7%'), alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }} >
                <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: 'white', fontFamily: Font.APP_ALMARAI_BOLD }}>إنشاء الحساب</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
        :
        <ConnectionView />
    )
  }
}