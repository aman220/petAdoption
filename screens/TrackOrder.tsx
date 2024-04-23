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


const TrackOrder: React.FC = () => {

    const colorScheme = useColorScheme();
    const steps = ["Ordered", "Processing", "Shipped", "Delivered"];
    const currentStep = 1; // Update this dynamically based on your order status

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        stepIndicatorContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
        },
        step: {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
        },
        indicatorContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
        },

        activeStep: {
            backgroundColor: Colors.primary, // Set a different background color for the active step
        },
        stepText: {
            color: Colors.white,
            fontSize: 16,
            fontWeight: 'bold',
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View>
                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.xxl }}>Track Order</Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>wed 12 Sep</Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.textGray }}>order Id : xbc423 </Text>
                        <View style={{ marginRight: 10, flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Amt:</Text>
                            <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.lg }}> ₹233</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg }}>ETA: 15Min</Text>
                    <View style={{ backgroundColor: Colors.light, height: 40, position: "absolute" }}>
                        {/* add custome order indicator  here  */}
                    </View>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', marginLeft: 35 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="truck-fast-outline" size={40} color={Colors.primary} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Order Shipped</Text>
                                    <Text style={{ fontSize: 14, color: "#555" }}>Order arrived in Gurugram</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, color: "#007bff", marginVertical: 30 }}>10:20</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', marginLeft: 35 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="clipboard-check-outline" size={40} color={Colors.primary} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Order Procressed</Text>
                                    <Text style={{ fontSize: 14, color: "#555" }}>Order arrived in Gurugram</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, color: "#007bff", marginVertical: 30 }}>11:11</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', marginLeft: 35 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="package-variant-closed" size={40} color={Colors.primary} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Out of Devlivery</Text>
                                    <Text style={{ fontSize: 14, color: "#555" }}>Order arrived in Gurugram</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, color: "#007bff", marginVertical: 30 }}>12:00</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', marginLeft: 35 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="check-circle-outline" size={40} color={Colors.primary} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Order Delivered</Text>
                                    <Text style={{ fontSize: 14, color: "#555" }}>Order arrived in Gurugram</Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, color: "#007bff", marginVertical: 30 }}>01:15</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20, backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.base }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.lg }}>Delivery Address</Text>
                    <View style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.base }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Ionicons name="location-outline" size={20}></Ionicons>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], marginLeft: 5 }}>Home</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 24 }}>
                            <Text style={{ color: Colors.textGray, fontFamily: Font["poppins-regular"], fontSize: FontSize.sm }}>shiva colony Dhnaipur {"\n"}Aligarh 202001</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 10, backgroundColor: Colors.light, padding: 10, borderRadius: Spacing.borderRadius.base }}>
                    <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base }}>Don't forget to rate us!</Text>
                        <TouchableOpacity style={{ padding: 5, borderRadius: Spacing.borderRadius.sm, flexDirection: 'row', alignItems: 'center' }}>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <MaterialCommunityIcons key={index} name="star" size={20} color="gold" style={{ marginLeft: 5 }} />
                            ))}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TrackOrder;
