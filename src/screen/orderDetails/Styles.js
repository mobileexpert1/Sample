import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    invoice:{
        flexDirection: 'row',
        width: wp('100%'),
        height: hp('9.8%'),
        borderTopWidth: 1,
        borderColor: '#F6F6FB',
        alignItems: 'center',
        
        
    },
    invoiceView:{
        position: 'absolute',
        left:wp('6.5%')
    },
    dateTimeView:{
        position: 'absolute',
        right:wp('6.5%')

    },
    invoice_no:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
    },
    invoiceText:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.5%'),
        paddingBottom:5
    },
    date:{
        fontFamily: Font.APP_ALMARAI_REGULAR,
        color:'#222A36',
        fontSize: hp('1.5%'),
    },
    time:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%'),
    },
    creditDetails:{
        height: hp('9.7%'),
        width: hp('100%'),
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#F6F6FB',
        justifyContent: 'center',

        
    },
    creditText:{
        color:'#4553D5',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%'),
        marginLeft: wp('6.5%'),
        paddingBottom:5
    },
    operation_no:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.7%'),
        marginLeft: wp('2%'),
    },
    operationText:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        marginLeft: wp('6.5%'),
    },
    operation:{
        flexDirection: 'row',
    },
    personDetails:{
        width: wp('100%'),
        height: hp('17%'),        
        
    },
    nameView:{
        
        marginLeft: wp('6.5%'),
        marginTop: hp('2%'),

        
        
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('3.5%'),
        
    },
    invoiceView1:{
        position: 'absolute',
        left:wp('6.5%'),
        marginTop:5,
    },
    dateTimeView1:{
        position: 'absolute',
        right:wp('6.5%')

    },
    email:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize:hp('1.7%'),
        paddingBottom:5
    },
    email_id:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),

    },
    phone:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize:hp('1.7%')
    },
    phone_no:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
    },
    name:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.9%'),
        paddingBottom:3
    },
    address:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize:hp('1.7%'),
        paddingBottom:5

    },
    detailsView:{
        height: hp('5%'),
        width: wp('100%'),
        flexDirection: 'row',
        backgroundColor: '#F8F9FB',
        
        alignItems: 'center',

    },
    amountText:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        position: 'absolute',
        right:wp('14%')
    },
    detailsText:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        position: 'absolute',
        left:wp('6.5%')
    },
    caseDetails:{
        flexDirection: 'row',
        height: hp('5%'),
        marginLeft: wp('6.5%'),
        marginRight: wp('12%'),
        width: wp('85%'),
        marginTop: hp('2.6%'),
        alignItems: 'center',
        backgroundColor:'yellow'
    },
    caseType:{

    },
    caseAmount:{
        position: 'absolute',
        right:0,
        color:'#222A36',
        fontSize: hp('1.9%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
    },
    caseText:{
        color:'#788490',
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
    },
    typeText:{
        color:'#222A36',
        fontSize:hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_BOLD,

    },
    flatlist:{
        // height: hp('18%'),
        borderBottomColor:'#F6F6FB',
        borderBottomWidth:2,
    
    },
    totalAmount:{
        height: hp('8%'),
        width:wp('100%'),
        marginLeft:wp('6.5%'),
        marginTop:15
    },
    priceView:{
        flexDirection: 'row',
        
    },
    totalText:{
        color:'#222A36',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        paddingBottom:5
    },
    totalText1:{
        color:'#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('2%'),
        marginRight: 5,
    }

})