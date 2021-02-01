import { TYPE } from "./Action";

const initState = {loading: false,response: null,error: null};

export default function getMyCasesResponse(state = initState, action) {
  switch (action.type) {
    case TYPE.MYCASES_REQUEST:
      return { ...state, loading: true };
    case TYPE.MYCASES_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case TYPE.MYCASES_FAIL:
      // error data is also in payload value
      return { loading: false, response: null, error: action.payload };
    case TYPE.MYCASES_REST:
      // reset state forcefuly
      // error data is also in payload value
      return initState;
    default:
      return initState;
  }
}
