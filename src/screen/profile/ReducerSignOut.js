import { TYPE5 } from "./Action";

const initState={
    loading:false,
    response:null,
    error:null
}
export default function signOutResponse(state=initState,action){
    switch (action.type) {
        case TYPE5.SIGNOUT_REQUEST:
          return { ...state, loading: true };
        case TYPE5.SIGNOUT_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE5.SIGNOUT_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE5.SIGNOUT_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }
}