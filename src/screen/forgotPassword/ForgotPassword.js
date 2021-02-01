import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Styles from './Styles';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomInputView from '../../components/CustomInputView';
import image from '../../assets/image/image';
import { checkIfEmpty, isInputNumber, checkTextLength, checkEmailValid } from '../../utils/Validations';
import Font from '../../assets/Font';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import ActivityLoader from '../../components/ActivityLoader';
import Toast from 'react-native-simple-toast'
import Strings from '../../utils/Strings';


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailFocused: false,
      emailError: false,
      errorMessage: '',
      loading: false,
    }
  }
  checkIfValidate() {
    if (checkIfEmpty(this.state.email)) {
      this.setState({ emailError: true, errorMessage: 'الرجاء إدخال البريد الإلكتروني الأخير' })
    }
    else if (this.state.emailError === false) {
      let formData = new FormData()
      formData.append('email', this.state.email)
      this.setState({ loading: true }, () =>
        this.props._forgetPassword(formData))
    }
  }


  handleEmail = (text) => {
    if (this.state.email === '') {
      this.setState({ emailFocused: true, email: text, emailError: false })
    }
    else {
      if (checkEmailValid(text)) {
        this.setState({ emailFocused: true, email: text, emailError: true, errorMessage: 'الرجاء إدخال بريد إلكتروني صحيح' })
      }
      else {
        this.setState({ emailFocused: true, email: text, emailError: false })
      }
    }
  }

  vaildateDetails() {
    if (this.props.forgetPasswordResponse.response !== null) {

      if (this.props.forgetPasswordResponse.response.status === 1) {
        Toast.show(this.props.forgetPasswordResponse.response.message, Toast.LONG);
        AsyncStorage.setItem(AsyncStorageKeys.email_id, this.state.email)
        this.props.navigation.replace('MobileConfirmation', { id: '2' })
      }
      else {
        alert(JSON.stringify(this.props.forgetPasswordResponse.response.message))
        this.setState({ loading: false })
        this.props._resetResponse()
      }

    }
    else {
      this.props._resetResponse()
    }
  }

  render() {
    return (
      <View style={Styles.container}>
        {this.state.loading ? <ActivityLoader /> : null}
        {this.vaildateDetails()}

        <TouchableOpacity style={Styles.subContainer}>
        </TouchableOpacity>
        <Text style={Styles.textContainer}>{Strings.email}</Text>
        <Text style={Styles.textStyle}>{Strings.emailActivationMsg}</Text>
        <CustomInputView
          error={this.state.emailError}
          errorMessage={this.state.errorMessage}
          value={this.state.email}
          image={image.online}
          keyboardType='email-address'
          isFocused={this.state.emailFocused}
          handleFocus={(text) => this.handleEmail(text)}
          placeholder='البريد الإلكتروني'
          onFocus={() => this.setState({ emailFocused: true })}/>
        <TouchableOpacity style={Styles.buttonstyle} onPress={() => this.checkIfValidate()}>
          <Text style={{ fontSize: hp('1.8%'), textAlign: 'center', color: 'white', fontFamily: Font.APP_ALMARAI_BOLD }}>إرسال الرابط</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.replace('Login')}>
          <Text style={Styles.buttonTextStyle}>تراجع</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
