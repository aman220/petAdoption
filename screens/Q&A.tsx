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


const QandA: React.FC = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 15 }}>
                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg }}>Questions & Answers</Text>
                {[1, 2, 3, 4].map((index) => (<View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Q: Kya ye kuuta khana khata hai ?</Text>
                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, autem.</Text>
                    </View>
                    <View style={{ width: 110, backgroundColor: Colors.light, padding: 10, borderRadius: 10 }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Ionicons name="heart-outline" size={20}></Ionicons>
                            <Text style={{ fontFamily: Font["poppins-regular"], marginLeft: 5 }}>Help Full</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 2, backgroundColor: Colors.light, marginVertical: 20 }}></View>
                </View>))}
            </View>
        </SafeAreaView>
    );
};

export default QandA;
