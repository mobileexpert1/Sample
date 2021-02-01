import { TYPE3 } from "./Action";

const initState = {
    loading: false,
    response: null,
    error: null
  };
  export default function getUserInfoResponse(state = initState, action){
    switch (action.type) {
        case TYPE3.GETUSERINFO_REQUEST:
          return { ...state, loading: true };
        case TYPE3.GETUSERINFO_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE3.GETUSERINFO_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE3.GETUSERINFO_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }

  }