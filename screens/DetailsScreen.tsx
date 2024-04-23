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
    ImageBackground,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import SearchScreen from "./SearchScreen";
import BannerSlider from "./BannerSlider";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import ProductPrice from "./ProductPrice";
import OtherInfo from "./OtherInfo";
import Description from "./Description";
import Product_Review from "./Product_Review";
import QandA from "./Q&A";
import FeaturedProducts from "./FeaturedProduct";


type Props = NativeStackScreenProps<RootStackParamList, "DetailsScreen">;
const DetailsScreen: React.FC<Props> = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
        }
    });


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ProductImage />
                <ProductDetails />
                <OtherInfo/>
                <Description/>
                <Product_Review></Product_Review>
                <QandA></QandA>
                <FeaturedProducts></FeaturedProducts>
            </ScrollView>
            <ProductPrice/>
        </SafeAreaView>
    );
};

export default DetailsScreen;
