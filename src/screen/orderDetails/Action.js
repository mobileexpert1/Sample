import EndPoints from "../../WebServices/EndPoints";
import axios from 'react-native-axios';
// Mobile Confirmation Api

export const TYPE = {
  ORDERDETAILS_REQUEST: "ORDERDETAILS_REQUEST",
  ORDERDETAILS_SUCCESS: "ORDERDETAILS_SUCCESS",
  ORDERDETAILS_FAIL: "ORDERDETAILS_FAIL",
  ORDERDETAILS_REST: "ORDERDETAILS_REST"
};

export const getOrderDetails = userDetail => dispatch => {
  dispatch({ payload: null, type: TYPE.ORDERDETAILS_REQUEST });
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  axios.post(EndPoints.ORDER_DETAILS, userDetail, config)
  .then(response =>
     dispatch({ payload: response.data, type: TYPE.ORDERDETAILS_SUCCESS })
   )
  .catch(error => 
    dispatch({ payload: error, type: TYPE.ORDERDETAILS_FAIL })
  )
};

export const resetOrderDetails = () => dispatch => {
  dispatch({ payload: null, type: TYPE.ORDERDETAILS_REST });
};
