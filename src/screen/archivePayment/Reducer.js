import { TYPE } from "./Action";

const initState = {loading: false,response: null,error: null};

export default function getPaymentHistoryResponse(state = initState, action) {
  switch (action.type) {
    case TYPE.PAYMENTHISTORY_REQUEST:
      return { ...state, loading: true };
    case TYPE.PAYMENTHISTORY_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case TYPE.PAYMENTHISTORY_FAIL:
      // error data is also in payload value
      return { loading: false, response: null, error: action.payload };
    case TYPE.PAYMENTHISTORY_REST:
      // reset state forcefuly
      // error data is also in payload value
      return initState;
    default:
      return initState;
  }
}
