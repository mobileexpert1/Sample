import {TYPE} from './action'
const initState = {
  loading: false,
  response: null,
  error: null
};

export default function loginUserResponse(state = initState, action) {
  switch (action.type) {
    case TYPE.LOGIN_REQUEST:
      return { ...state, loading: true };
    case TYPE.LOGIN_SUCCESS:
      return { loading: false, response: action.payload, error: null };
    case TYPE.LOGIN_FAIL:
      // error data is also in payload value
      return { loading: false, response: null, error: action.payload };
    case TYPE.LOGIN_REST:
      // reset state forcefuly
      // error data is also in payload value
      return initState;
    default:
      return initState;
  }
}
