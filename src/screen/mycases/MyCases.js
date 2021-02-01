import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, BackHandler } from 'react-native';
import Styles from './styles';
import AppHeader from '../../components/AppHeader';
import image from '../../assets/image/image';
import { IndicatorViewPager, PagerTitleIndicator } from 'react-native-best-viewpager';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import styles from './styles';
import Strings from '../../utils/Strings';

export default class MyCases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerList: ['حالات الشهر الحالي', 'الحالات التي يمكن التبرع بها', 'حالات غير متاحة'],
      list1: [], list2: [], list3: [],
      selectedId: '',
      loading: false
    };
  }

  validateCasesResponse = () => {
    if (this.props.getMyCasesResponse.response !== null) {
      if (this.props.getMyCasesResponse.response.data !== null) {
        // alert(JSON.stringify(this.props.getMyCasesResponse.response.data.cases2))
        this.setState({
          list1: this.props.getMyCasesResponse.response.data.cases1, loading: false,
          list2: this.props.getMyCasesResponse.response.data.cases2,
          list3: this.props.getMyCasesResponse.response.data.cases3
        }, () =>
            this.props._resetCases())
      }
    }
  }

  _renderDotIndicator() {
    return <PagerTitleIndicator
      titles={this.state.headerList}
      renderTitle={(index, title, isSelected) => this.renderTitles(index, title, isSelected)}
      style={Styles.buttonView}
      selectedBorderStyle={{ borderColor: 'transparent', borderWidth: 1, backgroundColor: 'transparent' }}
      pageCount={3}
    />;
  }

  handleBackPress = () => {
    Strings.fromMycases = 'false';
    this.props.navigation.navigate('Group')
    return true;
  }

  componentDidMount = () => {
    AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token])
      .then(response => {
        let formData = new FormData();
        formData.append("user_id", response[0][1]);
        formData.append("token", response[1][1]);
        this.props._getMyCases(formData)
      })
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  renderListSection() {
    if ((this.state.selectedId === 0 && this.state.list1.length === 0) || (this.state.selectedId === 1 && this.state.list2.length === 0) || this.state.selectedId === 2 && this.state.list3.length === 0) {
      return <View style={Styles.errorView}>
        <Image source={image.low} resizeMode='contain' style={Styles.imageStyle}></Image>
        <Text style={Styles.errorText}>عذرا , لا يوجد نتائج بحث</Text>
        <Text style={Styles.errorText2}>ادخل رقم الطلب في الأعلى لمعرفة النتائج</Text>
      </View>
    } else {
      return <View>
        <View style={Styles.topLineStyle}></View>
       <FlatList
          extraData={this.state}
          data={this.state.selectedId === 0 ? this.state.list1 : this.state.selectedId === 1 ? this.state.list2 : this.state.selectedId === 2 ? this.state.list3 : this.state.list1}
          renderItem={({ item }) => this.renderView(item)}
          keyExtractor={(item, index) => index.toString()}/> 
      </View>
    }
  }

  goToNext = (id) => {
    Strings.idToSearch = id;
    Strings.fromMycases='true'
    this.props.navigation.navigate('RouteTrack')
  }

  renderView = (item) => {
    // alert(JSON.stringify(item))
    return <View style={styles.flatListOuterView}>
      {/* First */}
      <View style={Styles.flatListInnerView}>
        <View style={Styles.firstFlatView}>
          <Image style={Styles.userIconImageStyle} source={image.userIcon}></Image>
          <View style={Styles.textViewStyle}>
            <Text style={Styles.casenUmberText}>
              حالة رقم
              {item.case_code} </Text>
            <Text style={Styles.familyNumberText}>
              {item.family_members}  أفراد في الأسرة </Text>
          </View>
        </View>
        <View style={Styles.dateViewStyle}>
          <Text style={Styles.currentPayDateText}>{this.state.selectedId === 0 ?'تاريخ الدفع الحالي':'تاريخ الدفع السابق'}</Text>
          <Text style={Styles.dateTxt}>{item.in_date}</Text>
        </View>
      </View>
      {/* Second */}
      <View style={Styles.flatListInnerView}>
        <View style={Styles.firstFlatView}>
          <Image style={Styles.userIconImageStyle} source={image.shoppingIcon}></Image>
          <View style={Styles.ratingTextView}>
            <Text style={Styles.ratingText}> تصنيف </Text>
            <Text style={Styles.midBasketText}>{item.basket_type}</Text>
          </View>
        </View>
        <View style={Styles.addressview}>
          <Text style={Styles.grandText}>جدة</Text>
          <Text style={Styles.easternText}>{item.city + " " + item.district}</Text>
        </View>
      </View>
      {this.state.selectedId != '1' && this.state.selectedId != '2' ?
        <TouchableOpacity style={Styles.bottomView} onPress={() => this.goToNext(item.case_code)}>
          <Image source={image.poi}></Image>
          <Text style={Styles.trackingText}>تتبع الحالة</Text>
        </TouchableOpacity>
        : null}
      {this.state.selectedId != '0' && this.state.selectedId != '2' ?
        <View style={Styles.bottomView}>
          <TouchableOpacity style={Styles.bottomview2} onPress={() => this.props.navigation.navigate('StatusDetails', { Items: item, MyCases: true })}>
            <Image source={image.visible_outlined}></Image>
            <Text style={Styles.trackingText}>مشاهدة الحالة</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.bottomview2} onPress={() => this.addtocart(item.case_id)}>
            <Image source={image.trackShoppingIcon}></Image>
            <Text style={Styles.mainText}>اضف للسلة</Text>
          </TouchableOpacity>
        </View>
        : null}
      {this.state.selectedId != '0' && this.state.selectedId != '1' ?
        <View style={Styles.topLineStyle}></View>
        : null}
    </View>
  }

  addtocart=(id)=>
  {
    AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token])
    .then(response => {
        let formData = new FormData();
        formData.append("user_id", response[0][1]);
        formData.append("token", response[1][1]);
        formData.append("case_id", id);
        this.props._addToCart(formData)
    })
  }

  validateCartResponse() {
    if (this.props.getAddToCartResponse.response !== null) {
        if (this.props.getAddToCartResponse.response.status === 1) {
            this.props.navigation.navigate('Shopping')
        }
        else {
            Toast.show(this.props.getAddToCartResponse.response.message, 1000);
            this.props._resetCart()
        }
    }
}

  renderTitles = (index, title, isSelected) => {
    return (
      <TouchableOpacity style={this.state.selectedId === index ? Styles.colorTrue : Styles.colorFalse} onPress={() => this.requestList(index)}>
        <Text style={this.state.selectedId === index ? Styles.textTrue : Styles.textFalse}>{title}</Text>
      </TouchableOpacity>
    );
  }

  requestList = (id) => {
    this.setState({ selectedId: id, loading: true })
  }

  render() {
    return (
      <View style={Styles.container}>
        <AppHeader value={this.state.itemToSearch}
          clearColor
          headerTitle='الحالات الخاصة بي'
          type="left"
          onPressBack={() => this.props.navigation.navigate('Group')}
        />
        {this.validateCasesResponse()}
        {this.validateCartResponse()}
        <IndicatorViewPager
          style={styles.indicatorView}
          autoPlayEnable={false}
          pagerStyle={{marginTop: hp('8%'),}}
          indicator={this._renderDotIndicator()}
          horizontalScroll={false}
          onPageSelected={(res) => this.requestList(res.position)}>
          {this.renderListSection()}
        </IndicatorViewPager>
      </View>
    );
  }
}