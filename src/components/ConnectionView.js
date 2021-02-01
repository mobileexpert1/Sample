import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import image from '../assets/image/image';
import Font from '../assets/Font';

export default class ConnectionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{ width: '100%', height: '90%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', }}>
                <Image source={image.low1} resizeMode='contain' style={{
                    height: 80,
                    width: 80,
                    alignSelf: 'center',
                }}></Image>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: Font.APP_ALMARAI_REGULAR,
                    fontSize: hp('1.9%'),
                    margin: 10,
                    color: '#222A36'
                }}>لا يوجد إنترنت</Text>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: Font.APP_ALMARAI_REGULAR,
                    fontSize: hp('1.8%'),
                    color: '#788490'
                }}>تحقق من الاتصال ثم أعد المحاولة</Text>

                <TouchableOpacity >
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: Font.APP_ALMARAI_REGULAR,
                        fontSize: hp('1.9%'),
                        margin: 10,
                        color: 'red'
                    }}> تحديث</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
