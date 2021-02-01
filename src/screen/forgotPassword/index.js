import ForgetPassword from './ForgotPassword'
import { forgetPassword, restAuth } from './Action'
import { connect } from "react-redux";


const mapStateToProps = state => ({
    forgetPasswordResponse: state.forgetPasswordResponse,
})

const mapDispatchToProps = dispatch => ({
    _forgetPassword: data => dispatch(forgetPassword(data)),
    _resetResponse: () => dispatch(restAuth()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ForgetPassword)


