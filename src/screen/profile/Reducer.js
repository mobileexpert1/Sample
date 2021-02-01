import { TYPE } from "./Action";

const initState={
    loading:false,
    response:null,
    error:null
}
export default function emailSendUserResponse(state=initState,action){
    switch (action.type) {
        case TYPE.SEND_REQUEST:
          return { ...state, loading: true };
        case TYPE.SEND_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE.SEND_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE.SEND_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }
}