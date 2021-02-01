import { TYPE } from "./Action"

const initState = {
    loading: false,
    response: null,
    error: null
  };
export default function contactusResponse(state = initState, action){
    switch (action.type) {
        case TYPE.CONTACT_REQUEST:
          return { ...state, loading: true };
        case TYPE.CONTACT_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE.CONTACT_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE.CONTACT_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }

}

