import EndPoints from "../../WebServices/EndPoints";
import axios from 'react-native-axios';

export const TYPE = {
  SEND_REQUEST: "SEND_REQUEST",
  SEND_SUCCESS: "SEND_SUCCESS",
  SEND_FAIL: "SEND_FAIL",
  SEND_REST: "SEND_REST"
};

export const emailSend = userDetail=>dispatch=>{
    dispatch({payload:null,type:TYPE.SEND_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.SEND_EMAIL_CONFIRMATION, userDetail, config)
    .then(response =>
     dispatch({payload:response.data,type:TYPE.SEND_SUCCESS})
     )
    .catch(error => 
      dispatch({payload:error,type:TYPE.SEND_FAIL})
    )
}
export const restAuth =()=>dispatch=>{
    dispatch({payload:null,type:TYPE.SEND_REST})
}

export const TYPE2 = {
  PASSWORD_REQUEST: "PASSWORD_REQUEST",
  PASSWORD_SUCCESS: "PASSWORD_SUCCESS",
  PASSWORD_FAIL: "PASSWORD_FAIL",
  PASSWORD_REST: "PASSWORD_REST"
};
export const password = userDetail=>dispatch=>{
  // alert(JSON.stringify(userDetail))
    dispatch({payload:null,type:TYPE2.PASSWORD_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.PASSWORD_REST, userDetail, config)
    .then(response => 
     dispatch({payload:response.data,type:TYPE2.PASSWORD_SUCCESS})
     )
    .catch(error => 
     dispatch({payload:error,type:TYPE2.PASSWORD_FAIL})
    )
   
}
export const restAuth1 =()=>dispatch=>{
     dispatch({payload:null,type:TYPE2.PASSWORD_REST})
}

export const TYPE3 = {
  GETUSERINFO_REQUEST: "GETUSERINFO_REQUEST",
  GETUSERINFO_SUCCESS: "GETUSERINFO_SUCCESS",
  GETUSERINFO_FAIL: "GETUSERINFO_FAIL",
  GETUSERINFO_REST: "GETUSERINFO_REST"
};


export const getUserInfo = userDetail=>dispatch=>{

    dispatch({payload:null,type:TYPE3.GETUSERINFO_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.GET_USER_INFO, userDetail, config)
    .then(response => 
    dispatch({payload:response.data,type:TYPE3.GETUSERINFO_SUCCESS})
     )
    .catch(error => 
      dispatch({payload:error,type:TYPE3.GETUSERINFO_FAIL})
    )
   
}
export const restAuth2 =()=>dispatch=>{
     dispatch({payload:null,type:TYPE3.GETUSERINFO_REST})
}


export const TYPE5 = {
  SIGNOUT_REQUEST: "SIGNOUT_REQUEST",
  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
  SIGNOUT_FAIL: "SIGNOUT_FAIL",
  SIGNOUT_REST: "SIGNOUT_REST"
};
export const signOut = userDetail=>dispatch=>{
  // alert(JSON.stringify(userDetail))
    dispatch({payload:null,type:TYPE5.SIGNOUT_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.SIGNOUT, userDetail, config)
    .then(response => 
     dispatch({payload:response.data,type:TYPE5.SIGNOUT_SUCCESS})
     )
    .catch(error => 
     dispatch({payload:error,type:TYPE5.SIGNOUT_FAIL})
    )
   
}
export const restAuth5 =()=>dispatch=>{
     dispatch({payload:null,type:TYPE5.SIGNOUT_REST})
}


// SignOut API

export const TYPE4 = {
  NAME_REQUEST: "NAME_REQUEST",
  NAME_SUCCESS: "NAME_SUCCESS",
  NAME_FAIL: "NAME_FAIL",
  NAME_REST: "NAME_REST"
};
export const changeName = userDetail=>dispatch=>{
  // alert(JSON.stringify(userDetail))
    dispatch({payload:null,type:TYPE4.NAME_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.NAME_REST, userDetail, config)
    .then(response => 
     dispatch({payload:response.data,type:TYPE4.NAME_SUCCESS})
     )
    .catch(error => 
     dispatch({payload:error,type:TYPE4.NAME_FAIL})
    )
   
}
export const restAuth4 =()=>dispatch=>{
     dispatch({payload:null,type:TYPE4.NAME_REST})
}

// action for Add Balance


export const TYPE6 = {
  ADDBALANCE_REQUEST: "ADDBALANCE_REQUEST",
  ADDBALANCE_SUCCESS: "ADDBALANCE_SUCCESS",
  ADDBALANCE_FAIL: "ADDBALANCE_FAIL",
  ADDBALANCE_REST: "ADDBALANCE_REST"
};
export const addBalance = userDetail=>dispatch=>{
  // alert(JSON.stringify(userDetail))
    dispatch({payload:null,type:TYPE6.ADDBALANCE_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.ADDBALANCE, userDetail, config)
    .then(response => 
        dispatch({payload:response.data,type:TYPE6.ADDBALANCE_SUCCESS})
     )
    .catch(error => 
     dispatch({payload:error,type:TYPE6.ADDBALANCE_FAIL})
    )
   
}
export const resetbalance =()=>dispatch=>{
     dispatch({payload:null,type:TYPE6.ADDBALANCE_REST})
}