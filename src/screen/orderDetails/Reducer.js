import { TYPE } from "./Action";

const initState = {loading: false,response: null,error: null};

export default function getOrderDetailsResponse(state = initState, action) {
  switch (action.type) {
    case TYPE.ORDERDETAILS_REQUEST:
      return { ...state, loading: true };
    case TYPE.ORDERDETAILS_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case TYPE.ORDERDETAILS_FAIL:
      // error data is also in payload value
      return { loading: false, response: null, error: action.payload };
    case TYPE.ORDERDETAILS_REST:
      // reset state forcefuly
      // error data is also in payload value
      return initState;
    default:
      return initState;
  }
}
