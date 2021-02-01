import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableOpacity, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';
import image from '../assets/image/image';
import Strings from '../utils/Strings';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const Tutorial1 = props => {
    return (
        <View style={{
            height: hp('58%'), width: wp('100%'),
            position: 'relative',
            backgroundColor: 'transparent',
        }}>
            <Image source={props.image} resizeMode='contain' style={style.imageStyle}></Image>
            <Text style={{ fontSize: hp('2.6%'), color: '#222A36', fontFamily: Font.APP_ALQABAS_BOLD, padding: 10, marginTop: hp('2%'), textAlign: 'center' }}>عنوان رئيسي هنا</Text>
            <Text numberOfLines={2}
                multiline={true}
                style={{
                    justifyContent: 'space-between', fontSize: hp('1.8%'),
                    color: '#788490', fontFamily: Font.APP_ALMARAI_REGULAR, padding: 10,
                    paddingLeft: 25, paddingRight: 25, textAlign: 'center', lineHeight: 23,
                }}>{Strings.mainText}
            </Text>
        </View>
    );
}

export default Tutorial1;
const style = StyleSheet.create({
    container: {
        height: '90%',
        width: '100%',
        position: 'relative',
        backgroundColor: 'transparent',
    },
    imageStyle:
    {
        height: 80,
        width: 80,
        marginTop: '25%',
        alignSelf: 'center',
    },
    canvas: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    skiptouch: {
        position: 'absolute',
        left: 0,
        width: '30%',
        height: 40
    },

    nexttouch: {
        position: 'absolute',
        right: 5,
        width: '30%',
        height: 40
    },

    statusBar: {
        height: STATUSBAR_HEIGHT,
    },

    bottomView: {
        flexDirection: 'row',
        width: '100%',
        height: 30,
        position: 'absolute',
        bottom: 6
    },

});

