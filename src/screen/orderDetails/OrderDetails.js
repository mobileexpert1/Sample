import React, { Component } from 'react'
import { Text, View, BackHandler } from 'react-native'
import AppHeader from '../../components/AppHeader'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Styles from './Styles';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorageKeys from '../../utils/AsyncStorageKeys';
import ActivityLoader from '../../components/ActivityLoader';

export default class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: [],
            order: false,
        }
    }

    componentDidMount() {
        this.setState({ order: this.props.navigation.state.params.order ? true : false })
        AsyncStorage.multiGet([AsyncStorageKeys.user_id, AsyncStorageKeys.token])
            .then(response => {
                let formData = new FormData();
                formData.append("user_id", response[0][1]);
                formData.append("token", response[1][1]);
                formData.append('order_id', this.props.navigation.state.params.orderId)
                this.props._getOrderDetails(formData)
            })
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    validateOrderDetailsResponse = () => {
        if (this.props.getOrderDetailsResponse.response !== null) {
            if (this.props.getOrderDetailsResponse.response.status === 1) {
                this.setState({ orderDetails: this.props.getOrderDetailsResponse.response.order }, () =>
                // alert(JSON.stringify(this.state.orderDetails)),
                    this.props._resetOrderDetails())
            }
        }
    }

    handleBackPress = () => {
        if (this.state.order) {
            this.props.navigation.navigate('ArchivePayment');
            return true;
        }
        else {
            this.props.navigation.navigate('Group')
        }
        return true;
    }

    amountDetails(item) {
        // alert(JSON.stringify(item))
        return (
            <View style={Styles.caseDetails}>
                <View style={Styles.caseType}>
                    <Text style={Styles.caseText}>حالة رقم,  {item.case_code}</Text>
                    <Text style={Styles.typeText}>نوع السلة : {item.basket_type}</Text>
                </View>
                <Text style={Styles.caseAmount}>
                    {item.amount}
                </Text>
            </View>
        )
    }
    render() {
        return (
            <View style={Styles.container}>
                {this.validateOrderDetailsResponse()}
                {this.state.orderDetails.length === 0 ? <ActivityLoader /> : null}
                <AppHeader value={this.state.itemToSearch}
                    clearColor
                    headerTitle='فاتورة'
                    type="left"
                    logoLeft
                    onPressBack={() => this.handleBackPress()}
                />
                <ScrollView>
                    <View style={Styles.invoice}>
                        <View style={Styles.invoiceView}>
                            <Text style={Styles.invoiceText}>رقم الفاتورة</Text>
                            <Text style={Styles.invoice_no}>100000954</Text>
                        </View>
                        <View style={Styles.dateTimeView}>
                            <Text style={Styles.time}>{this.state.orderDetails.in_time}</Text>
                            <Text style={Styles.date}>{this.state.orderDetails.in_date}</Text>
                        </View>
                    </View>
                    <View style={Styles.creditDetails}>
                        <Text style={Styles.creditText}>{this.state.orderDetails.payment_type}</Text>
                        <View style={Styles.operation}>
                            <Text style={Styles.operationText}>رقم عملية :</Text>
                            <Text style={Styles.operation_no}>{this.state.orderDetails.transaction_id}</Text>
                        </View>
                    </View>
                    <View style={Styles.personDetails}>
                        <View style={Styles.nameView}>
                            <Text style={Styles.name}>{this.state.orderDetails.user_name}</Text>
                            <Text style={Styles.address}>السعودية, جدة</Text>
                        </View>
                        <View style={Styles.details}>
                            <View style={Styles.invoiceView1}>
                                <Text style={Styles.email}>البريد الإلكتروني</Text>
                                <Text style={Styles.email_id}>{this.state.orderDetails.user_email}</Text>
                            </View>
                            <View style={Styles.dateTimeView1}>
                                <Text style={Styles.phone}>الجوال</Text>
                                <Text style={Styles.phone_no}>{this.state.orderDetails.user_mobile}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.detailsView}>
                        <Text style={Styles.detailsText}>التفاصيل</Text>
                        <Text style={Styles.amountText}>المبلغ</Text>
                    </View>
                    <View style={Styles.flatlist}>
                        <FlatList
                            data={this.state.orderDetails.detials}
                            renderItem={({ item }) => this.amountDetails(item)}/>
                    </View>
                    <View style={Styles.totalAmount}>
                        <Text style={Styles.totalText}>المبلغ الإجمالي</Text>
                        <View style={Styles.priceView}>
                            <Text style={Styles.totalText1}>{this.state.orderDetails.amount}  ريال سعودي ( خمسمائة ريال لا غير )</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
