import EndPoints from '../../WebServices/EndPoints'
  import axios from 'react-native-axios';

  export const TYPE = {
    CONTACT_REQUEST: "CONTACT_REQUEST",
    CONTACT_SUCCESS: "CONTACT_SUCCESS",
    CONTACT_FAIL: "CONTACT_FAIL",
    CONTACT_REST: "CONTACT_REST"
  };

  export const contactus = userDetail=>dispatch=>{ 
        // alert(JSON.stringify(userDetail))     
       dispatch({payload:null,type:TYPE.CONTACT_REQUEST });
       const config = { headers: { 'Content-Type': 'multipart/form-data' } };
       axios.post(EndPoints.CONTACTUS, userDetail, config)
       .then(response => 
         dispatch({payload:response.data,type:TYPE.CONTACT_SUCCESS})
        )
       .catch(error => 
       
       dispatch({payload:error,type:TYPE.CONTACT_FAIL})
       )
  }
  export const restAuth =()=>dispatch=>{
     dispatch({payload:null,type:TYPE.CONTACT_REST})
}