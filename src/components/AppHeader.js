import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text, TextInput } from "react-native";
import { isiPhoneX, isiPhone } from "../utils";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import images from "../assets/image/image";
import Fonts from "../assets/Font";
import image from "../assets/image/image";


const AppHeader = props => {
  if (props.type === "left") {
    return (
      <View style={{
        flexDirection: "row",
        paddingTop: isiPhoneX() ? 30 : 0,
        backgroundColor: props.clearColor ? '#FFFFFF' : '#4ECEA1',
        height: isiPhone() ? 70 : 70,
        width: wp('100%'),
        marginTop:isiPhone() ? hp('3%') : 0,
        justifyContent: props.isSearch ? 'center' : null, alignItems: props.isSearch ? 'center' : null
      }}>
        {props.isSearch ?
          <View style={{height:isiPhone() ? 40 : 40, width: '90%', backgroundColor: '#FFFFFF', flexDirection: 'row', borderColor: '#FFFFFF', borderWidth: 1, borderRadius: 40, justifyContent: "center", alignItems: "center", alignSelf: 'center', }}>
            <TouchableOpacity style={{ left: 0, position: 'absolute', marginLeft: 8 }} onPress={() => props.goToSearch()}>
              <Image resizeMode="contain" source={images.greySearch}>
              </Image>
            </TouchableOpacity>
            <TextInput 
            returnKeyLabel='Done'
              returnKeyType='done'
              onSubmitEditing={() => props.goToSearch()}
              value={props.value} onChangeText={(text) => props.onChangeSearchText(text)} keyboardType='numeric' maxLength={6} style={{ fontSize: hp('1.5%'), color: '#788490', alignSelf: 'center', width: '80%', textAlign: 'right', padding: 5, fontFamily: Fonts.APP_ALMARAI_REGULAR }}
              placeholder='اكتب رقم الحالة للبحث'
              maxLength={15}>
            </TextInput>
            <TouchableOpacity style={{ right: 0, position: 'absolute', marginRight: 8 }} onPress={() => props.onPressBack()}>
              <Image resizeMode="contain" source={images.cancel_icon2}>
              </Image>
            </TouchableOpacity>
          </View>
          :
          <TouchableOpacity
            style={[styles.buttonContainer, { paddingLeft: props.signOut ? '8%' : 15 }]}
            onPress={() => props.onPressBack()}
          >
            <View style={{
              backgroundColor: props.clearColor ? '#FFFFFF' : '#40C294',
              height: 35, width: 35, borderRadius: 40,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
              <Image
                resizeMode='contain'
                style={props.forward === "true" ? styles.backButton : props.signOut ? styles.backButton : styles.backButtonnew}
                source={props.forward === "true" ? images.rightnew : props.signOut ? images.signOut : props.isSearch ? props.image : props.clearColor ? images.forwordIcon : images.search}
              />
            </View>
          </TouchableOpacity>
        }

        {props.isSearch ? null :
          <View style={{ marginLeft:props.logoLeft ? 15 :0, flex: props.isSearch ? 0.45 : 0.7, justifyContent: "center", alignItems: props.logoLeft ? null : "center", alignSelf: 'center',}}>
            <Text style={{
              color: props.clearColor ? '#222A36' : 'white',
              fontFamily: Fonts.APP_ALQABAS_BOLD,
              fontSize: hp('2%'),
            }}>{props.headerTitle}</Text>
          </View>
        }
        {props.logoLeft ?
            <Image resizeMode='contain' source={image.headerLogo} style={{right:0,position:'absolute',marginRight:'8%',marginTop:25,height:30,width:40,}}></Image>
            : null }
      </View>
    );
  }
  else if (props.type === "medium") {

    return (
      <View style={styles.header1}>
        <TouchableOpacity
          style={[styles.buttonContainer, { paddingLeft: props.signOut ? '8%' : 15 }]}
          onPress={() => props.onPressBack()}
        >
          <View style={{
            backgroundColor: '#F6F6FB',
            height: 35, width: 35, borderRadius: 40,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
            <Image
              resizeMode='contain'
              style={props.forward === "true" ? styles.backButton : props.signOut ? styles.backButton : styles.backButtonnew}
              source={props.forward === "true" ? images.forwordnew : props.signOut ? images.signOut : images.search}
            />
          </View>

        </TouchableOpacity>
        <View style={{
          flex: 0.8,
          justifyContent: "center",
          alignItems: "center",

          alignSelf: 'center'
        }}>
          <Text style={styles.titleText}>{props.headerTitle}</Text>
        </View>
      </View>
    );

  }
  else {
    return (
      <View
        style={styles.headerRight}>
        {props.isLeft ? (
          <TouchableOpacity
            style={styles.buttonContainerRight}
            onPress={() => props.onPressLeft()}
          >
            <Image
              style={styles.backButton}
              source={props.home ? images.right :
                images.right
              } />
          </TouchableOpacity>
        ) : (
            <View style={styles.emptyView} />
          )}
        <View style={styles.titleContainerRight}>
          <Text style={styles.titleText}>{props.headerTitle}</Text>
        </View>
        {props.isRight ? (
          <TouchableOpacity
            style={styles.buttonContainerRight}
            onPress={() => props.onPressRight()}>
            <Image style={styles.logoutButton} source={images.right} />
          </TouchableOpacity>
        ) : (
            <View style={styles.emptyView} />
          )}
      </View>
    );
  }


};
export default AppHeader;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop: isiPhoneX() ? 30 : 0,
    backgroundColor: '#4ECEA1',
    height: isiPhone() ? 80 : 70,
    width: wp('100%')
  },
  buttonContainer: {
    flex: 0.1,
    paddingLeft: 15,
    justifyContent: "center",


  },
  backButton: {
    alignSelf: 'center',
    width: 13,
    height: 13,
    // backgroundColor:'red',
    // marginLeft:'8%'

  },
  backButtonnew: {
    alignSelf: 'center',
    width: 35,
    height: 35,

  },
  header1: {
    flexDirection: "row",
    paddingTop: isiPhoneX() ? 30 : 0,
    height: isiPhone() ? 80 : 70,
    width: wp('100%'),
    marginTop:isiPhone() ? hp('3%') : 0,

  },

  logoutButton: {
    // height: 30,
    // width: 30
  },
  titleContainer: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",

    alignSelf: 'center'
  },
  titleContainerRight: {
    flex: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainerRight: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",

  },
  headerRight: {
    backgroundColor: '#4ECEA1',
    flexDirection: "row",
    paddingTop: isiPhoneX() ? 30 : 0,
    height: isiPhone() ? 80 : 70,
    marginTop:isiPhone() ? hp('3%') : 0,
    
  },
  titleText: {
    color: 'white',
    fontFamily: Fonts.APP_ALQABAS_BOLD,
    fontSize: hp('2%')
  },
  emptyView: {
    flex: 0.2
  }
});
