/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SearchScreen: undefined;
  HomeScreen: undefined;
  DetailsScreen : undefined;
  Products : undefined;
  CoupanScreen : undefined;
  Categories : undefined;
  AllProducts : undefined;
  LoginScreen : undefined;
  RegisterScreen :undefined;
  MyCartScreen:undefined;
  BottamNav : undefined;
  All_Orders:undefined;
  CheckOutScreen:undefined;
  ChangeAddress:undefined;
  TrackOrder:undefined;
  Account:undefined;
  Map_Direction:undefined;
  Welcome:undefined;
  Profile:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

  
