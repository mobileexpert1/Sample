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
        width: wp('80%'),
        marginLeft: wp('8%'),
        fontSize: hp('2.3%'),
        marginBottom:10,
        color:'#222A36',
        fontFamily:Font.APP_ALQABAS_BOLD,
        textAlign:'left'
        
    },
    input: {
        width: wp('80%'),
        height: hp('10%'),
        backgroundColor: '#42A5F5',
        margin:wp('3%'),
        alignSelf: 'center',
        color: 'white',
        borderRadius: 14,
        fontSize: hp('3%'),
        fontWeight: '500',
    },


})