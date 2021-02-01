import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';
import image from '../assets/image/image';

const CustomInfoView = props => {
    return (
        <TouchableOpacity style={Styles.nameView} onPress={()=>props.onPress()}>
        <View style={Styles.crView}>
            <TouchableOpacity style={Styles.userView} >
                <Image style={Styles.userImage} source={props.source}></Image>
            </TouchableOpacity>
            <View style={Styles.viewName}>
                <View style={Styles.textName}><Text style={Styles.textTNamenew}>{props.text}</Text></View>
            </View>
        </View>
        <TouchableOpacity
            style={Styles.leftarrowView} >
            <Image resizeMode='contain'
                source={image.leftArrow}>
            </Image>
        </TouchableOpacity>
    </TouchableOpacity>
    )
}

export default CustomInfoView;
const Styles = StyleSheet.create({
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
    textName: {
        height: '56%',
        color: 'black',
        fontFamily: Font.APP_REGULAR_BOLD,
        fontSize: hp('1.7%')
    },
    textTNamenew: {
        color: 'black',
        marginTop:5,
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.6%'),
        textAlign:'left'
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






});

