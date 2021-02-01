import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator,  } from 'react-navigation-stack';
import Splash from '../screen/splash';
import Login from '../screen/login';
import Signup from '../screen/signup';
import ForgotPassword from '../screen/forgotPassword';
import Tutorial from '../screen/tutorials';
import PasswordRest from '../screen/passwordRest';
import StatusDetails from '../screen/statusDetails';
import MainTabNavigator from './MainTabNavigator';
import MobileConfirmation from "../screen/mobileConfirmation";
import GoodBasket from "../screen/goodBasket/GoodBasket";
import Contact from "../screen/contactus";
import AboutPlatform from "../screen/aboutPlatform/AboutPlatform";
import CustomWebView from "../screen/statusDetails/CustomWebView";
import MyCases from "../screen/mycases";
import ConfirmPurchase from "../screen/confirmPurchase/ConfirmPurchase";
import ArchivePayment from "../screen/archivePayment";
import OrderDetails from "../screen/orderDetails";
import AccountStatement from "../screen/accountStatement";
import ArabicPhase2 from "../screen/Arabicphase2";

const AppNavigator = createStackNavigator({
  Tutorial:{screen:Tutorial},
  Login:{screen:Login},
  Signup:{screen:Signup},
  ForgotPassword:{screen:ForgotPassword},
  PasswordRest:{screen:PasswordRest},
  StatusDetails:{screen:StatusDetails},
  MobileConfirmation:{screen:MobileConfirmation},
  GoodBasket:{screen:GoodBasket},
  AboutPlatform:{screen:AboutPlatform},
  Contact:{screen:Contact},
  CustomWebView:{screen:CustomWebView},
  MyCases:{screen:MyCases},
  ConfirmPurchase:{screen:ConfirmPurchase},
  ArchivePayment:{screen:ArchivePayment},
  OrderDetails:{screen:OrderDetails},
  AccountStatement:{screen:AccountStatement},
  ArabicPhase2:{screen:ArabicPhase2}
},
{ 
  headerMode: 'none',
}
);

const AppNavigatorForSplash = createStackNavigator({
  Splash:{screen:Splash},
},
{ 
  headerMode: 'none',
  initialRouteName: 'Splash', 
}
);

export default createAppContainer(createSwitchNavigator({
  Splash:AppNavigatorForSplash,
  Auth:AppNavigator,
  Main: MainTabNavigator,
}));