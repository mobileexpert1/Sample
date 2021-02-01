import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, BackHandler,StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Dialog } from 'react-native-simple-dialogs';
import image from '../assets/image/image';
import Font from '../assets/Font';




const CartItemRemoveDialog = props => {
    return (
       
        <Dialog
        visible={props.visible}
        dialogStyle={Styles.removeDialogview}
        onTouchOutside={() => props.onTouchOutside()}  >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={Styles.imageOuterView2}>
            <Image resizeMode='contain' source={image.delete_outlined} />
          </View>
          <Text style={Styles.dialogTitle}>إزالة الحالة</Text>
          <Text style={Styles.dialogText}> هل تريد بالفعل حذف الحالة من سلة الخير</Text>
          <TouchableOpacity style={Styles.removeBtnContainer} onPress={() => props.onPress1()}>
            <Text style={Styles.dialogText1}>
              إزالة الحالة
                        </Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.retreatBtnContainer} onPress={() => props.onPress()}>
            <Text style={Styles.retreatBtnText}>
              تراجع
                        </Text>
          </TouchableOpacity>
        </View>
      </Dialog>

    )
}

export default CartItemRemoveDialog;

const Styles = StyleSheet.create({
    removeDialogview:
    {
        width: ('100%'),
        height: hp('50%'),
        borderRadius: hp('1.5%'),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageOuterView2:
    {
        margin: 20,
        height: 40, width: 40, backgroundColor: '#FE57571A', justifyContent: 'center', alignItems: 'center', borderRadius: 20
    },
    dialogTitle: {
        color: '#222A36',
        fontFamily: Font.APP_ALQABAS_BOLD,
        fontSize: hp('2.2%'),
       

    },
    dialogText: {
        color: '#788490',
        fontFamily: Font.APP_ALMARAI_REGULAR,
        fontSize: hp('1.7%'),
        margin:10
    },
    removeBtnContainer: {
        backgroundColor: '#FE5757',
        width: '90%',
        height: '18%',
        borderRadius: hp('1.5%'),
        borderColor: '#FE5757',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    dialogText1: {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: 'white'
    },

    retreatBtnContainer: {
        backgroundColor: 'transparent',
        width: '90%',
        height: '18%',
        borderRadius: hp('1.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderColor: '#E1E5E9',
        borderWidth: 1
    },
    retreatBtnText:
    {
        fontSize: hp('1.7%'),
        fontFamily: Font.APP_ALMARAI_BOLD,
        color: '#788490'
    },
});

