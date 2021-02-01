import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, BackHandler, Linking } from 'react-native'
import AppHeader from '../../components/AppHeader'
import Styles from './Styles';
import images from '../../assets/image/image';
import CustomInputView from '../../components/CustomInputView';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { checkEmailValid } from '../../utils/Validations';
import Toast from 'react-native-simple-toast';
import ActivityLoader from '../../components/ActivityLoader';


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            nameFocused: false,
            emailFocused: false,
            nameError: false,
            emailError: false,
            errorMessage: '',
            feedback: '',
            feedbackError: false,
            feedbackFocused: false,
            mobile: '',
            mobileFocused: false,
            mobileError: false,
            loading: false
        }
    }
    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        this.props.navigation.navigate('InfoTrack')
        // BackHandler.exitApp()
        return true;
    }
    handleName = (text) => {
        this.setState({ nameFocused: true, name: text, nameError: false })
    }
    handleEmail = (text) => {

        this.setState({ emailFocused: true, email: text, emailError: false })

    }
    handleMobile = (text) => {

        this.setState({ mobileFocused: true, mobile: text, mobileError: false })

    }
    handleFeedback = (text) => {
        this.setState({ feedbackFocused: true, feedbackError: false, feedback: text })
    }

    vaildateFeedback = () => {
        this.setState({ loading: true })
        if (this.state.name === '') {
            this.setState({ nameError: true, errorMessage: 'الرجاء إدخال الاسم', loading: false })
        }
        else if (this.state.email === '') {
            this.setState({ emailError: true, errorMessage: 'الرجاء إدخال بريد إلكتروني', loading: false })
        }
        else if (this.state.feedback === '') {
            this.setState({ feedbackError: true, errorMessage: 'الرجاء إدخال بعض الملاحظات', loading: false })
        }
        else if (checkEmailValid(this.state.email)) {
            this.setState({ email: this.state.email, emailError: true, errorMessage: 'الرجاء إدخال بريد إلكتروني صحيح', loading: false })
        }
        else if (this.state.emailError === false && this.state.nameError === false && this.state.feedbackError === false) {

            let formData = new FormData()
            formData.append('name', this.state.name)
            formData.append('email', this.state.email)
            formData.append('mobile', this.state.mobile)
            formData.append('message', this.state.feedback)

            this.props._contactus(formData)
        }
    }
    vaildateDetials() {
        if (this.props.contactusResponse.response !== null) {
            // alert(JSON.stringify(this.props.contactusResponse.response))
            if (this.props.contactusResponse.response.status === 1) {
                Toast.show(this.props.contactusResponse.response.message, Toast.LONG);
                this.setState({ loading: false }, () =>
                    this.props.navigation.navigate('InfoTrack')
                )

            }
            else {
                alert(JSON.stringify(this.props.contactusResponse.response.message))
                this.props._resetResponse()
            }

        }
        else {
            this.props._resetResponse()
        }
    }

    openTwitter = () => {
        Linking.canOpenURL("twitter://app").then(supported => {
            if (supported) {
                Linking.openURL("twitter://app");
            } else {
                Linking.openURL('https://www.twitter.com')
            }
        });
    }

    openFacebook = () => {
        Linking.canOpenURL("fb://app").then(supported => {
            if (supported) {
                Linking.openURL("fb://app");
            } else {
                Linking.openURL('https://www.facebook.com')
            }
        });
    }

    render() {
        return (
            <View style={Styles.container}>
                {this.vaildateDetials()}
                {this.state.loading ? <ActivityLoader /> : null}
                <AppHeader
                    headerTitle='استفسارك يهمنا'
                    type="left"
                    clearColor
                    onPressBack={() => this.props.navigation.navigate('InfoTrack')} />
                <ScrollView flexGrow={1}>
                    {/* Map Image */}
                    <View style={Styles.viewImage}>
                        <Image style={Styles.imageContainer} source={images.map} />
                    </View>

                    {/* Detials View */}

                    <View style={Styles.detialsView}>
                        <Text style={Styles.locationText}>موقعنا</Text>
                        <Text style={Styles.locationAddres}>جدة – شارع جدة{'\n'} شركة الرسالة القصيرة</Text>
                    </View>
                    {/* cell Phone Details */}
                    <View style={Styles.phoneDetailsView}>
                        <View style={Styles.phoneView}>
                            <Text style={Styles.cell}>
                                الجوال
                        </Text>
                            <View style={Styles.numberView}>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:${'0565656565'}`)}>
                                    <Text style={Styles.text}>0565656565</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL(`tel:${'0500000000'}`)}>
                                    <Text style={Styles.text1}>0500000000</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={Styles.socialView}>
                            <TouchableOpacity onPress={() => this.openTwitter()}>
                                <Image style={Styles.image1} source={images.twitter} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.openFacebook()}>
                                <Image style={Styles.image} source={images.facebook} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Message View */}
                    <View style={Styles.messageView}>
                        <Text style={Styles.messageText}>أو يمكنك ترك رسالة عبر النموذج التالي</Text>
                    </View>

                    {/*feedback*/}
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        flexGrow={1}
                        enableAutomaticScroll={true}
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={{ flexGrow: 1 }}>

                        <CustomInputView
                            register
                            onFocus={() => this.setState({ nameFocused: true })}
                            error={this.state.nameError}
                            errorMessage={this.state.errorMessage}
                            value={this.state.name}
                            isFocused={this.state.nameFocused}
                            handleFocus={(text) => this.handleName(text)} placeholder='الاسم' />
                        <CustomInputView
                            register
                            error={this.state.emailError}
                            errorMessage={this.state.errorMessage}
                            onFocus={() => this.setState({ emailFocused: true })}
                            value={this.state.email}
                            keyboardType='email-address'
                            error={this.state.emailError}
                            isFocused={this.state.emailFocused}
                            handleFocus={(text) => this.handleEmail(text)}
                            placeholder='البريد الإلكتروني' />
                        <CustomInputView
                            register
                            error={this.state.mobileError}
                            errorMessage={this.state.errorMessage}
                            onFocus={() => this.setState({ mobileFocused: true })}
                            maxLength={10}
                            value={this.state.mobile}
                            keyboardType='numeric'
                            isFocused={this.state.mobileFocused}
                            handleFocus={(text) => this.handleMobile(text)}
                            placeholder='رقم الجوال' />
                        <CustomInputView
                            register
                            feedBack
                            isFocused={this.state.feedbackFocused}
                            handleFocus={(text) => this.handleFeedback(text)}
                            onFocus={() => this.setState({ feedbackFocused: true })}
                            // onBlur={() => this.setState({ feedbackFocused: true })}
                            placeholder='اكتب نص الرسالة هنا'
                            multiline={true}
                            errorMessage={this.state.errorMessage}
                            value={this.state.feedback}
                            error={this.state.feedbackError}
                        />
                        <TouchableOpacity style={Styles.button} onPress={() => this.vaildateFeedback()}>
                            <Text style={Styles.buttonText}>مرحبا بك</Text>
                        </TouchableOpacity>
                    </KeyboardAwareScrollView>
                </ScrollView>
            </View>
        )
    }
}
