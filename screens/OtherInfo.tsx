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
import { useNavigation } from "@react-navigation/native";


const OtherInfo: React.FC = () => {

    const colorScheme = useColorScheme();
    const nav = useNavigation();

    const styles = StyleSheet.create({
        container: {

            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={{ margin: 15, backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, padding: 10, borderRadius: Spacing.borderRadius.sm, flexDirection: "row" }} onPress={() => nav.navigate("CoupanScreen")}>
                <MaterialCommunityIcons name='ticket-percent' size={20} color={Colors.primary} />
                <Text style={{ fontFamily: Font["poppins-semiBold"], marginLeft: 5, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>All Offers & Coupons</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white }}>
                <View style={{ margin: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ alignItems: "center" }}>
                        <MaterialCommunityIcons name="clock-outline" size={24} color={Colors.primary} />
                        <Text style={{ fontFamily: Font["poppins-regular"], textAlign: "center", color: colorScheme === 'dark' ? Colors.white : Colors.text }}>7 Days {'\n'}Replacement</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <MaterialCommunityIcons name="truck-delivery" size={24} color={Colors.primary} />
                        <Text style={{ fontFamily: Font["poppins-regular"], textAlign: "center", color: colorScheme === 'dark' ? Colors.white : Colors.text }} >Free Cash On {'\n'}Delivery</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <MaterialCommunityIcons name="tag-outline" size={24} color={Colors.primary} />
                        <Text style={{ fontFamily: Font["poppins-regular"], textAlign: "center", color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Fashion Assured</Text>
                    </View>
                </View>
            </View>

            <View style={{
                margin: 15,
                backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white,
                padding: 10,
                borderRadius: Spacing.borderRadius.sm,
                flexDirection: "column"
            }}>
                <Text style={{
                    fontFamily: Font["poppins-semiBold"],
                    fontSize: FontSize.lg,
                    color: colorScheme === 'dark' ? Colors.white : Colors.text
                }}>Highlights</Text>
                <View>
                    {[
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                        'Commodi nihil iure consequuntur rem itaque dolore incidunt quis inventore?',
                        'Odio sequi tempora illum ex iusto modi fugit nobis fugiat quasi deleniti?',
                        'Odio sequi tempora illum ex iusto modi fugit nobis fugiat quasi deleniti?'
                    ].map((item, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                                fontFamily: Font["poppins-regular"],
                                color: colorScheme === 'dark' ? Colors.white : Colors.textGray
                            }}>•</Text>
                            <Text style={{
                                fontFamily: Font["poppins-regular"],
                                color: colorScheme === 'dark' ? Colors.white : Colors.textGray,
                                marginLeft: 5
                            }}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>

        </SafeAreaView>
    );
};

export default OtherInfo;
