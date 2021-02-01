import { connect } from 'react-redux';
import { getPaymentHistory,resetPaymentHistory} from './Action';
import ArchivePayment from './ArchivePayment';

const mapStateToProps = state => ({
    getPaymentHistoryResponse: state.getPaymentHistoryResponse,
});

const mapDispatchToProps = dispatch => ({
    _getPaymentHistory: user => dispatch(getPaymentHistory(user)),
    _resetPaymentHistory: () => dispatch(resetPaymentHistory()),
});

export default connect(mapStateToProps,mapDispatchToProps)(ArchivePayment)