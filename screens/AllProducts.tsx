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
    ImageSourcePropType,
    Dimensions,
    FlatList // Import useColorScheme hook
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
import Products from "./Products";
import { BlurView } from 'expo-blur';
import { useNavigation } from "@react-navigation/native";


interface Product {
    id: number;
    name: string;
    price: string;
    image: ImageSourcePropType;
}
const AllProducts: React.FC = () => {

    const colorScheme = useColorScheme();
    const numColumns = 2;
    const screenWidth = Dimensions.get('window').width;
    const columnWidth = screenWidth / numColumns;
    const nav = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
        }, productItem: {
            flexDirection: 'column',
            margin: 5,
            borderRadius: 10,
        },
        productImage: {
            width: columnWidth - 20,
            height: columnWidth - 20,
            borderRadius: 10,
        },
        productName: {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            marginTop: 5,
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        },
        productPrice: {
            fontSize: FontSize.base,
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        },
    });

    const productsData: Product[] = [
        {
            id: 1,
            name: 'Labrador Retirver',
            price: '$19.99',
            image: require('../assets/images/DogImage1.png'),
        },
        {
            id: 2,
            name: 'Golden Retriver',
            price: '$24.99',
            image: require('../assets/images/DogImage2.png'),
        },
        {
            id: 3,
            name: 'Siberian Huskey',
            price: '$19.99',
            image: require('../assets/images/DogImage3.png'),
        },
        {
            id: 4,
            name: 'Dachshund',
            price: '$24.99',
            image: require('../assets/images/DogImage4.png'),
        }, {
            id: 5,
            name: 'Golden Retriver',
            price: '$19.99',
            image: require('../assets/images/DogImage5.png'),
        },
        {
            id: 6,
            name: 'Dachshund',
            price: '$24.99',
            image: require('../assets/images/DogImage6.png'),
        }, {
            id: 7,
            name: 'Golden Retriver',
            price: '$19.99',
            image: require('../assets/images/DogImage7.png'),
        },
        {
            id: 8,
            name: 'Dachshund',
            price: '$24.99',
            image: require('../assets/images/DogImage8.png'),
        },
    ];

    const renderProductItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => nav.navigate("DetailsScreen")}
        >
            <Image source={item.image} style={styles.productImage} />
            <View style={{ marginTop: 5 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <Ionicons name='star' size={15} color={Colors.primary} />
                        <Text style={{ marginRight: 5, fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray, fontSize: FontSize.sm }}>4.8</Text>
                    </View>
                </View>

                <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <BlurView intensity={100} style={{ position: "absolute", right: 10, top: 10, padding: 5, borderRadius: Spacing.borderRadius.lg, opacity: 6 }}>
                <TouchableOpacity>
                    <Ionicons name='heart-outline' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                </TouchableOpacity>
            </BlurView>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>All Products</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white,
                            padding: Spacing.padding.base,
                            borderRadius: Spacing.borderRadius.base,
                            width: "100%",
                            height: 50,
                        }}
                    >
                        <Ionicons name='search' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.text} />
                        <TextInput
                            style={{
                                fontSize: FontSize.base,
                                color: colorScheme === 'dark' ? Colors.white : Colors.text,
                                marginLeft: Spacing.margin.base,
                            }}
                            placeholder='Search'
                            placeholderTextColor={colorScheme === 'dark' ? Colors.white : Colors.text}
                        />
                    </View>
                </View>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: colorScheme === 'dark' ? Colors.white : Colors.text }}> Result Of Jacket</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>6,235 Found</Text>
                    </View>
                    <FlatList
                        data={productsData}
                        renderItem={renderProductItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns}
                        contentContainerStyle={{ paddingVertical: 10 , marginBottom:100}}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

            </View>


        </SafeAreaView>
    );
};

export default AllProducts;
