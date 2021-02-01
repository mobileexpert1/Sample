import Login from "./Login";
import { connect } from "react-redux";
import { login, resetAuth } from "./action";

const mapStateToProps = state => ({
    loginUserResponse: state.loginUserResponse
  });
  
  const mapDispatchToProps = dispatch => ({
    _loginUser: user => dispatch(login(user)),
    _resetResponse: () => dispatch(resetAuth())
  });
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);