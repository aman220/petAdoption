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
    useColorScheme, // Import useColorScheme hook
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
import { FontAwesome } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, "CoupanScreen">;
const CouponScreen: React.FC<Props> = () => {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
          
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        cardContainer: {
            backgroundColor:  colorScheme === 'dark' ? Colors.textGray : Colors.white,
            borderRadius: Spacing.borderRadius.sm,
            padding: Spacing.padding.sm,
            marginBottom: Spacing.margin.base,
            shadowColor: Colors.text,
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
            borderWidth:1,
            borderColor:Colors.primary,
            borderStyle:"dashed",
        },
        image: {
            width: 80,
            height: 80,
            borderRadius: Spacing.borderRadius.base,
            marginRight: Spacing.margin.base,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                marginTop: 40,
                margin:15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <TouchableOpacity style={{
                    backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light,
                    width: 50,
                    height: 50,
                    borderRadius: Spacing.borderRadius.xl,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: FontSize.lg,
                    fontFamily: Font["poppins-semiBold"],
                    color: colorScheme === 'dark' ? Colors.white : Colors.text
                }}>Coupons</Text>
                <TouchableOpacity style={{
                    backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light,
                    width: 50,
                    height: 50,
                    borderRadius: Spacing.borderRadius.xl,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 , margin:15}}>
                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg , color: colorScheme === 'dark' ? Colors.white : Colors.text,}}>Best Offer For You</Text>
                <View style={styles.cardContainer}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            //backgroundColor:  colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
                            borderRadius: Spacing.borderRadius.xl,
                            marginLeft: -30
                        }}></View>
                        <View style={{
                            height: 50,
                            width: 50,
                            //backgroundColor:  colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
                            borderRadius: Spacing.borderRadius.xl,
                            marginRight: -30
                        }}></View>
                    </View>
                    <View style={{zIndex:999 , marginTop:-40}}>
                        <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.xl,textAlign:"center" ,color: colorScheme === 'dark' ? Colors.white : Colors.text}}>WELCOME200</Text>
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: colorScheme === 'dark' ? Colors.white : Colors.text}}>Get ₹200 off on any clothes</Text>
                        <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 10 }}>
                            <FontAwesome
                                name='tag'
                                size={20}
                                color={colorScheme === 'dark' ? Colors.white : Colors.primary}
                            />
                            <Text style={{
                                fontFamily: Font["poppins-regular"],
                                fontSize: FontSize.base,
                                color: colorScheme === 'dark' ? Colors.white : Colors.text,
                                marginLeft: 5
                            }}>GET 20% off</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{
                                backgroundColor: Colors.textGray,
                                borderRadius: Spacing.borderRadius.sm, // Set border radius same as the card
                                width: '100%', 
                                overflow: 'hidden', 
                            }}>
                                <TouchableOpacity style={{ padding: 9 , backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.textGray}}>
                                    <Text style={{ color: Colors.white , textAlign:"center", fontFamily:Font["poppins-regular"]}}>COPY CODE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                    }}>
                        <View style={{
                            height: 50,
                            width: 50,
                            //backgroundColor:  colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
                            borderRadius: Spacing.borderRadius.xl,
                            marginLeft: -30
                        }}></View>
                        <View style={{
                            height: 50,
                            width: 50,
                            //backgroundColor:  colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
                            borderRadius: Spacing.borderRadius.xl,
                            marginRight: -30
                        }}></View>
                    </View>
                    <View style={{zIndex:999 , marginTop:-40}}>
                        <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.xl,textAlign:"center" ,color: colorScheme === 'dark' ? Colors.white : Colors.text}}>LELO500</Text>
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: colorScheme === 'dark' ? Colors.white : Colors.text}}>Get ₹500 off on any clothes</Text>
                        <View style={{ flexDirection: "row", alignItems: "baseline", marginTop: 10 }}>
                            <FontAwesome
                                name='tag'
                                size={20}
                                color={colorScheme === 'dark' ? Colors.white : Colors.primary}
                            />
                            <Text style={{
                                fontFamily: Font["poppins-regular"],
                                fontSize: FontSize.base,
                                color: colorScheme === 'dark' ? Colors.white : Colors.text,
                                marginLeft: 5
                            }}>GET 50% off</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <View style={{
                                backgroundColor: Colors.textGray,
                                borderRadius: Spacing.borderRadius.sm, // Set border radius same as the card
                                width: '100%', 
                                overflow: 'hidden', 
                            }}>
                                <TouchableOpacity style={{ padding: 9 , backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.textGray}}>
                                    <Text style={{ color: Colors.white , textAlign:"center", fontFamily:Font["poppins-regular"]}}>COPY CODE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CouponScreen;
