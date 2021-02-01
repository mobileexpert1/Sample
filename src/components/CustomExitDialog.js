import React, { Component } from 'react'
import { Text, View,Image, TouchableOpacity } from 'react-native'
import { Dialog } from 'react-native-simple-dialogs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Font from '../assets/Font';


 const CustomExitDialog = props => {
    return (
      
        <Dialog
        visible={props.visible}
        dialogStyle={{height:hp('40%'),width:wp('80%'),alignSelf: 'center',borderRadius: 30,justifyContent: 'center',alignItems: 'center',}}
        onTouchOutside={() => props.onTouchOutside()} >
            <Text style={{textAlign:'center',alignSelf:'center',color:'#4ECEA1',fontFamily:Font.APP_ALMARAI_REGULAR,fontSize:hp('3%'),fontWeight:'bold'}}>
                Are you sure, you want to exit ?
                </Text>
                <View style={{flexDirection:'row',width:'100%',height:'50%',alignSelf:'center',marginTop:'15%',justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style={{alignSelf:'center', width:'40%',height:'50%',backgroundColor:'#4ECEA1',borderRadius:30,justifyContent:'center',alignItems:'center',margin:10}} onPress={()=> props.onPressNo()}>
    <Text style={{textAlign:'center',alignSelf:'center',color:'white',fontFamily:Font.APP_ALMARAI_REGULAR,fontSize:hp('3%'),fontWeight:'bold'}}>No</Text>
</TouchableOpacity>
<TouchableOpacity style={{alignSelf:'center', width:'40%',height:'50%',backgroundColor:'#4ECEA1',borderRadius:30,justifyContent:'center',alignItems:'center',margin:10}}onPress={()=> props.onPressYes()}>
    <Text style={{textAlign:'center',alignSelf:'center',color:'white',fontFamily:Font.APP_ALMARAI_REGULAR,fontSize:hp('3%'),fontWeight:'bold'}}>Yes</Text>
</TouchableOpacity>

                </View>


       


    </Dialog>

    )}

    export default CustomExitDialog;
