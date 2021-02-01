import { TYPE2 } from "./Action";

const initState = {
    loading: false,
    response: null,
    error: null
  };
  export default function restPasswordResponse(state = initState, action){
    switch (action.type) {
        case TYPE2.PASSWORD_REQUEST:
          return { ...state, loading: true };
        case TYPE2.PASSWORD_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE2.PASSWORD_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE2.PASSWORD_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }

  }