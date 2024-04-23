import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { useNavigation } from "@react-navigation/native";

const Description: React.FC = () => {
    const nav = useNavigation();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.white,
            padding: 20,
        },
        header: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: 20,
            marginBottom: 15,
        },
        contentContainer: {
            alignItems: "center",
        },
        textContainer: {
            textAlign: "center",
            justifyContent: "center",
            marginTop: 20,
        },
        userInfoContainer: {
            flexDirection: "column",
            alignItems: "center",
        },
        userName: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: 18,
            marginBottom: 5,
        },
        shopName: {
            fontFamily: Font["poppins-regular"],
            fontSize: 16,
            color: Colors.textGray,
            marginBottom: 15,
        },
        shopDescription: {
            fontFamily: Font["poppins-regular"],
            fontSize: 14,
            color: Colors.textGray,
            marginTop: 10,
            backgroundColor: Colors.light,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderStyle: "dashed"
        },
        image: {
            width: 80,
            height: 80,
            borderRadius: 40,
        },
        actionIcons: {
            flexDirection: "row",
            justifyContent: "center",
        },
        actionIcon: {
            marginHorizontal: 15,
            backgroundColor: Colors.light,
            padding: 10,
            borderRadius: Spacing.borderRadius.xl,
        },
        visitShopButton: {
            backgroundColor: Colors.primary,
            padding: 10,
            borderRadius: Spacing.borderRadius.xl,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,  // Adjusted marginTop
        },
        visitShopButtonText: {
            paddingHorizontal:10,
            fontFamily: Font["poppins-semiBold"],
            fontSize: 16,
            color: Colors.white,
            
        },
    });

    const handleActionButtonPress = () => {
       nav.navigate("Profile");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Shop Partner</Text>
            <View style={styles.contentContainer}>
                <View style={styles.userInfoContainer}>
                    <Image
                        source={require("../assets/images/avatar.jpeg")}
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>Aman Raj Singh</Text>
                        <Text style={styles.shopName}>Thakur Pet Shop</Text>
                    </View>
                </View>

                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        onPress={handleActionButtonPress}
                        style={styles.actionIcon}
                    >
                        <Ionicons name="call" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleActionButtonPress}
                        style={styles.actionIcon}
                    >
                        <Ionicons name="mail" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleActionButtonPress}
                        style={styles.actionIcon}
                    >
                        <Ionicons name="location" size={24} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.shopDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quaerat reprehenderit velit ea et porro.
                </Text>
                {/* Added Visit Shop button */}
                <TouchableOpacity
                    onPress={handleActionButtonPress}
                    style={styles.visitShopButton}
                    
                >
                    <Ionicons name="storefront" size={24} color={Colors.white} />
                    <Text style={styles.visitShopButtonText}>VISIT NOW</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Description;
