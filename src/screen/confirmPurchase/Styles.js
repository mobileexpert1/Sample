import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF',
    },
    purchaseStatus:{
        height: hp('7%'),
        width: wp('90%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        backgroundColor: '#EDFAF5',
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusText:{
        color:'#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        marginLeft: wp('3%'),
        
    },
    statusImage:{
        marginLeft: wp('3%'),
    },
    creditDetails:{
        height: hp('10%'),
        width: hp('100%'),
        borderBottomWidth: 1,
        borderColor: '#EBEFF3',
        justifyContent: 'center',
        marginTop:10,
        paddingBottom:15,
        
    },
    creditText:{
        color:'#4553D5',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        marginLeft: wp('6.5%'),
    },
    operation_no:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_REGULAR,
        fontSize: hp('2%'),
        marginLeft: wp('2%'),
    },
    operationText:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.9%'),
        marginLeft: wp('6.5%'),
    },
    operation:{
        flexDirection: 'row',
        marginTop:5
    },
    totalAmount:{
        height: hp('8%'),
        width:wp('100%'),
        marginLeft:wp('6.5%'),
        marginTop:hp('2.5%'),
    },
    priceView:{
        flexDirection: 'row',
        
    },
    totalText:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
    },
    totalText1:{
        color:'#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.9%'),
        marginRight: 5,
        paddingTop:5
    },
    purchaseStatus1:{
        height: hp('8%'),
        width: wp('90%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        backgroundColor: '#4ECEA1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: hp('6%'),
    },
    buttonText:{
        color:'#FFFFFF',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('2.2%'),
    }
})