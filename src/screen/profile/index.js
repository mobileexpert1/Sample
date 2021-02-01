import Profile from "./Profile";
import { connect } from "react-redux";
import { emailSend, restAuth,password, restAuth1,getUserInfo,restAuth2,changeName,restAuth4, signOut, restAuth5 ,addBalance,resetbalance} from "./Action";

const mapStateToProps = state => ({
  emailSendUserResponse: state.emailSendUserResponse,
  restPasswordResponse: state.restPasswordResponse,
  getUserInfoResponse:state.getUserInfoResponse,
  changeNameResponse:state.changeNameResponse,
  signOutResponse:state.signOutResponse,
  addBalanceResponse:state.addBalanceResponse
});


const mapDispatchToProps = dispatch => ({
  _emailUser: user => dispatch(emailSend(user)),
  _restPasswordUser: user => dispatch(password(user)),
  _resetResponse: () => dispatch(restAuth()),
  _resetResponse: () => dispatch(restAuth1()),
  _getUserInfo: user => dispatch(getUserInfo(user)),
  _resetUserInfoResponse: () => dispatch(restAuth2()),
  _changeNameUser: user=>dispatch(changeName(user)),
  _resetChangedNameResponse: () => dispatch(restAuth4()),
  _signOut: user => dispatch(signOut(user)),
  _resetResponse: () => dispatch(restAuth5()),
  _addBalance: id => dispatch(addBalance(id)),
  _resetbalance: () => dispatch(resetbalance()),

});

export default connect( 
  mapStateToProps,
  mapDispatchToProps)(Profile)