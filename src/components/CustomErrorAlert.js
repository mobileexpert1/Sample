import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, BackHandler,StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dialog } from 'react-native-simple-dialogs';
import image from '../assets/image/image';
import Font from '../assets/Font';




const CustomErrorAlert = props => {
    return (
       
        <Dialog
        visible={props.visible}
        dialogStyle={Styles.dialogview}
        onTouchOutside={() => props.onTouchOutside() }  >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={Styles.imageOuterView}>
            <Image resizeMode='contain' source={image.dialog_notification} />
          </View>
          <Text style={Styles.dialogTitle}>عفوا!!</Text>
          <Text style={Styles.dialogText}>
            يرجى تسجيل الدخول لاستكمال عملية الدفع
                        </Text>
          <TouchableOpacity style={Styles.BtnContainer} onPress={() => props.onPress()}>
            <Text style={Styles.dialogText1}>
              تسجيل الدخول
                        </Text>
          </TouchableOpacity>
        </View>
      </Dialog>

    )
}

export default CustomErrorAlert;

const Styles = StyleSheet.create({
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
    { margin: 20,
        height: 40, width: 40, backgroundColor: '#F6F6FB', justifyContent: 'center', alignItems: 'center', borderRadius: 20
     },
    dialogTitle: {
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2%'),
        margin: '5%',

    },
    dialogText: {
        color: '#AFB9C3',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.8%'),
        textAlign: 'center'
    },
    BtnContainer: {    
        backgroundColor: '#4ECEA1',
        width: wp('73%'),
        height: hp('7%'),
        borderRadius: hp('1.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderColor:'#4ECEA1'
    },
    dialogText1: {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: 'white'
    },


});

