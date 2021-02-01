import React from 'react';
import { Text, View, TouchableOpacity, FlatList, SafeAreaView, Image, } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ShowCase from '../screen/showCase/';
import image from '../assets/image/image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import GoodBasket from '../screen/goodBasket';
import InformationView from '../screen/info';
import Profile from '../screen/profile';
import TrackProduct from '../screen/trackProduct';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../utils/AsyncStorageKeys';
import Font from '../assets/Font';
import CartCount from '../components/CartCount';

const Shopping = createStackNavigator({
  ShowCase: GoodBasket,
});

Shopping.navigationOptions = ({ screenProps }) => ({
  tabBarLabel: 'ShowCase',
  tabBarOptions: {
    style: { height: hp('10%'), width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderTopColor: '#F6F6FB' },
    showLabel: false,
    activeBackgroundColor: '#F6F6FB',
    inactiveBackgroundColor: '#F6F6FB',
  },

  tabBarIcon: ({ focused }) => (
    <CartCount focused={focused} />
  ),
})

const Group = createStackNavigator({
  ShowCase: Profile,
});
Group.navigationOptions = {
  tabBarLabel: 'ShowCase',
  tabBarOptions: {
    style: { height: hp('10%'), width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderTopColor: '#F6F6FB' },
    showLabel: false,
    activeBackgroundColor: '#F6F6FB',
    inactiveBackgroundColor: '#F6F6FB',
  },
  tabBarIcon: ({ focused }) => (
    <View>
      <Image resizeMode='contain'
        source={focused ? image.userOn : image.group}
      />
    </View>
  ),
};

const FileText = createStackNavigator({
  ShowCase: ShowCase,
});


FileText.navigationOptions = {
  tabBarLabel: 'ShowCase',
  tabBarOptions: {
    style: { height: hp('10%'), width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderTopColor: '#F6F6FB' },
    showLabel: false,
    activeBackgroundColor: '#F6F6FB',
    inactiveBackgroundColor: '#F6F6FB',
  },
  tabBarIcon: ({ focused }) => (
    <View>
      <Image resizeMode='contain'
        source={focused ? image.fileText : image.fileText_off}
      />
    </View>
  ),
};

const InfoTrack = createStackNavigator({
  ShowCase: InformationView,
});
InfoTrack.navigationOptions = {
  tabBarOptions: {
    style: { height: hp('10%'), width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderTopColor: '#F6F6FB' },
    showLabel: false,
    activeBackgroundColor: '#F6F6FB',
    inactiveBackgroundColor: '#F6F6FB',
  },
  tabBarIcon: ({ focused }) => (
    <View>
      <Image resizeMode='contain'
        source={focused ? image.infoOn : image.info}
      />
    </View>
  ),
};

const RouteTrack = createStackNavigator({
  ShowCase: TrackProduct,
});
RouteTrack.navigationOptions = {
  tabBarLabel: 'ShowCase',
  tabBarOptions: {
    style: { height: hp('10%'), width: wp('100%'), justifyContent: 'center', alignItems: 'center', borderTopColor: '#F6F6FB' },
    showLabel: false,
    activeBackgroundColor: '#F6F6FB',
    inactiveBackgroundColor: '#F6F6FB',
  },
  tabBarIcon: ({ focused }) => (
    <View>
      <Image resizeMode='contain'
        source={focused ? image.routeOn : image.route}
      />
    </View>
  ),
};

export default createBottomTabNavigator(
  {
    Group,
    Shopping,
    FileText,
    RouteTrack,
    InfoTrack,
  },
  {
    initialRouteName: 'FileText',
  },
)
