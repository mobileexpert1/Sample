import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';

const CustomInputView = props => {
    return (
        <View>
            <View
                    style={[{borderWidth: 1,
                    borderColor: '#E1E5E9',
                    borderRadius: 5,
                    width: props.pay ? wp('73%'): wp('85%'),
                    height: props.feedBack ? hp('10%'): hp('7%'),
                    alignSelf: 'center',}, { justifyContent: props.isFocused ? null : 'center' },
                    { borderColor: props.error ? '#F8B400' : '#E1E5E9', margin: props.error ? 16 : 18, }]}>
                <View style={[style.placeholderView, { marginTop: props.isFocused ? -15 : 0, }]}>
                    <Text style={[style.placeholderText, { color: props.error ? '#F8B400' : '#AFB9C3' }]}>{props.placeholder}</Text>
                </View>
                <View style={{backgroundColor:'transparent',position:'absolute',zIndex:1, flexDirection: 'row', width: '100%', height: '100%' }}>
                    <Image resizeMode='contain' style={{ right: 0, marginRight: 15, position: 'absolute', height: 15, width: 15, alignSelf: 'center' }} source={props.image}></Image>
                    <TextInput  multiline={props.multiline} onFocus={()=> props.onFocus() }  maxLength={props.maxLength} secureTextEntry={props.secureTextEntry}keyboardType={props.keyboardType} 
                     style={{ color: '#222A36', width:props.register?'100%':  props.pay ? '87%' :'90%', 
                     fontFamily: Font.APP_ALMARAI_REGULAR,height: '100%',  fontSize: hp('1.9%') ,padding:props.register ? 10:0,}} 
                    onChangeText={(text) => props.handleFocus(text)} value={props.value}></TextInput>
                </View>
            </View>
            {props.error ?
                <Text style={{ fontFamily: Font.APP_ALMARAI_REGULAR, alignSelf: 'center', width:props.pay ? wp('80%'): wp('85%'), color: '#F8B400', fontSize: hp('1.5%'),paddingRight:15 ,textAlign:'left'}}>{props.errorMessage}</Text>
                : null}
        </View>
    )
}

export default CustomInputView;

const style = StyleSheet.create({
    outerview:
    {
        borderWidth: 1,
        borderColor: '#E1E5E9',
        borderRadius: 5,
        width: wp('85%'),
        height: hp('7%'),
        alignSelf: 'center',
    },
    placeholderView:
    {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        margin: 10,
        backgroundColor: 'white',
        paddingRight: 5
    },

    placeholderText:
    {
        textAlign: 'left',
        color: '#AFB9C3',
        fontSize: hp('1.9%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,
        paddingLeft:3,paddingRight:5,

    },





});

