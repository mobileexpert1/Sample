import { connect } from 'react-redux';
import { getMyCases,resetCases,addToCart,resetCart} from './Action';
import MyCases from './MyCases';

const mapStateToProps = state => ({
    getMyCasesResponse: state.getMyCasesResponse,
    getAddToCartResponse:state.getAddToCartResponse
});

const mapDispatchToProps = dispatch => ({
    _getMyCases: user => dispatch(getMyCases(user)),
    _resetCases: () => dispatch(resetCases()),
    _addToCart: user => dispatch(addToCart(user)),
    _resetCart: () => dispatch(resetCart()),
});

export default connect(mapStateToProps,mapDispatchToProps)(MyCases)