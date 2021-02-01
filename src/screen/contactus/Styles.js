import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#FFFFFF',

    },
    header: {
        flexDirection: "row",
        
        width:wp('100%'),
        height:hp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

    },
    buttonView:{
        backgroundColor: '#F6F6FB',
        height: 35, width: 35, borderRadius: 40,
        alignSelf: 'center',
        justifyContent: 'center',

    },
    backButton: {
        alignSelf: 'center',
        width: 13,
        height: 13,
        // backgroundColor:'red',
        // marginLeft:'8%'

    },
    backButtonnew: {
        alignSelf: 'center',
        width: 35,
        height: 35,

    },
    titleContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        width:60,
        height:20,
        
    },
    titleText: {
        color: 'white',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2.5%'),
        color:'#222A36'
    },
    buttonContainer: {
        flex: 0.1,
        paddingLeft: 15,
        justifyContent: "center",
    },
    imageContainer:{
        height:hp('17%')
    },
    viewImage:{
        // height:hp('15%')
    },
    viewDetail:{
        height:hp('12%'),
        justifyContent:'center',
        alignItems: 'center',
    },
    locationText:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_BOLD,
        fontSize:hp('1.7%%'),
        marginTop:hp('2%'),
        marginBottom:hp('1%'),  
        textAlign:'left',
      
    },
    detialsView:{
        
        marginLeft: wp('9%'),
        marginRight: wp('8%'),
        borderBottomWidth: 2,
        borderColor: '#EBEFF3',
        
    },
    locationAddres:{
        color:'#788490',
        fontSize:hp('1.7%'),
        marginBottom: hp('1'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        textAlign:'left',
    },
    phoneDetailsView:{
        flexDirection: 'row',
        height: hp('10%'),
        marginLeft: wp('9%'),
        marginRight: wp('8%'),
        marginTop: hp('1.8%'),
        backgroundColor: '#FFFFFF',
    },
    phoneView:{
        width:wp('42%'), 
    },
    numberView:{
        flexDirection: 'row',
        
    },
    messageView:{
        height:hp('5%'),
        backgroundColor: '#F6F6FB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText:{
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_REGULAR,
        fontSize:hp('1.7%')
    },
    socialView:{
        flexDirection: 'row',
        width:wp('41%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image:{
        width:wp('9%'),
        height:hp('5%'),
        marginLeft: wp('2%'),
        borderRadius:7
    },
    image1:{
        width:wp('9%'),
        height:hp('5%'),
        borderRadius:7  
    },
    text:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize:hp('1.7%'),
        marginTop: hp('2%'),
        
    },
    text1:{
        color:'#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize:hp('1.7%'),
        marginLeft: wp('1.5%'),
        marginTop: hp('2%'),  
    },
    feedback:{
        backgroundColor: '#FFFFFF',
    },
    textInputFeedback:{
        height: hp('14%'),
        marginLeft: wp('8%'),
        marginRight: wp('8%'),
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E1E5E9',


    },
    button:{
       height: hp('7%'),
       marginLeft: wp('8%'),
       marginRight: wp('8%'),
       marginTop: hp('2.5%'),
       marginBottom: hp('3.5%'),
       backgroundColor: '#4ECEA1', 
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 6,
    },
    buttonText:{
        color:'#FFFFFF',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize:hp('1.9%')
    },
    cell:{
        marginTop: 5,
        color:'#222A36',
        fontFamily:Font.APP_ALMARAI_BOLD,
        fontSize:hp('1.8%'),
        textAlign:'left',
    },

})