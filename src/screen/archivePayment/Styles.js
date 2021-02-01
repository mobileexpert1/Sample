import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    dateView: {
        height: hp('6%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6FB',
        flexDirection: 'row',

    },
    date: {
        position: 'absolute',
        left: wp('6%'),
        color: '#788490',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%')
    },
    time: {
        position: 'absolute',
        right: wp('6%'),
        color: '#788490',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%')
    },
    bill1: {
        color: '#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
        textAlign: 'left',
        marginBottom: 3
    },
    bill_no1: {
        color: '#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        textAlign: 'left'
    },
    bill2: {
        color: '#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
        textAlign: 'left',
        marginBottom: 3
    },
    bill_no2: {
        color: '#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        textAlign: 'left'
    },
    paymentView: {
        flexDirection: 'row',
        width: wp('100%'),
        marginTop: hp('2.5%'),
    },
    invoiceView: {
        position: 'absolute',
        left: wp('6%'),
    },
    amountView: {
        marginLeft: wp('45%'),
    },
    creditView: {
        marginTop: hp('2%'),
        marginBottom: hp('2.5%'),
        marginLeft: wp('6%'),
    },
    credit: {
        color: '#4553D5',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        textAlign: 'left', marginBottom: 3
    },
    operationView: {
        flexDirection: 'row',
    },
    operation: {
        color: '#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        textAlign: 'left'
    },
    operationNumber: {
        color: '#222A36',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
        textAlign: 'left'
    },
    preview: {
        height: hp('7%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopColor: '#F6F6FB',
        borderBottomColor: '#F6F6FB', borderBottomWidth: 1, borderTopWidth: 1,
    },
    previewText: {
        color: '#788490',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        marginLeft: wp('1.8%'),
    }
})