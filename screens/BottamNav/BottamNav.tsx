import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MyCartScreen from "../AfterPurchase/MyCartScreen";
import HomeScreen from "../HomeScreen";
import Colors from "../../constants/Colors";
import AllProducts from "../AllProducts";
import SettingScreen from "../SettingScreen";
import Spacing from "../../constants/Spacing";
import All_Orders from "../All_Orders";
import Account from "../AccountSection/Account";

const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => {
  const nav = useNavigation();
  const color = Colors.primary;
  const tabBarStyle = {
    ShadowRoot: {
      shadowColor: "#7F5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{

        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: Colors.white,
          borderRadius: Spacing.borderRadius.xxl,
          height: 70,
          ...tabBarStyle.ShadowRoot,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Adjust the font size of the label
          marginBottom: 8, // Adjust the bottom margin of the label
        },
        tabBarIconStyle: {
          marginTop: 3 // Adjust the bottom margin of the icon
        },
        tabBarActiveTintColor: Colors.primary, // Set the active icon color
        // tabBarInactiveTintColor: Colors.textGray, // Set the inactive icon color
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="All Pets"
        component={AllProducts}
        options={{
          tabBarLabel: "All pet's",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="paw" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="All Orders"
        component={All_Orders}
        options={{
          tabBarLabel: "All orders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="package" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
