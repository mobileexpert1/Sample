import { TYPE6 } from "./Action";

const initState={
    loading:false,
    response:null,
    error:null
}

export default function addBalanceResponse(state=initState,action){
    switch (action.type) {
        case TYPE6.ADDBALANCE_REQUEST:
          return { ...state, loading: true };
        case TYPE6.ADDBALANCE_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE6.ADDBALANCE_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE6.ADDBALANCE_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }
}