import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../../assets/Font';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    textTrue: {
        padding: 5,
        textAlign: 'center',
        color: '#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.6%')
    },
    textFalse: {
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.6%'),
        padding: 5,
        textAlign: 'center',
        color: '#788490',
    },
    colorFalse: {
        height: ('100%'),
        justifyContent: 'center',
        alignItems: 'center', alignSelf: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,

    },
    colorTrue: {
        height: ('100%'),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderBottomColor: '#4ECEA1',
        borderBottomWidth: 2,
    },
    buttonView: {
        width: wp('100%'),
        height: hp('8%'),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        position: 'absolute',
    },
    casenUmberText:
    {
        textAlign: 'left',
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#222A36'
    },
    familyNumberText:
    {
        textAlign: 'left',
        fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#FF7E67'
    },
    currentPayDateText:
    {
        textAlign: 'left',
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#4553D5'
    },
    dateTxt:
    {
        textAlign: 'left',
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#222A36'
    },
    ratingText:
    {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#788490'
    },
    midBasketText:
    {
        fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        paddingLeft: 10,
        color: '#222A36'
    },
    grandText:
    {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        paddingLeft: 10,
        color: '#788490'
    },
    easternText:
    {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft: 10,
        color: '#222A36'
    },
    trackingText: {
        fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        paddingLeft: 10,
        color: '#4ECEA1',
        marginLeft: 5
    },
    mainText:
    {
        fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        paddingLeft: 10,
        color: '#222A36',
        marginLeft: 5
    },
    errorView:
    {
        justifyContent: 'center', alignItems: 'center', height: hp('68%'),
        borderBottomRightRadius: 30, borderBottomLeftRadius: 30,
        backgroundColor: '#FFFFFF'
    },
    imageStyle:
    {
        height: 80,
        width: 80,
        alignSelf: 'center',
    },
    errorText: {
        textAlign: 'center',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.9%'),
        margin: 10,
        color: '#222A36'
    },
    errorText2: {
        textAlign: 'center',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
        color: '#788490'
    },
    bottomView:
    {
        height: '25%',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        borderBottomColor: '#EBEFF3',
        borderTopColor: '#EBEFF3',
        borderTopWidth: 1,
        borderBottomWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topLineStyle:
    {
        width: '100%',
        height: 4,
        backgroundColor: '#F6F6FB',
    },
    flatListOuterView:
    {
        width: wp('100%'),
        height: hp('25%'),
        backgroundColor: 'white',
        marginBottom: 10,
    },
    flatListInnerView:
    {
        flexDirection: 'row',
        height: '40%',
    },
    firstFlatView:
    {
        width: '60%',
        flexDirection: 'row',
        height: '100%'
    },
    userIconImageStyle:
    {
        height: 35,
        width: 35,
        backgroundColor: 'transparent',
        marginLeft: '8%',
        alignSelf: 'center',
        margin: 10
    },
    textViewStyle:
    {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    dateViewStyle:
    {
        width: '40%',
        marginTop: '5%',
        height: '60%'
    },
    addressview:
    {
        width: '40%',
        marginTop: '5%',
        height: '60%'
    },
    bottomview2:
    {
        flexDirection: 'row',
        width: '50%',
        backgroundColor: 'white',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorView:
    {
        height: hp('80%'),
        width: '100%',
        // 
    },
    ratingTextView:
    {
        justifyContent: 'center',
        alignSelf: 'center'
    },
})