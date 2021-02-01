import { TYPE } from "./Action";
const initState = {
    loading: false,
    response: null,
    error: null
  };
export default function forgetPasswordResponse(state = initState, action){
    switch (action.type) {
        case TYPE.FORGET_REQUEST:
          return { ...state, loading: true };
        case TYPE.FORGET_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE.FORGET_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE.FORGET_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }

}