import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';

const PasswordInputView = props => {
    return (
        <View style={{ borderWidth: 1, borderColor: '#E1E5E9', borderRadius: 5, width: '83.8%', height: '10%', alignSelf: 'center' ,justifyContent:props.isFocused ? null : 'center',marginTop:'6.4%'}}>
            <View style={{height: '50%', justifyContent:'center',alignItems:'center',position: 'absolute', zIndex: 1, marginTop: props.isFocused ? -10: 0, margin: 10, backgroundColor: 'white',paddingLeft:5,paddingRight:5 }}>
            <Text style={{textAlign:'center', color: '#AFB9C3',  fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,}}>{props.placeholder}</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                <Image resizeMode='contain' style={{ right: 0, marginRight: 15, position: 'absolute', height: 15, width: 15, alignSelf: 'center' }} source={props.image}></Image>
                <TextInput style={{color:'#222A36', width: '90%', height: '100%', padding: 5,  fontSize: hp('1.8%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,}} onChangeText={() => props.handleFocus()}></TextInput>
            </View>
        </View>
    )
}

export default PasswordInputView;