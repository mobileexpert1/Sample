import { combineReducers } from "redux";
import registerUserResponse from "../screen/signup/Reducer";
import loginUserResponse from "../screen/login/Reducer";
import passWordResponse from "../screen/passwordRest/Reducer"
import getListResponse from '../screen/showCase/Reducer'
import mobileUserResponse from "../screen/signup/ReducerMobile";
import emailConUserResponse from "../screen/mobileConfirmation/Reducer";
import emailSendUserResponse from "../screen/profile/Reducer";
import getCasesResponse from "../screen/showCase/ReducerGetCases";
import codeConfrimResponse from "../screen/mobileConfirmation/ReducerCodeConfirm";
import myCartResponse from "../screen/goodBasket/Reducer";
import addtoCartResponse from "../screen/statusDetails/Reducer";
import deleteCartResponse from "../screen/goodBasket/ReducerDeleteCart";
import forgetPasswordResponse from "../screen/forgotPassword/Reducer";
import verifyPasswordResponse from "../screen/mobileConfirmation/ReducerVerifyPass";
import getTrackResponse from "../screen/trackProduct/Reducer";
import restPasswordResponse from "../screen/profile/ReducerResetPass";
import resendFOtpResponse from "../screen/mobileConfirmation/ReducerResetOtp";
import resendEOtpResponse from "../screen/mobileConfirmation/ReducerEmailOtp";
import resendMOtpResponse from "../screen/mobileConfirmation/ReducerMobileOtp";
import getUserInfoResponse from "../screen/profile/ReducerUserInfo";
import changeNameResponse from "../screen/profile/ReducerChangeName";
import contactusResponse from "../screen/contactus/Reducer";
import signOutResponse from "../screen/profile/ReducerSignOut";
import getSearchResponse from "../screen/showCase/ReducerGetSearch";
import pagesResponse from "../screen/info/Reducer";
import paymentResponse from "../screen/goodBasket/PaymentReducer";
import addBalanceResponse from "../screen/profile/ReducerAddBalance";
import cartItems from "./reducer/CartItemReducer";
import getMyCasesResponse from "../screen/mycases/Reducer";
import getPaymentHistoryResponse from "../screen/archivePayment/Reducer";
import getOrderDetailsResponse from "../screen/orderDetails/Reducer";
import statementResponse from "../screen/accountStatement/Reducer";
import getpaymentResponse from "../screen/statusDetails/ReducerForPayment";
import getSignupResponse from "../screen/Arabicphase2/Reducer";
import getAddToCartResponse from "../screen/mycases/AddtoCartReducer";



export default combineReducers({
    registerUserResponse,
    loginUserResponse,
    passWordResponse,
    getListResponse,
    mobileUserResponse,
    codeConfrimResponse,
    emailConUserResponse,
    emailSendUserResponse,
    getCasesResponse,
    addtoCartResponse,
    myCartResponse,
    deleteCartResponse,
    forgetPasswordResponse,
    verifyPasswordResponse,
    getTrackResponse,
    restPasswordResponse,
    resendFOtpResponse,
    resendMOtpResponse,
    resendEOtpResponse,
    getUserInfoResponse,
    changeNameResponse,
    contactusResponse,
    signOutResponse,
    getSearchResponse,
    pagesResponse,
    paymentResponse,
    addBalanceResponse,
    cartItems,
    getMyCasesResponse,
    getPaymentHistoryResponse,
    getOrderDetailsResponse,
    statementResponse,
    getpaymentResponse,
    getSignupResponse,getAddToCartResponse

   
})