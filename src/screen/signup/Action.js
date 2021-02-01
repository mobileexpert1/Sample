 import EndPoints from '../../WebServices/EndPoints'
 import axios from 'react-native-axios';

 export const TYPE = {
    AUTH_REQUEST: "AUTH_REQUEST",
    AUTH_SUCCESS: "AUTH_SUCCESS",
    AUTH_FAIL: "AUTH_FAIL",
    AUTH_REST: "AUTH_REST"
  };

  export const registration = userDetail=>dispatch=>{
      dispatch({payload:null,type:TYPE.AUTH_REQUEST });
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      axios.post(EndPoints.REGISTER, userDetail, config)
      .then(response =>
       dispatch({payload:response.data,type:TYPE.AUTH_SUCCESS})
       )
      .catch(error => 
        dispatch({payload:error,type:TYPE.AUTH_FAIL})
      )
  }
  export const restAuth =()=>dispatch=>{
      dispatch({payload:null,type:TYPE.AUTH_REST})
  }


  export const TYPE1 = {
    MOBILE_REQUEST: "MOBILE_REQUEST",
    MOBILE_SUCCESS: "MOBILE_SUCCESS",
    MOBILE_FAIL: "MOBILE_FAIL",
    MOBILE_REST: "MOBILE_REST"
  };

  export const mobile = userDetails=>dispatch=>{
      dispatch({payload:null,type:TYPE1.MOBILE_REQUEST });
      const config = { headers: { 'Content-Type': 'multipart/form-data' } };
      axios.post(EndPoints.MOBILE_SEND_CONFIRMATION, userDetails, config)
      .then(response =>
       dispatch({payload:response.data,type:TYPE1.MOBILE_SUCCESS})
       )
      .catch(error => 
        dispatch({payload:error,type:TYPE1.MOBILE_FAIL})
      )
  }
  export const restAuth1 =()=>dispatch=>{
      dispatch({payload:null,type:TYPE1.MOBILE_REST})
  }