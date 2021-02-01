const DEV = "https:// ";
let BASE_URL = DEV;

export default
  {
    REGISTER: BASE_URL + "register",
    LOGIN: BASE_URL + "login",
    PASSWORD_REST: BASE_URL + "passwordrest",
    GET_CASES_TYPES: BASE_URL + 'get_case_types',
    SEND_EMAIL_CONFIRMATION: BASE_URL + 'sendemailconfirmation',
    MOBILE_SEND_CONFIRMATION: BASE_URL + 'sendmobileconfirmation',
    CHECK_MOBILE_CONFIRMATION: BASE_URL + 'checkmobileconfirmation',
    CHECK_EMAIL_CONFIRMATION: BASE_URL + 'checkemailconfirmation',
    GET_CASES: BASE_URL + 'get_cases/',
    ADDTOCART: BASE_URL + 'add2cart',
    MYCART: BASE_URL + 'mycart',
    DELETE_CART_ITEM: BASE_URL + 'deletecartitem',
    FORGET_PASSWORD: BASE_URL + 'forgetpassword',
    VERIFICATION_FORGETPASSWORD: BASE_URL + 'verificationforgetpassword',
    GET_TRACKED_DATA: BASE_URL + 'tracking',
    GET_USER_INFO: BASE_URL + 'myinfo',
    NAME_REST: BASE_URL + 'changename',
    CONTACTUS:BASE_URL + 'contactus',
    PAGES:BASE_URL+'pages',
    SIGNOUT:BASE_URL+'logout',
    SEARCH:BASE_URL+'search/',
    PAYMENT:BASE_URL+'payment',
    ADDBALANCE:BASE_URL+'balance',
    MY_CASES:BASE_URL+'mycases',
    STATEMENT:BASE_URL+'statement',
    ORDER_DETAILS:BASE_URL+'orderDetails',
    PAYMENT_HISTORY:BASE_URL+'payment_history'
    
  };