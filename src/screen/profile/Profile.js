import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, Button, BackHandler, Alert } from 'react-native'
import image from '../../assets/image/image'
import Styles from './Styles'
import { Dialog } from 'react-native-simple-dialogs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import DialogInputView from '../../components/DialogInputView';
import { checkIfEmpty, } from '../../utils/Validations';
import AppHeader from '../../components/AppHeader';
import CustomExitDialog from '../../components/CustomExitDialog';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import Toast from 'react-native-simple-toast'
import ActivityLoader from '../../components/ActivityLoader';
import ConnectionView from '../../components/ConnectionView';
import NetInfo from '@react-native-community/netinfo'
import Font from '../../assets/Font';
import CustomLoginView from '../../components/CustomLoginView';
import PaymentDialog from '../../components/PaymentDialog';
import { getPaymentStatus } from '../statusDetails/PaymentDetail';
import { WebView } from 'react-native-webview';
import CustomInfoView from '../../components/CustomInfoView';

export default class Profile extends Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            dialogVisiblePassword: false,
            firstnameFocused: false,
            lastNameFocused: false,
            passFocused: false,
            confirmPassFocused: false,
            currentPassFocused: false,
            firstname: '',
            lastName: '',
            pass: '',
            confirmPass: '',
            currentPass: '',
            firstnameError: false,
            lastNameError: false,
            passError: false,
            confirmPassError: false,
            currentPassError: false,
            signOut: false,
            showExitDialog: false,
            userId: null,
            token: '',
            emailTrue: '',
            numberTrue: '',
            showDialog: false,
            checkLogin: null,
            userData: [],
            connection_Status: false,
            showPaymentDialog: false,
            amountError: false,
            amountErrorMsg: '',
            onFocusAmount: false, amount: '',
            showWebView: false,
            success: false,
            paymentMessage: '',
            paymentSuccess: false,
            loadingText: 'Getting payment status...',
            webLoading: false, checkPaymentUrl: '', url_pay: ''
        }
        this.unsubscribe = NetInfo.addEventListener(state => {
            this.setState({ connection_Status: state.isConnected })
        });
    }

    onNavigationStateChange = navState => {
        if (
            navState.url.includes('payment_result?id') &&
            navState.loading == false
        ) {
            {
                this.setState({ showWebView: false, success: true }, () => {
                    this.setState({ webLoading: true }, () => {
                        this.getPaymentStatus();
                    });
                });
            }
        }
        console.log(navState);
    }

    getPaymentStatus = () => {
        getPaymentStatus(this.state.checkPaymentUrl)
            .then(response => {
                this.setState({
                    paymentMessage: response.message,
                    paymentSuccess: response.status,
                    webLoading: false
                });
            })
            .catch(error => {
                this.setState({ webLoading: false, loadingText: "Something went wrong!" })
            });
    };

    handlefirstName = (text) => {
        this.setState({ firstnameFocused: true, firstname: text, firstnameError: false })
    }

    handleLastName = (text) => {
        this.setState({ lastNameFocused: true, lastName: text, lastNameError: false })
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

    componentDidMount = () => {
        this.checkConnection()
        AsyncStorage.getItem(AsyncStorageKeys.IS_USER_LOGIN).then(res => {
            if (res === null) {
                this.setState({ showDialog: true })
            }
            else {
                AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token, AsyncStorageKeys.IS_USER_EMAIL, AsyncStorageKeys.IS_USER_PHONE, AsyncStorageKeys.IS_USER_LOGIN])
                    .then(response => {
                        this.setState({ userId: response[0][1], token: response[1][1], emailTrue: response[2][1], numberTrue: response[3][1], checkLogin: response[4][1] }, () => {
                            let form_data = new FormData();
                            form_data.append("token", response[1][1]);
                            form_data.append("user_id", response[0][1]);
                            this.props._getUserInfo(form_data);
                        })
                    })
            }
        })
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    reloadInfo = () => {
        let form_data = new FormData();
        form_data.append("token", this.state.token);
        form_data.append("user_id", this.state.userId);
        this.props._getUserInfo(form_data);
    }

    handleBackPress = () => {
        if (this.state.showWebView) {
            this.setState({ showWebView: false });
            return true;
        }
        else {
            BackHandler.exitApp()
            return true;
        }
    }

    handleCurrentPass = (text) => {
        if (this.state.confirmPass === '') {
            this.setState({ currentPassFocused: true, currentPass: text, currentPassError: false })
        }
        else {
            if (this.state.pass === '') {
                this.setState({ currentPassFocused: true, currentPass: text, currentPassError: false })
            }
            else if (text === this.state.pass) {
                this.setState({ currentPassFocused: true, currentPass: text, currentPassError: false })
            }
            else {
                this.setState({ confirmPassFocused: true, confirmPass: text, confirmPassError: true, errorMessage: 'كلمة المرور غير متطابقة' })
            }
        }
    }

    forlogout = () => {
        let formData = new FormData()
        formData.append('token', this.state.token)
        formData.append('user_id', this.state.userId)
        this.props._signOut(formData)
    }

    handlePass = (text) => {
        this.setState({ passFocused: true, pass: text, passError: false })
    }

    handleConfirmPass = (text) => {
        this.setState({ confirmPassFocused: true, confirmPass: text, confirmPassError: false })
    }

    validtateUserData = () => {
        if (this.props.getUserInfoResponse.response !== null) {
            if (this.props.getUserInfoResponse.response.status === 1) {
                this.setState({ userData: this.props.getUserInfoResponse.response, firstnameFocused: true, lastNameFocused: true, firstname: this.props.getUserInfoResponse.response.f_name, lastName: this.props.getUserInfoResponse.response.l_name }, () =>
                                  this.props._resetUserInfoResponse())
            }
        }
    }

    checkIfValidate = () => {
        if (checkIfEmpty(this.state.firstname)) {
            this.setState({ firstnameError: true, errorMessage: 'الرجاء إدخال الاسم الأول' })
        }
        else if (checkIfEmpty(this.state.lastName)) {
            this.setState({ lastNameError: true, errorMessage: ' الرجاء إدخال الاسم الأخير' })
        }
        else if (this.state.firstnameError === false && this.state.lastNameError === false) {
            alert('done')
        }
    }

    checkPassValidate = () => {
        this.setState({ loading: true })
        if (checkIfEmpty(this.state.currentPass)) {
            this.setState({ currentPassError: true, errorMessage: 'الرجاء إدخال كلمة المرور للتأكيد', loading: false })
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
        else if (this.state.passError === false && this.state.confirmPassError === false && this.state.currentPassError === false) {
            let form_data = new FormData();
            form_data.append("user_id", this.state.userId);
            form_data.append("token", this.state.token);
            form_data.append("password1", this.state.pass);
            form_data.append("password2", this.state.confirmPass);
            setTimeout(() => {
                this.props._restPasswordUser(form_data);
            }, 3000);
        }
    }

    nameValidateDetials() {
        if (this.props.changeNameResponse.response !== null) {
            if (this.props.changeNameResponse.response.status === 1) {
                Toast.show(this.props.changeNameResponse.response.message, Toast.LONG);
                this.setState({ dialogVisible: false, loading: false, firstname: '', lastName: '' }, () =>
                    this.props._resetChangedNameResponse(), this.reloadInfo());
            }
            else {
                alert(JSON.stringify(this.props.changeNameResponse.response.message))
                this.props._resetResponse()
            }
        }
        else { this.props._resetResponse() }
    }

    changeName = () => {
        this.setState({ loading: true })
        if (checkIfEmpty(this.state.firstname)) {
            this.setState({ firstnameError: true, errorMessage: 'الرجاء إدخال الاسم الأول', loading: false })
        }
        else if (checkIfEmpty(this.state.lastName)) {
            this.setState({ lastNameError: true, errorMessage: 'الرجاء إدخال الاسم الأخير', loading: false })
        }
        else if (this.state.firstnameError === false && this.state.lastNameError === false) {
            let formData = new FormData()
            formData.append('token', this.state.token)
            formData.append('user_id', this.state.userId)
            formData.append('f_name', this.state.firstname)
            formData.append('l_name', this.state.lastName)
            setTimeout(() => {
                this.props._changeNameUser(formData)
            }, 3000);
        }
    }

    verificationEmail = () => {
        if (this.props.getUserInfoResponse.response !== null) {
            if (this.props.getUserInfoResponse.response.is_email_activated === 1) {
            }
            else {
                this.setState({ loading: true })
                let formData = new FormData();
                formData.append("user_id", this.state.userId);
                formData.append("token", this.state.token);
                setTimeout(() => {
                    this.setState({ loading: false }, () => this.props._emailUser(formData))
                }, 3000);
            }
        }
    }

    ValidateBalanceResponse = () => {
        if (this.props.addBalanceResponse.response !== null) {
            if (this.props.addBalanceResponse.response.status === 1) {
                this.setState({ showPaymentDialog: false, showWebView: true, url_pay: this.props.addBalanceResponse.response.url_pay, checkPaymentUrl: this.props.addBalanceResponse.response.url_payment_check }, () => {
                    this.props._resetbalance()
                })
            }
        }
    }

    checkPayment = () => {
        if (checkIfEmpty(this.state.amount)) {
            this.setState({ amountError: true, amountErrorMsg: 'الرجاء إدخال المبلغ' })
        }
        else {
            AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token, AsyncStorageKeys.IS_USER_EMAIL, AsyncStorageKeys.IS_USER_PHONE, AsyncStorageKeys.IS_USER_LOGIN])
                .then(response => {
                    this.setState({ userId: response[0][1], token: response[1][1], emailTrue: response[2][1], numberTrue: response[3][1], checkLogin: response[4][1] }, () => {
                        let form_data = new FormData();
                        form_data.append("token", response[1][1]);
                        form_data.append("user_id", response[0][1]);
                        form_data.append("amount", this.state.amount)
                        this.props._addBalance(form_data)
                    })
                })
        }
    }

    isDone() {
        this.props.navigation.navigate('MobileConfirmation', { id: '1' })
    }

    renderContent() {
        return (
            <WebView
                source={{ uri: this.state.url_pay }}
                onNavigationStateChange={this.onNavigationStateChange}
                javaScriptEnabled
                style={{ width: wp('100%'), height: hp('100%'), position: 'absolute' }}
            />
        );
    }

    infoView = (props) => {
        return (
            <View style={Styles.nameView}>
                <View style={Styles.crView}>
                    <TouchableOpacity style={Styles.userView} >
                        <Image style={Styles.userImage} source={props.source}></Image>
                    </TouchableOpacity>
                    <View style={Styles.viewName}>
                        <View style={Styles.textName}><Text style={Styles.textTNamenew}>البريد الإلكتروني</Text></View>
                    </View>
                </View>
                <TouchableOpacity
                    style={Styles.leftarrowView} onPress={() => alert("1")}>
                    <Image resizeMode='contain'
                        source={image.leftArrow}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }

    validateDetials() {
        if (this.props.emailSendUserResponse.response !== null) {
            if (this.props.emailSendUserResponse.response.status === 1) {
                Toast.show(this.props.emailSendUserResponse.response.message, Toast.LONG);
                let code = this.props.emailSendUserResponse.response.email_code
                AsyncStorage.setItem(AsyncStorageKeys.email_code, code)
                this.isDone()
            }
            else {
                alert(JSON.stringify(this.props.emailSendUserResponse.response.message))
            }
        }
        else {

        }
    }
    restValidateDetials() {
        if (this.props.restPasswordResponse.response !== null) {
            if (this.props.restPasswordResponse.response.status === 1) {
                Toast.show(this.props.restPasswordResponse.response.message, Toast.LONG);
                this.setState({ dialogVisiblePassword: false, loading: false, pass: '', confirmPass: '', currentPass: '' })
            }
            else {
                this.setState({ loading: false }, () =>
                    alert(JSON.stringify(this.props.restPasswordResponse.response.message)))
            }
        }
        else { }
    }

    signOutValidateDetials() {
        // alert(JSON.stringify(this.props.signOutResponse.response))

        if (this.props.signOutResponse.response !== null) {
            if (this.props.signOutResponse.response.status === 1) {
                AsyncStorage.setItem(AsyncStorageKeys.token, '');
                AsyncStorage.setItem(AsyncStorageKeys.user_id, '');
                AsyncStorage.setItem(AsyncStorageKeys.IS_USER_EMAIL, '');
                AsyncStorage.setItem(AsyncStorageKeys.IS_USER_LOGIN, '');
                AsyncStorage.setItem(AsyncStorageKeys.IS_USER_PHONE, '');
                AsyncStorage.setItem(AsyncStorageKeys.CART_ITEMS, '0');
                this.props.navigation.navigate('Login')
                Toast.show(this.props.signOutResponse.response.message, Toast.LONG)
            }
            else {
                alert(JSON.stringify(this.props.signOutResponse.response.message))
                this.props._resetResponse()
            }
        } else {
            this.props._resetResponse()
        }
    }

    render() {
        return (
            this.state.connection_Status ?
                this.state.showWebView ? (
                    this.renderContent()
                ) :
                    <View style={Styles.container}>
                        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                            <AppHeader
                                headerTitle='الملف الشخصي'
                                type="left"
                                signOut
                                onPressBack={() => this.setState({ signOut: true })} />
                            <View>
                                <View style={Styles.seSubContainer}>
                                    {this.validateDetials()}
                                    {this.validtateUserData()}
                                    {this.restValidateDetials()}
                                    {this.nameValidateDetials()}
                                    {this.signOutValidateDetials()}
                                    {this.ValidateBalanceResponse()}
                                    {this.state.userData.length === 0 ? <ActivityLoader /> : null}
                                    <View style={Styles.seSubView}>
                                        <View style={Styles.fsSeView}>
                                            <Text style={Styles.balText}>الرصيد المتوفر حاليا</Text>
                                        </View>
                                        <View style={Styles.seSeView}>
                                            <Text style={Styles.mText}>{this.state.userData.length !== 0 ? this.state.userData.balance : 0}</Text>
                                            <Text style={Styles.ViewPrice}>ريال</Text>
                                        </View>
                                    </View>
                                    {this.state.paymentSuccess ?
                                        <View style={Styles.payView}>
                                            <View style={Styles.fsSeTView}>
                                                <Image resizeMode='contain' source={image.circle_outlined} ></Image>
                                                <Text style={Styles.balVText}>تم إضافة رصيد بقيمة</Text>
                                            </View>
                                            <View style={Styles.seSeTView}>
                                                <Text style={Styles.mVText}>{this.state.amount}</Text>
                                                <Text style={Styles.ViewVPrice}>ريال</Text>
                                            </View>
                                        </View>
                                        :
                                        <TouchableOpacity style={Styles.creditView} onPress={() => this.setState({ showPaymentDialog: true })}>
                                            <Text style={Styles.creditText}>إضافة رصيد</Text>
                                        </TouchableOpacity>
                                    }
                                </View>
                                <View style={Styles.detailsView}>
                                    <View style={Styles.nameView}>
                                        <View style={Styles.crView}>
                                            <TouchableOpacity style={Styles.userView} >
                                                <Image resizeMode='contain' style={Styles.userImage} source={image.userBig} ></Image>
                                            </TouchableOpacity>
                                            <View style={Styles.viewName}>
                                                <View style={Styles.textName}><Text style={Styles.textTName}>
                                                    {this.state.userData.length !== 0 ? this.state.userData.f_name + ' ' + this.state.userData.l_name : 0}</Text></View>
                                                <View style={Styles.textInfo}><Text style={Styles.textTInfo}>السعودية, جدة</Text></View>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={Styles.viewNameUser} onPress={() => this.setState({ dialogVisible: true })}>
                                            <Text style={Styles.detailsName}>تغيير</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.nameView}>
                                        <View style={Styles.crView}>
                                            <TouchableOpacity style={Styles.userView} >
                                                <Image style={Styles.userImage} source={image.password} ></Image>
                                            </TouchableOpacity>
                                            <View style={Styles.viewName}>
                                                <View style={Styles.textName}><Text style={Styles.textTName}>كلمة المرور</Text></View>
                                                <View style={Styles.textInfo}><Text style={Styles.textTInfo}>تغيير كلمة المرور</Text></View>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={Styles.viewNameUser} onPress={() => this.setState({ dialogVisiblePassword: true })}>
                                            <Text style={Styles.detailsName}>تغيير</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.nameView}>
                                        <View style={Styles.crView}>
                                            <TouchableOpacity style={Styles.userView} >
                                                <Image style={Styles.userImage} source={image.phone}></Image>
                                            </TouchableOpacity>
                                            <View style={Styles.viewName}>
                                                <Text style={Styles.textTName}>الجوال</Text>
                                                <Text style={{ fontSize: hp('1.6%'), color: '#AFB9C3', fontFamily: Font.APP_ALMARAI_REGULAR, paddingTop: 3, textAlign: 'left' }}>
                                                    {this.state.userData.length !== 0 ? this.state.userData.mobile : 0}</Text>
                                            </View>
                                        </View>
                                        <View style={Styles.viewEmailUser} >
                                            <Text style={this.state.userData.length !== 0 ? this.state.userData.is_mobile_activated === 1 ? Styles.detailsEmail : Styles.details : Styles.details}>{this.state.userData.is_mobile_activated === 1 ? 'مفعل' : 'غير مفعل'}</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={this.state.userData.length !== 0 ? this.state.userData.is_mobile_activated === 1 ? Styles.EmailView : Styles.numberView : Styles.numberView}>
                                            <Image resizeMode='contain' source={this.state.userData.length !== 0 ? this.state.userData.is_mobile_activated === 1 ? image.allDone : image.error_outlined : image.error_outlined}></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={Styles.nameView}>
                                        <View style={Styles.crView}>
                                            <TouchableOpacity style={Styles.userView} >
                                                <Image style={Styles.userImage} source={image.email}></Image>
                                            </TouchableOpacity>
                                            <View style={Styles.viewName}>
                                                <View style={Styles.textName}><Text style={Styles.textTName}>البريد الإلكتروني</Text></View>
                                                <View style={Styles.textInfo}><Text style={Styles.textTInfo}>
                                                    {this.state.userData.length !== 0 ? this.state.userData.email : 0}</Text></View>
                                            </View>
                                        </View>
                                        <View style={Styles.viewEmailUser} >
                                            <Text
                                                style={this.state.userData.length !== 0 ? this.state.userData.is_email_activated === 1 ? Styles.detailsEmail : Styles.details : Styles.details}>مفعل</Text>
                                        </View>
                                        <TouchableOpacity
                                            style={this.state.userData.length !== 0 ? this.state.userData.is_email_activated ? Styles.EmailView : Styles.numberView : Styles.numberView} onPress={() => this.verificationEmail()}>
                                            <Image resizeMode='contain'
                                                source={this.state.userData.length !== 0 ? this.state.userData.is_email_activated ? image.allDone : image.error_outlined : image.error_outlined}>
                                            </Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ backgroundColor: '#DEE5EB', width: wp('100%'), height: 1, marginTop: '7%' }}>
                                    </View>
                                    <CustomInfoView text='الحالات الخاصة بي' source={image.cases}  onPress={() => this.props.navigation.navigate('MyCases')}/>
                                    <CustomInfoView text='أرشيف المدفوعات' source={image.shoping}  onPress={() => this.props.navigation.navigate('ArchivePayment')}/>
                                    <CustomInfoView text='كشف الحساب' source={image.chartbar} onPress={() => this.props.navigation.navigate('AccountStatement')}/>
                                </View>

                                {/* Change Name Dialog */}
                                <Dialog
                                    visible={this.state.dialogVisible}
                                    dialogStyle={Styles.dialog1}
                                    onTouchOutside={() => this.setState({ dialogVisible: false })}  >
                                    {this.state.loading ? <ActivityLoader /> : null}
                                    <View style={Styles.dialogView}>
                                        <Text style={Styles.dialogTitleName}>بياناتي الشخصية</Text>
                                        <DialogInputView
                                            onFocus={() => this.setState({ firstnameFocused: true })}
                                            onBlur={() => this.setState({ firstnameFocused: true })}
                                            placeholder='الاسم الأول'
                                            error={this.state.firstnameError}
                                            errorMessage={this.state.errorMessage}
                                            value={this.state.firstname}
                                            isFocused={this.state.firstnameFocused}
                                            handleFocus={(text) => this.handlefirstName(text)}
                                        />
                                        <DialogInputView
                                            onFocus={() => this.setState({ lastNameFocused: true })}
                                            onBlur={() => this.setState({ lastNameFocused: true })}
                                            errorMessage={this.state.errorMessage}
                                            error={this.state.lastNameError}
                                            value={this.state.lastName}
                                            isFocused={this.state.lastNameFocused}
                                            handleFocus={(text) => this.handleLastName(text)}
                                            placeholder='الاسم الأخير'
                                        />
                                        <TouchableOpacity style={Styles.buttonDialog} onPress={() => this.changeName()} >
                                            <Text style={Styles.buttonText}>حفظ التعديلات</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={Styles.buttonDialog1} onPress={() => this.setState({ dialogVisible: false })} >
                                            <Text style={Styles.dialogText} >تراجع</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Dialog>
                                {/* Change Password */}
                                <Dialog
                                    visible={this.state.dialogVisiblePassword}
                                    dialogStyle={Styles.dialog2}
                                    onTouchOutside={() => this.setState({ dialogVisiblePassword: false })}  >
                                    {this.state.loading ? <ActivityLoader /> : null}
                                    <View style={Styles.dialogView}>
                                        <Text style={Styles.dialogPTitle}>تغيير كلمة المرور</Text>
                                        <DialogInputView
                                            pass
                                            onFocus={() => this.setState({ currentPassFocused: true })}
                                            onBlur={() => this.setState({ currentPassFocused: true })}
                                            errorMessage={this.state.errorMessage}
                                            error={this.state.currentPassError}
                                            value={this.state.currentPass}
                                            isFocused={this.state.currentPassFocused}
                                            handleFocus={(text) => this.handleCurrentPass(text)}
                                            placeholder='كلمة المرور الحالية'
                                        />
                                        <DialogInputView
                                            onFocus={() => this.setState({ passFocused: true })}
                                            onBlur={() => this.setState({ passFocused: true })}
                                            errorMessage={this.state.errorMessage}
                                            value={this.state.pass}
                                            pass
                                            error={this.state.passError}
                                            secureTextEntry={true}
                                            isFocused={this.state.passFocused}
                                            handleFocus={(text) => this.handlePass(text)}
                                            placeholder='كلمة المرور الجديدة'
                                        />
                                        <DialogInputView
                                            onFocus={() => this.setState({ confirmPassFocused: true })}
                                            onBlur={() => this.setState({ confirmPassFocused: true })}
                                            errorMessage={this.state.errorMessage}
                                            value={this.state.confirmPass}
                                            pass
                                            error={this.state.confirmPassError}
                                            secureTextEntry={true}
                                            isFocused={this.state.confirmPassFocused}
                                            handleFocus={(text) => this.handleConfirmPass(text)}
                                            placeholder='تأكيد كلة المرور'
                                        />
                                        <TouchableOpacity style={Styles.buttonPDialog} onPress={() => this.checkPassValidate()}>
                                            <Text style={Styles.buttonText}>تغيير كلمة المرور</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={Styles.buttonPDialog1} onPress={() => this.setState({ dialogVisiblePassword: false })}>
                                            <Text style={Styles.dialogText}>تراجع</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Dialog>

                                {/* For signout */}
                                <Dialog
                                    visible={this.state.signOut}
                                    dialogStyle={Styles.signoutDialogView}
                                    onTouchOutside={() => this.setState({ signOut: false })}  >
                                    <View style={Styles.dialogView}>
                                        <Text style={Styles.dialogTitle}>هل تريد تسجيل الخروج</Text>
                                        <TouchableOpacity style={Styles.signOutBtnContainer} onPress={() => this.forlogout()}>
                                            <Text style={Styles.buttonTextLogout}>تسجيل الخورج</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={Styles.buttonCDialog1} onPress={() => this.setState({ signOut: false })}>
                                            <Text style={Styles.dialogCText}>تراجع </Text>
                                        </TouchableOpacity>
                                    </View>
                                </Dialog>
                                <CustomExitDialog onPressYes={() => BackHandler.exitApp()} onPressNo={() => this.setState({ showExitDialog: false })} visible={this.state.showExitDialog} onTouchOutside={() => this.setState({ showExitDialog: false })} />
                                {/* Login Dialog */}
                                <CustomLoginView onTouchOutside={() => this.setState({ showDialog: true })} visible={this.state.showDialog} onPress={() => this.props.navigation.navigate('Login')} />
                                {/* Payment Dialog */}
                                <PaymentDialog onTouchOutside={() => this.setState({ showPaymentDialog: false })}
                                    visible={this.state.showPaymentDialog} onPayment={() => this.checkPayment()}
                                    ammountError={this.state.amountError} errorMessage={this.state.amountErrorMsg} ammount={this.state.amount}
                                    ammountFocused={this.state.ammountFocused} handleAmmount={(text) => this.setState({ amount: text })} onFocus={() => this.setState({ ammountFocused: true })}
                                />
                            </View>
                        </ScrollView>
                    </View>
                :
                <View style={Styles.container}>
                    <AppHeader
                        headerTitle='الملف الشخصي'
                        type="left"
                        signOut
                        onPressBack={() => this.setState({ signOut: false })} />
                    <ConnectionView />
                </View>
        )
    }
}
