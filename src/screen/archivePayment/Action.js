import EndPoints from "../../WebServices/EndPoints";
import axios from 'react-native-axios';
// Mobile Confirmation Api

export const TYPE = {
  PAYMENTHISTORY_REQUEST: "PAYMENTHISTORY_REQUEST",
  PAYMENTHISTORY_SUCCESS: "PAYMENTHISTORY_SUCCESS",
  PAYMENTHISTORY_FAIL: "PAYMENTHISTORY_FAIL",
  PAYMENTHISTORY_REST: "PAYMENTHISTORY_REST"
};

export const getPaymentHistory = userDetail => dispatch => {
  dispatch({ payload: null, type: TYPE.PAYMENTHISTORY_REQUEST });
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  axios.post(EndPoints.PAYMENT_HISTORY+'/'+userDetail.id, userDetail.form_data,config)
  .then(response =>  
    dispatch({ payload: response.data, type: TYPE.PAYMENTHISTORY_SUCCESS })
   )
  .catch(error => 
     dispatch({ payload: error, type: TYPE.PAYMENTHISTORY_FAIL })
  )
};

export const resetPaymentHistory = () => dispatch => {
  dispatch({ payload: null, type: TYPE.PAYMENTHISTORY_REST });
};