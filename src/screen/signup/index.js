import Signup from './Signup'
import { connect } from "react-redux";
import { registration, restAuth, mobile, restAuth1 } from "./Action";



const mapStateToProps = state => ({
    registerUserResponse: state.registerUserResponse,
    mobileUserResponse: state.mobileUserResponse
  });
  
  const mapDispatchToProps = dispatch => ({
    _registerUser: user => dispatch(registration(user)),
    _resetResponse: () => dispatch(restAuth()),
    _mobileUser: user => dispatch(mobile(user)),
    _resetResponse: () => dispatch(restAuth1())
  });

export default connect( 
    mapStateToProps,
    mapDispatchToProps)(Signup)