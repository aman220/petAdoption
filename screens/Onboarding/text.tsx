import React from "react";
import { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacing from "../../constants/Spacing";
import COLORS from "../../constants/Colors";
import Font from "../../constants/Font";
import FontSize from "../../constants/FontSize";

const { height } = Dimensions.get("screen");

const Welcome: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleLoginPress = () => {
    // Handle login navigation
    // navigation.navigate("Login");
  };

  const handleRegisterPress = () => {
    // Handle register navigation
    // navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ height: 100, marginTop: 80 }}
          resizeMode="contain"
          source={require("../../assets/images/Native.png")}
        />
        <View
          style={{
            paddingHorizontal: Spacing.padding.base,
            paddingTop: Spacing.padding.base,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xxl,
              color: COLORS.primary,
              fontFamily: Font["poppins-bold"],
              textAlign: "center",
            }}
          >
            Discover Your
          </Text>
          <Text
            style={{
              fontSize: FontSize.xxl,
              color: COLORS.primary,
              fontFamily: Font["poppins-bold"],
              textAlign: "center",
              marginBottom: 10, // Removed string 'px'
            }}
          >
            Projects
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: FontSize.sm,
              color: COLORS.text,
              fontFamily: Font["poppins-regular"],
              textAlign: "center",
              marginTop: 10, // Removed string 'px'
            }}
          >
            Explore the existing Project for your learning and Collaboration with Others
          </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 10, // Removed string 'px'
            paddingTop: 10, // Removed string 'px'
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 50, // Enable margin
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 10, // Removed string 'px'
              paddingHorizontal: 10, // Removed string 'px'
              width: "48%",
              borderRadius: Spacing.borderRadius.base,
              shadowColor: COLORS.primary,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing.borderRadius.base,
            }}
            onPress={handleLoginPress}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: COLORS.white,
                fontSize: FontSize.lg,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 10, // Removed string 'px'
              paddingHorizontal: 10, // Removed string 'px'
              width: "40%",
              borderRadius: Spacing.borderRadius.base,
            }}
            onPress={handleRegisterPress}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: COLORS.text,
                fontSize: FontSize.lg,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
