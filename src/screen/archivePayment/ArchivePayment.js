import React, { Component } from 'react'
import { Text, View, FlatList, Image, BackHandler, TouchableOpacity } from 'react-native'
import AppHeader from '../../components/AppHeader';
import Styles from '../archivePayment/Styles';
import images from '../../assets/image/image'
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import AsyncStorage from '@react-native-community/async-storage';
import ActivityLoader from '../../components/ActivityLoader';
import { SkypeIndicator } from 'react-native-indicators';

export default class ArchivePayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paymentHistory: [],
            maxPage: 0,
            page: 0,
            fetchingStatus: true,
            paymentdata: []
        }
    }

   
    componentDidMount = () => {
        AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token])
            .then(response => {
                let form_data = new FormData();
                form_data.append("user_id", response[0][1]);
                form_data.append("token", response[1][1]);
                let data ={id:this.state.page,form_data}
                this.props._getPaymentHistory(data)
            })
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    reloadList = (id) => {
        if (this.state.page < this.state.maxPage) {
                 AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token])
                    .then((response) => {
                        let form_data = new FormData()
                        form_data.append("user_id", response[0][1])
                        form_data.append("token", response[1][1])
                        form_data.append("id", this.state.page);
            let data ={id:this.state.page,form_data}
                        this.props._getPaymentHistory(data)
                    })
            this.props._resetPaymentHistory()
        }
        else {
            this.setState({ fetchingStatus: false }, () =>
                this.props._resetPaymentHistory()
            )
        }
    }

    handleBackPress = () => {
        this.props.navigation.navigate('Group')
        return true;
    }

    validatePaymentHistoryResponse = () => {
        if (this.props.getPaymentHistoryResponse.response !== null) {
            if (this.props.getPaymentHistoryResponse.response.status === 1) {
                this.props.getPaymentHistoryResponse.response.orders.map((item) => {
                    this.state.paymentdata.push(item);
                })
                this.props._resetPaymentHistory()
                this.setState({ paymentHistory: this.state.paymentdata, maxPage: this.props.getPaymentHistoryResponse.response.max_page }, () =>                  
            //   alert(JSON.stringify(this.state.paymentHistory)),
                this.props._resetPaymentHistory())
            }
        }
    }

    paymentList(item) {
        // alert(this.state.fetchingStatus)
        return (
            <View>
                <View style={Styles.dateView}>
                    <Text style={Styles.date}>{item.in_date}</Text>
                    <Text style={Styles.time}>{item.in_time}</Text>
                </View>
                <View style={Styles.paymentView}>
                    <View style={Styles.invoiceView}>
                        <Text style={Styles.bill1}>رقم الفاتورة</Text>
                        <Text style={Styles.bill_no1}>100000954</Text>
                        <Text>{item.order_id}</Text>
                    </View>
                    <View style={Styles.amountView}>
                        <Text style={Styles.bill2}>المبلغ</Text>
                        <Text style={Styles.bill_no2}>{item.amount}</Text>
                    </View>
                </View>
                <View style={Styles.creditView}>
                    <Text style={Styles.credit}>{item.payment_type}</Text>
                    <View style={Styles.operationView}>
                        <Text style={Styles.operation}>رقم عملية</Text>
                        <Text style={Styles.operationNumber}>{item.transaction_id}</Text>
                    </View>
                </View>
                <TouchableOpacity style={Styles.preview} onPress={() =>this.props.navigation.replace('OrderDetails', { orderId: item.order_id, order: true })}>
                    <Image source={images.greyEye}></Image>
                    <Text style={Styles.previewText}>مشاهدة</Text>
                </TouchableOpacity>
            </View>
        )
    }

    BottomView = () => {
        return (
            <View>
                {this.state.fetchingStatus ?
                    <SkypeIndicator color={'#4ECEA1'} style={{ alignSelf: 'center', }} size={50} />
                    : null}
            </View>
        )
    }

    render() {
        return (
            <View style={Styles.container} >
                {this.validatePaymentHistoryResponse()}
                <AppHeader
                    headerTitle='أرشيف المدفوعات'
                    type="left"
                    clearColor
                    onPressBack={() => this.props.navigation.navigate('Group')}/>
               
                <FlatList
                    extraData={this.state}
                    onEndReached={({ distanceFromEnd }) => {
                        this.state.fetchingStatus ? this.reloadList(this.state.selectedId) : null
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.paymentHistory}
                    ListFooterComponent={this.BottomView}
                    renderItem={({ item }) => this.paymentList(item)}
                />

            </View>
        )
    }
}