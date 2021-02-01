import EndPoints from "../../WebServices/EndPoints";
import axios from 'react-native-axios';
// Mobile Confirmation Api
export const TYPE = {
  MYCASES_REQUEST: "MYCASES_REQUEST",
  MYCASES_SUCCESS: "MYCASES_SUCCESS",
  MYCASES_FAIL: "MYCASES_FAIL",
  MYCASES_REST: "MYCASES_REST"
};

export const getMyCases = userDetail => dispatch => {
  dispatch({ payload: null, type: TYPE.MYCASES_REQUEST });
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  axios.post(EndPoints.MY_CASES, userDetail, config)
  .then(response =>
     dispatch({ payload: response.data, type: TYPE.MYCASES_SUCCESS })
   )
  .catch(error => 
    dispatch({ payload: error, type: TYPE.MYCASES_FAIL })
  )
};

export const resetCases = () => dispatch => {
  dispatch({ payload: null, type: TYPE.MYCASES_REST });
};


export const TYPE2 = {
  ADDTOCART_REQUEST: "ADDTOCART_REQUEST",
  ADDTOCART_SUCCESS: "ADDTOCART_SUCCESS",
  ADDTOCART_FAIL: "ADDTOCART_FAIL",
  ADDTOCART_REST: "ADDTOCART_REST"
};

export const addToCart = userDetails=>dispatch=>
{
    console.log(JSON.stringify(userDetails))
    dispatch({payload:null,type:TYPE2.ADDTOCART_REQUEST });
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };
    axios.post(EndPoints.ADDTOCART, userDetails, config)
    .then(response =>
      dispatch({payload:response.data,type:TYPE2.ADDTOCART_SUCCESS})
     )
    .catch(error =>
       dispatch({payload:error,type:TYPE2.ADDTOCART_FAIL}))
}

export const resetCart = () => dispatch => {
    dispatch({payload:null,type:TYPE2.ADDTOCART_REST})
}



