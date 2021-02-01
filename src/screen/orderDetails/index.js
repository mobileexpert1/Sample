import { connect } from 'react-redux';
import { getOrderDetails,resetOrderDetails} from './Action';
import OrderDetails from './OrderDetails';

const mapStateToProps = state => ({
    getOrderDetailsResponse: state.getOrderDetailsResponse,
});

const mapDispatchToProps = dispatch => ({
    _getOrderDetails: user => dispatch(getOrderDetails(user)),
    _resetOrderDetails: () => dispatch(resetOrderDetails()),
});

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetails)