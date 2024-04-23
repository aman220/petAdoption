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
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";


const ChangeAddress: React.FC = () => {

    const colorScheme = useColorScheme();
    const [selectedAddress, setSelectedAddress] = useState("Home");

    const handleAddressChange = (address: string) => {
        setSelectedAddress(address);
    };

    const renderRadioButton = (address: string) => (
        <TouchableOpacity
            onPress={() => handleAddressChange(address)}
            style={{
                flexDirection: "row",
                alignItems: "center",
            }}
        >
            <MaterialCommunityIcons
                name={selectedAddress === address ? "radiobox-marked" : "radiobox-blank"}
                size={20}
            />
            <Text style={{ marginLeft: 5, fontFamily: Font["poppins-semiBold"] }}>
                {address}
            </Text>
        </TouchableOpacity>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        bottomSection: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            borderTopColor: Colors.textGray,
            padding: 15,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 5,
            flexDirection: 'column', 
            alignItems: 'center',
        },
        processOrderButton: {
            backgroundColor: Colors.primary,
            paddingVertical: 10,
            borderRadius: Spacing.borderRadius.xl,
            alignItems: 'center',
            width: '100%', // Take up full width
        },
        processOrderButtonText: {
            color: Colors.white,
            fontSize: FontSize.lg,
            fontFamily: Font['poppins-bold'],
        },
    });



    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Shipping Address</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{ marginVertical: 15 }}>
                        <View style={{ backgroundColor: Colors.white, padding: 5, borderRadius: Spacing.borderRadius.base }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Ionicons name="location-outline" size={20}></Ionicons>
                                <Text style={{ fontFamily: Font["poppins-semiBold"], marginLeft: 5 }}>Home</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 24 }}>
                                <Text style={{ color: Colors.textGray, fontFamily: Font["poppins-regular"], fontSize: FontSize.sm }}>shiva colony Dhnaipur {"\n"}Aligarh 202001</Text>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    {renderRadioButton("Home")}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 1, backgroundColor: Colors.light, marginVertical: 20 }}></View>
                        <View style={{ backgroundColor: Colors.white, padding: 5, borderRadius: Spacing.borderRadius.base }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Ionicons name="location-outline" size={20}></Ionicons>
                                <Text style={{ fontFamily: Font["poppins-semiBold"], marginLeft: 5 }}>Office</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 24 }}>
                                <Text style={{ color: Colors.textGray, fontFamily: Font["poppins-regular"], fontSize: FontSize.sm }}>tower no 25 ground floor{"\n"}Noida 202011</Text>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    {renderRadioButton("office")}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: "100%", height: 1, backgroundColor: Colors.light, marginVertical: 20 }}></View>
                        <View style={{ backgroundColor: Colors.white, padding: 5, borderRadius: Spacing.borderRadius.base }}>
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Ionicons name="location-outline" size={20}></Ionicons>
                                <Text style={{ fontFamily: Font["poppins-semiBold"], marginLeft: 5 }}>Papa ka Ghr</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: 24 }}>
                                <Text style={{ color: Colors.textGray, fontFamily: Font["poppins-regular"], fontSize: FontSize.sm }}>Village Chandigarhi post jalali{"\n"}Aligarh 202011</Text>
                                <TouchableOpacity style={{ marginRight: 10 }}>
                                    {renderRadioButton("Another")}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                flexDirection: "row",
                                backgroundColor: Colors.light,
                                padding: 15,
                                alignItems: "center",
                                justifyContent: "center", 
                                borderColor: Colors.primary,
                                borderWidth: 1,
                                borderRadius: Spacing.borderRadius.base,
                                marginTop: 25,
                                borderStyle: "dashed", 
                            }}
                        >
                            <MaterialCommunityIcons name="plus" size={20} />
                            <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, marginLeft: 10 }}>
                                Add New Address
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.processOrderButton}>
                    <Text style={styles.processOrderButtonText}>Apply</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ChangeAddress;
