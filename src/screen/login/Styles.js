import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../../assets/Font';



export default StyleSheet.create({
    container:{
        
        backgroundColor:'#FFFFFF',
        height:hp('100%'),width:wp('100%')
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
    textContainer:{
      width:wp('80%'),
        color:'#222A36',
        margin: ('8%'),
        fontSize:hp('2.5%'),
        fontFamily:Font.APP_ALQABAS_BOLD,
        textAlign:'left'
      
    },
    input: {
        width:wp('80%'),
        height: hp('10%'),
        backgroundColor: '#42A5F5',
        margin: ('3%'),
     alignSelf:'center',
        color: 'white',
        borderRadius: 14,
        fontSize:hp('3%'),
        fontWeight: '500',
      },
    subViewContainer:{
        backgroundColor:'#15F1F1',
        alignItems: 'center',
        height:hp('13%'),
        width:wp('80%'),
        borderRadius: 8,
        margin: ('6%'),
        alignContent: 'center',
        alignSelf: 'center',
    },
    text:{
        
        fontSize:20
    },
    text2:{
        alignSelf: 'center',
        fontSize:20
    },
    subTextContainer:{
        alignItems: 'center',
        justifyContent:'center'
        
    }

})