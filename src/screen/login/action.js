import EndPoints from "../../WebServices/EndPoints";

import axios from 'react-native-axios';

export const TYPE = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGIN_REST: "LOGIN_REST"
  };

  export const login = userDetail => dispatch => {
    // alert(JSON.stringify(userDetail))
    dispatch({ payload: null, type: TYPE.LOGIN_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.LOGIN, userDetail, config)
    .then(response => 

      dispatch({ payload: response.data, type: TYPE.LOGIN_SUCCESS })
     )
    .catch(error => 
    
   dispatch({ payload: error, type: TYPE.LOGIN_FAIL })
    )
  };
  
  export const resetAuth = () => dispatch => {
    dispatch({ payload: null, type: TYPE.LOGIN_REST });
  };
  