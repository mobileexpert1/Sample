import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity,BackHandler } from 'react-native'
import AppHeader from '../../components/AppHeader';
import Styles from '../confirmPurchase/Styles';
import images from '../../assets/image/image'
import Font from '../../assets/Font';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ConfirmPurchase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:[]
        }
    }

    gotoNext=()=>{
        if(this.state.details.status === 0){
            this.props.navigation.replace('MyCases')

        }
        else{
            this.props.navigation.navigate('OrderDetails',{orderId:this.state.details.order_id})
        }

    }
    componentDidMount=()=>{
    this.setState({ details: this.props.navigation.state.params.details })
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.props.navigation.navigate('ShowCase')
        return true;
    }

    render() {
        return (
            <View style={Styles.container}>
                <AppHeader
                    headerTitle='تمت العملية بنجاح'
                    type="left"
                    clearColor
                    onPressBack={() => this.props.navigation.navigate('ShowCase')} />

                <View style={Styles.purchaseStatus}>
                    <Image style={Styles.statusImage} source={images.circle_outlined}></Image>
                    <Text style={{ color:this.state.details.status === 0 ? 'red':'#4ECEA1',
        fontFamily: Font.APP_ALMARAI_BOLD,
        fontSize: hp('1.8%'),
        marginLeft: wp('3%'),}}>{this.state.details.status === 0 ? this.state.details.message : 'شكرا لك ' +this.state.details.user_first_name +'، عملية الشراء كانت ناجحة'}</Text>
                </View>
              {this.state.details.status === 0 ? null :  
              <View style={Styles.creditDetails}>
                    <Text style={Styles.creditText}>{this.state.details.payment_type}</Text>
                    <View style={Styles.operation}>
                        <Text style={Styles.operationText}>رقم عملية :</Text>
                        <Text style={Styles.operation_no}>{this.state.details.transaction_id}</Text>
                    </View>
                </View>
              } 
              
               {this.state.details.status === 0 ? null : 
                <View style={Styles.totalAmount}>
                    <Text style={Styles.totalText}>المبلغ الإجمالي</Text>
                    <View style={Styles.priceView}>
                        <Text style={Styles.totalText1}>{this.state.details.amount} ريال سعودي ( خمسمائة ريال لا غير )</Text>
                    </View>
                </View>
              }


                <TouchableOpacity style={{ height: hp('8%'),
        width: wp('90%'),
        marginLeft: wp('5%'),
        marginRight: wp('5%'),
        backgroundColor: this.state.details.status === 0 ? 'red':'#4ECEA1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: hp('6%'),}} onPress={()=> this.gotoNext()}>
                    <Text style={Styles.buttonText}>مشاهدة الفاتورة</Text>
                </TouchableOpacity>

            </View>
        )
    }
}



// {"status":1,"order_id":78,
// "user_first_name":"Anoooop",
// "payment_type":"بطاقة إئتمانية /مدى",
// "transaction_id":"8ac7a4a17085f979017086108d682ef9",
// "amount":"500.00","message":"تم الدفع بنجاح"}