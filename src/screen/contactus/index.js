import Contact from "./Contact";
import { contactus, restAuth } from "./Action";
import { connect } from "react-redux";
connect


const mapStateToProps = state => ({
    contactusResponse: state.contactusResponse,
})

const mapDispatchToProps = dispatch => ({
    _contactus: data => dispatch(contactus(data)),
    _resetResponse: () => dispatch(restAuth()),
})

export default connect(mapStateToProps,mapDispatchToProps)(Contact)