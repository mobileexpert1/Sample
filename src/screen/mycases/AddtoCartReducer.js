import { TYPE2 } from "./Action";

const initState = {loading: false,response: null,error: null};

export default function getAddToCartResponse(state = initState, action) {
  switch (action.type) {
    case TYPE2.ADDTOCART_REQUEST:
      return { ...state, loading: true };
    case TYPE2.ADDTOCART_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case TYPE2.ADDTOCART_FAIL:
      // error data is also in payload value
      return { loading: false, response: null, error: action.payload };
    case TYPE2.ADDTOCART_REST:
      // reset state forcefuly
      // error data is also in payload value
      return initState;
    default:
      return initState;
  }
}
