import {TYPE} from './Action'
const initState={
    loading:false,
    response:null,
    error:null
}
export default function registerUserResponse(state=initState,action){
    switch (action.type) {
        case TYPE.AUTH_REQUEST:
          return { ...state, loading: true };
        case TYPE.AUTH_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE.AUTH_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE.AUTH_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }
}