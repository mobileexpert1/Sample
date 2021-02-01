import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    subContainer: {
        marginTop:hp('8%'),
        height:hp('10%'),
        width:wp('60%'),
        margin:('6%'),
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor:'#4ECEA1',
    },
    textContainer: {
        width:wp('80%'),
        color:'#222A36',
        margin: ('7%'),
        fontSize:hp('2.2%'),
        fontFamily:Font.APP_ALQABAS_BOLD,
        textAlign:'left'


    },
    textStyle: {
        width: wp('90%'),
        marginLeft: wp('8%'),
        marginRight: ('4%'),
        fontSize: hp('1.8%'),
        marginBottom: hp('5%'),
        color:'#788490',
        fontFamily:Font.APP_ALMARAI_REGULAR,
        textAlign:'left'


    },
    input: {
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: '#42A5F5',
        margin: ('3%'),
        alignSelf: 'center',
        color: 'white',
        borderRadius: 14,
        fontSize: hp('3%'),
        fontWeight: '500',
    },
    buttonstyle:{
        backgroundColor: '#4ECEA1',
        borderRadius: 10,
        width: wp('85%'),
        height: hp('8%'),
        alignSelf: 'center',
        marginTop: hp('4%'),
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonTextStyle:
    {
        padding: 5,
        fontSize: hp('1.7%'),
        textAlign: 'center',
        color: '#788490', margin: ('4%'),
        fontFamily:Font.APP_ALMARAI_REGULAR
    },




})