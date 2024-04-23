import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  useColorScheme,
   // Import useColorScheme hook
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackScreenProps } from "../types";
import SearchScreen from "./SearchScreen";
import BannerSlider from "./BannerSlider";
import Categories from "./Categories";
import FlashSale from "./FlashSale";
import Products from "./Products";
import FeaturedProducts from "./FeaturedProduct";
import Welcome from "./Onboarding/Welcome";
import HomeBanner from "./HomeBanner";

// type Props = RootStackScreenProps<"HomeScreen">;


const HomeScreen: React.FC = (props) => {
  

  const colorScheme = useColorScheme(); 

  // Define styles based on the color scheme
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchScreen />
        <BannerSlider />
        <Categories />
        <FlashSale />
        <Products/>
        <FeaturedProducts/>
        <HomeBanner></HomeBanner>
      </ScrollView>
      {/* <Welcome/> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
