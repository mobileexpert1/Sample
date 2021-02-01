import { Dimensions, Platform } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
const iPhoneXHeight = 812;
export default {
  COUNT :0
}
export function isiPhoneX() {
  if (
    Platform.OS === "ios" &&
    Dimensions.get("window").height === iPhoneXHeight
  ) {
    return true;
  }
  return false;
}

export function isiPhone() {
  if (Platform.OS === "ios") {
    return true;
  }
  return false;
}

export function deviceHeight() {
  return Dimensions.get("window").height;
}

export function deviceWidth() {
  return Dimensions.get("window").width;
}

export function logoutFromApp(props) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })]
  });
  AsyncStorage.clear();
  props.navigation.dispatch(resetAction);
}
