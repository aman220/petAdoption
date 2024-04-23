import React from "react";
import { SafeAreaView, StyleSheet, Image, Dimensions, View, Text } from "react-native";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { BlurView } from "expo-blur";

const HomeBanner: React.FC = () => {
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;

    const styles = StyleSheet.create({
        container: {
            marginTop: 200,
            flex: 1,
            backgroundColor: Colors.white,
            justifyContent: "center", // Center content vertically
            alignItems: "center", // Center content horizontally

        },
        text: {
            fontFamily: Font["poppins-bold"],
            fontSize: 24,
            marginBottom: 20,
            backgroundColor: Colors.primary,
            color: Colors.white,
            padding: 5,
            borderRadius: Spacing.borderRadius.lg,
            paddingHorizontal: 20
        },
        image: {
            width: "100%", // Set width to screen width
            height: screenHeight / 2, // Set height to half of screen height
            resizeMode: "cover", // Cover the entire container
        },
        secondImageContainer: {
            width: "100%", // Set width to 80% of screen width
            overflow: "hidden", // Hide overflow
            marginBottom: 400
        },
        secondImage: {
            width: "100%", // Occupy full width of container
            height: "100%", // Occupy full height of container
            resizeMode: "cover", // Cover the entire container
        },
        blurOverlay: {
            position: "absolute",
            top: 300,
            right: 0,
            left: 0,
            margin:25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.light,
            borderRadius:10,
        },
        blurText: {
            color: Colors.text,
            fontSize: 20,
            fontFamily: Font["poppins-bold"],
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Get Your Pet Now</Text>
            <Image
                source={require("../assets/images/mainbanner.png")}
                style={styles.image}
            />
            <View style={styles.secondImageContainer}>
                <Image
                    source={require("../assets/images/shopbanner2.png")}
                    style={styles.secondImage}
                />
                <BlurView intensity={100} style={styles.blurOverlay}>
                    <Text style={styles.blurText}>Open Your Shop by just 3 easy Steps</Text>
                </BlurView>
            </View>
        </SafeAreaView>
    );
};

export default HomeBanner;
