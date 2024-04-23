/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Products from "../screens/Products";
import CouponScreen from "../screens/CoupanScreen";
import Categories from "../screens/Categories";
import AllProducts from "../screens/AllProducts";
import LoginScreen from "../screens/Onboarding/Login";
import SignupScreen from "../screens/Onboarding/Signup";
import MyCartScreen from "../screens/AfterPurchase/MyCartScreen";
import BottomNav from "../screens/BottamNav/BottamNav";
import All_Orders from "../screens/All_Orders";
import CheckOutScreen from "../screens/AfterPurchase/CheckOutScreen";
import ChangeAddress from "../screens/AfterPurchase/ChnageAddress";
import TrackOrder from "../screens/TrackOrder";
import Account from "../screens/AccountSection/Account";
import Map_Direction from "../screens/Map_Direction/Map_Direction";
import Welcome from "../screens/Onboarding/Welcome";
import Profile from "../screens/AccountSection/Profile";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="RegisterScreen" component={SignupScreen}/>
      <Stack.Screen name='BottamNav' component={BottomNav} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='CoupanScreen' component={CouponScreen} />
      <Stack.Screen name="Categories" component={Categories}/>
      <Stack.Screen name="AllProducts" component={AllProducts}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
      <Stack.Screen name="MyCartScreen" component={MyCartScreen}/>
      <Stack.Screen name="All_Orders" component={All_Orders}/>
      <Stack.Screen name="CheckOutScreen" component={CheckOutScreen}/>
      <Stack.Screen name="ChangeAddress" component={ChangeAddress}/>
      <Stack.Screen name="TrackOrder" component={TrackOrder}/>
      <Stack.Screen name="Account" component={Account}/>
      <Stack.Screen name="Map_Direction" component={Map_Direction}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}
