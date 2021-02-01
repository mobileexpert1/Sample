import EndPoints from '../../WebServices/EndPoints'
  import axios from 'react-native-axios';

  export const TYPE = {
     FORGET_REQUEST: "FORGET_REQUEST",
     FORGET_SUCCESS: "FORGET_SUCCESS",
     FORGET_FAIL: "FORGET_FAIL",
     FORGET_REST: "FORGET_REST"
  };

  export const forgetPassword = userDetail=>dispatch=>{      
       dispatch({payload:null,type:TYPE.FORGET_REQUEST });
       const config = { headers: { 'Content-Type': 'multipart/form-data' } };
       axios.post(EndPoints.FORGET_PASSWORD, userDetail, config)
       .then(response => 
         dispatch({payload:response.data,type:TYPE.FORGET_SUCCESS})
        )
       .catch(error => 
       
       dispatch({payload:error,type:TYPE.FORGET_FAIL})
       )
  }
  export const restAuth =()=>dispatch=>{
     dispatch({payload:null,type:TYPE.FORGET_REST})
}