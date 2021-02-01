import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: wp('100%'),
        height: hp('100%'),

    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '11%',
        alignItems: 'center',
        backgroundColor: '#4ECEA1',
        flexDirection: 'row',
    },
    textContainer: {
        alignSelf: 'center',

    },
    textView: {
        height: '29%',
        width: '30%',
        marginBottom: '30%',
        marginTop: '41%',
        marginLeft: '35%',
        marginRight: '17.8%',
        fontSize: hp('2.5%'),
        color: 'white',
        fontWeight: 'bold'



    },
    headerTextView: {
        height: '100%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageView: {
        width: '8.6%',
        height: '52.8%',
        left: '8%',
        position: 'absolute',
        alignItems: 'center',

        borderRadius: 30,
        backgroundColor: '#40C294',
        justifyContent: 'center',

    },

    imageContainer: {
        width: wp('20%'),
        height: hp('20%'),
        marginRight: wp('6%'),
    },

    seSubContainer: {
        width: wp('100%'),
        height: hp('30%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    seSeTView: {
        width: '29.5%',
        height: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: '8%',
        alignSelf:'center',
    },
    mVText: {
        height: '50%',
        fontSize: hp('1.8%'),
        fontFamily: Font.APP_REGULAR_BOLD,
        color: '#4ECEA1', alignSelf: 'center',
        textAlign: 'right'
    },
    ViewVPrice: {
        height: '50%',
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_REGULAR_BOLD,
        color: '#222A36',
        marginLeft: '5.3%',
        fontSize: hp('1.3%'),
        textAlign: 'right',
        alignSelf: 'center',
    },

    balVText: {
        color: '#4ECEA1',
        marginLeft: '5%',
        fontSize: hp('1.6%'),
        fontFamily: Font.APP_REGULAR_BOLD,
    },

    balText: {
        color: '#4553D5',
        fontSize: hp('1.5%'),
        fontFamily: Font.APP_ALMARAI_BOLD
    },

    mText: {
        height: '100%',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('2.4%'),
        // fontWeight: 'bold',
        color: '#222A36'
    },

    ViewPrice:
    {
        height: '100%',
        width: '50%',
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: '#AFB9C3',
        marginLeft: '5%',
        fontSize: hp('1.4%'),
        padding: 3,

    },

    seSubView: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#DEE5EB',
        borderRadius: 1,
        width: '84%',
        height: '35%',
        marginLeft: '8%',
        marginRight: '8%',
        alignItems: 'center',

    },

    fsSeView: {
        width: '31%',
        height: '35%',
        marginLeft: '8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    seSeView: {
        width: '30%',
        height: '30%',
        marginLeft: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditView: {
        backgroundColor: '#788490',
        alignItems: 'center',
        justifyContent: 'center',
        width: '84%',
        marginTop: 20,
        height: '25%',
        borderRadius: 5,
    },

    payView: {
        backgroundColor: '#E5F2F2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '84%',
        marginTop: 20,
        height: '25%',
        borderRadius: 5,
    },
    fsSeTView: {
        width: '40%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        position: 'absolute',
        left: '12%',

    },
    creditText: {
        alignSelf: 'center',
        alignItems: 'center',
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: '#FFFFFF',
        fontSize: hp('1.6%'),
        textAlign: 'center',

    },
    nameView: {
        width: '84%',
        height: '8%',
        flexDirection: 'row',
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',


    },
    crView: {
        width: '51.2%',
        height: '100%',
        flexDirection: 'row',
        position: 'absolute',
        left: '0%',

    },
    detailsView: {
        width: wp('99%'),
        height: hp('60%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        margin: 2,
        paddingBottom:20
    },
    userView: {
        width: '21%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        backgroundColor: '#F6F6FB',
        borderRadius: 8,

    },
    EmailView: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        backgroundColor: '#EDFAF5',
        borderRadius: 20,
    },
    leftarrowView: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        borderRadius: 20,
    },

    numberView: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        backgroundColor: '#FFF7E5',
        borderRadius: 20,
    },
    userImage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    viewName: {
        height: '100%',
        position: 'absolute',
        left: '27.8%'
    },
    viewNameUser: {
        width: '9%',
        height: '50%',
        alignItems: 'center',
        position: 'absolute',
        right: 0

    },
    viewEmailUser: {
        width: wp('35%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0


    },
    emailImage: {

    },

    textName: {
        height: '56%',
        color: 'black',
        fontFamily: Font.APP_REGULAR_BOLD,
        fontSize: hp('1.7%')
    },
    textInfo: {
        height: '38%',
        color: '#AFB9C3'
    },
    textTName: {
        color: 'black',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        textAlign:'left'

    },
    textTNamenew: {
        color: 'black',
        marginTop:5,
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.7%'),
        textAlign:'left'
    },
    textTInfo: {
        fontSize: hp('1.6%'),
        color: '#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        textAlign:'left'
    },
    textTSInfo: {
        fontSize: hp('1.6%'),
        color: '#AFB9C3'
    },
    details: {
        color: '#F8B400',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%')
    },
    detailsEmail: {
        color: '#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%')
    },
    detailsName: {
        color: '#4553D5',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%')

    },
    circle: {
        width: '100%',
        height: '90%',
        borderRadius: 17,
        backgroundColor: '#FFF7E5',
        justifyContent: 'center',

    },
    circleEmail: {
        width: wp('9%'),
        height: hp('5%'),
        borderRadius: 17,
        backgroundColor: '#EDFAF5',
        justifyContent: 'center',
        marginLeft: wp('2%'),
    },
    dialog1: {
        width: ('100%'),
        height: hp('50.4%'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    dialog2: {
        width: ('100%'),
        height: hp('63.3%'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'

    },

    dialogView: {
        height:'100%',width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
       padding:10,
       marginTop:10
       
    },

    dialogTitleName: {
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2%'),
        margin:15,
        marginBottom:20,
    },
    dialogTitleLog:{
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2%'),
        margin: '5%', 
    },

    dialogTitle: {
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2%'),
        marginTop: hp('1%'),
    },
  
    buttonDialog: {
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
        height: '16%',
        borderColor: '#E1E5E9',
        marginTop: '7.7%',
        backgroundColor: '#4ECEA1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDialog1: {
        marginTop: '3%',
        marginBottom: '7.5%',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
        height:'15%'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: hp('1.6%'),
        fontFamily: Font.APP_ALMARAI_BOLD
    },
    buttonTextLogout: {

        color: '#FFFFFF',
        fontSize: hp('1.6%'),
        fontFamily: Font.APP_ALMARAI_BOLD,

    },
    signOutBtnContainer: {
        backgroundColor: '#AFB9C3',
        width: '90%',
        height: '30%',
        borderRadius: hp('1.5%'),
        borderColor: '#AFB9C3',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('5%')
    },
    dialogText: {
        fontSize: hp('1.6%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: '#AFB9C3',
        backgroundColor:'yellow'
    },
    dialogPTitle: {
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2%'),
        margin: 20,
        marginBottom:25,


    },
    buttonPDialog: {
        borderWidth: 1,
        borderRadius: 5,
        width: '83.8%',
        height: '12.5%',
        margin: 20,
        borderColor: '#E1E5E9',
        backgroundColor: '#4ECEA1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPDialog1: {
        marginTop: '6%',
        marginBottom: '9.8%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog3: {
        width: ('100%'),
        height: hp('46.3%'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',



    },
    signoutDialogView:
    {
        width: ('100%'),
        height: hp('30'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'pink'
    },
    dialogCTitle: {
        color: '#222A36',
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        marginTop: '10.1%',
        marginBottom: '3.3%',

    },
    dialogCStatus: {

        width: '85%', alignSelf: 'center',
        color: '#788490',
        margin: 10,

        fontFamily: Font.APP_REGULAR_BOLD,
        fontSize: hp('1.5%')
    },
    buttonCDialog: {
        borderWidth: 1,
        borderRadius: 5,
        width: '84.1%',
        height: '16.9%',
        marginTop: '5%',
        borderColor: '#E1E5E9',
        backgroundColor: '#4ECEA1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCDialog1: {
        marginTop: '5.6%',
        height: '30%',
        width: '18.8%',
        marginLeft: '35.6%',
        marginRight: '35.6%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogCText: {

        color: '#AFB9C3',

        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.5%'),

    },
    // dialogTitle: {
    //     color: '#222A36',
    //     fontFamily: Font.APP_ALQABAS_BOLD,
    //     fontSize: hp('2%'),
    //     margin: '5%',

    // },
    dialogview:
    {
        width: ('100%'),
        height: hp('40%'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageOuterView:
    {
        margin: 15,
        height: 40, width: 40, backgroundColor: '#F6F6FB', justifyContent: 'center', alignItems: 'center', borderRadius: 20
    },
    dialogText: {

        color: '#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),

        textAlign: 'center'
    },
    BtnContainer: {
        backgroundColor: '#4ECEA1',
        width: wp('60%'),
        height: hp('7%'),
        borderRadius: hp('1.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    dialogText1: {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: 'white'
    },
    websubContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      messageText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
      },
      buttonStyle: {
        borderRadius: 5,
      },




})