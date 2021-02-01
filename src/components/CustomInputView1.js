import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';

const CustomInputView1 = props => {
    return (
        <View>
            <View
                // style={[styles.input, props.styles]}
                style={[style.outerview, { justifyContent: props.isFocused ? null : 'center' }, { borderColor: props.error ? '#F8B400' : '#E1E5E9', margin: props.error ? 12 : 1 }]}>
                <View style={[style.placeholderView, { marginTop: props.isFocused ? -15 : 0, }]}>
                    <Text style={[style.placeholderText, { color: props.error ? '#F8B400' : '#AFB9C3' }]}>{props.placeholder}</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                    
                    <TextInput onBlur={()=>props.onBlur()} onFocus={()=> props.onFocus() } maxLength={props.maxLength}  secureTextEntry={props.secureTextEntry}keyboardType={props.keyboardType} 
                     style={{ color: '#222A36', width: '100%', fontFamily: Font.APP_ALMARAI_REGULAR,height: '100%',  fontSize: hp('1.9%') }} 
                    onChangeText={(text) => props.handleFocus(text)} value={props.value}></TextInput>
                </View>
            </View>
            {props.error ?
                <Text style={{  fontFamily: Font.APP_ALMARAI_REGULAR, alignSelf: 'center', width: wp('85%'), color: '#F8B400', fontSize: hp('1.5%') }}>{props.errorMessage}</Text>
                : null
            }
        </View>
    )
}

export default CustomInputView1;

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
        paddingLeft: 5,
        paddingRight: 5
    },

    placeholderText:
    {
        textAlign: 'center',
        color: '#AFB9C3',
        fontSize: hp('1.9%'),
        fontFamily: Font.APP_ALMARAI_REGULAR,

    },





});

