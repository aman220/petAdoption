import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";

import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import AllProducts from "../AllProducts";
import Products from "../Products";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import { useNavigation } from "@react-navigation/native";

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 100;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;
const USER_TABS_HEIGHT = 50;

const Profile: React.FC = () => {
    const nav = useNavigation();
    const [scrollY] = useState(new Animated.Value(0));

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp",
    });

    const profileImageHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
        extrapolate: "clamp",
    });

    const profileImageMarginTop = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [
            HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
            HEADER_MAX_HEIGHT + 5,
        ],
        extrapolate: "clamp",
    });

    const headerZindex = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
        outputRange: [0, 0, 1000],
        extrapolate: "clamp",
    });

    const headerTitleBottom = scrollY.interpolate({
        inputRange: [
            0,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT -
            HEADER_MIN_HEIGHT +
            5 +
            PROFILE_IMAGE_MIN_HEIGHT +
            26,
        ],
        outputRange: [-25, -20, -20, 15],
        extrapolate: "clamp",
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <Animated.View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: Colors.primary,
                    height: headerHeight,
                    zIndex: headerZindex,
                    alignItems: "center",
                }}
            >
                <Animated.View style={{ position: "absolute", bottom: headerTitleBottom }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                        Aman Raj Singh
                    </Text>
                </Animated.View>
            </Animated.View>

            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
            >
                <Animated.View
                    style={{
                        height: profileImageHeight,
                        width: profileImageHeight,
                        borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                        borderColor: "white",
                        borderWidth: 3,
                        overflow: "hidden",
                        marginTop: profileImageMarginTop,
                        marginLeft: 10,
                    }}
                >
                    <Image
                        source={require("../../assets/images/avatar.jpeg")}
                        style={{ flex: 1, width: null, height: null }}
                        resizeMode="cover"
                    />
                </Animated.View>

                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
                        Thakur Pet Shop
                    </Text>
                    <Text
                        style={{
                            color: Colors.text,
                            fontSize: 12,
                            fontFamily: Font["poppins-regular"],
                            marginTop: 1,
                            paddingLeft: 15,
                        }}
                    >
                        Aman raj Singh
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: Spacing.borderRadius.xl,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 15,
                        margin: 20
                    }}
                    onPress={()=>{nav.navigate("Map_Direction")}}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontFamily: Font["poppins-semiBold"],
                            fontSize: 16,
                            color: Colors.white,
                        }}>Get Direction</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsValue}>40</Text>
                        <Text style={styles.statsLabel}>Pets</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsValue}>10</Text>
                        <Text style={styles.statsLabel}>Adopted</Text>
                    </View>
                    <View style={styles.statsItem}>
                        <Text style={styles.statsValue}>A+</Text>
                        <Text style={styles.statsLabel}>Rating</Text>
                    </View>
                </View>
                <View style={{ width: "100%", height: 1, backgroundColor: Colors.light, marginTop: 20 }} />
                <View >
                    <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, margin: 15 }}>Listed Pets</Text>
                    <Products></Products>
                </View>
                <View style={{ height: 1000 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    verifiedIcon: {
        width: 25,
        height: 25,
        marginLeft: 5,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    statsItem: {
        alignItems: "center",
    },
    statsValue: {
        fontSize: 20,
        fontWeight: "bold",
    },
    statsLabel: {
        fontSize: 14,
        color: Colors.primary,
    },
});
