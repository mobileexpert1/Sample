import { TYPE4 } from "./Action";



const initState={
    loading:false,
    response:null,
    error:null
}
export default function changeNameResponse(state=initState,action){
    switch (action.type) {
        case TYPE4.NAME_REQUEST:
          return { ...state, loading: true };
        case TYPE4.NAME_SUCCESS:
          return { loading: false, response: action.payload, error: null };
        case TYPE4.NAME_FAIL:
          // error data is also in payload value
          return { loading: false, response: null, error: action.payload };
        case TYPE4.NAME_REST:
          // reset state forcefuly
          // error data is also in payload value
          return initState;
        default:
          return initState;
      }
}