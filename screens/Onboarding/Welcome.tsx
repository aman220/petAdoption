import React from "react";
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
    ImageBackground,
    Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import SearchScreen from "./../SearchScreen";
import { BlurView } from 'expo-blur';
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";

const Welcome: React.FC = () => {
    const nav = useNavigation();
    const colorScheme = useColorScheme();
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:
                colorScheme === "dark" ? Colors.darkBackground : Colors.light,
        },
        imageBackground: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          
        },
        overlayView: {
            // backgroundColor: 'white',
            position: 'absolute',
            width: '100%',
            height: height * 0.45,
            bottom: 0,
            borderTopLeftRadius: width * 0.2,
            borderTopRightRadius: width * 0.2,
            overflow: 'hidden',
            opacity:10,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.imageBackground}
                width={width}
                height={height}
                source={require("../../assets/images/Native.png")}
            ></ImageBackground>
            <BlurView intensity={100} style={styles.overlayView}>
                <View style={{ margin: 10  }}>
                    <Text
                        style={{
                            fontSize: FontSize.xl,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            textAlign: "center",
                            marginTop: 20
                        }}
                    >
                        Get Your Lovely bovely Pet's Now 
                    </Text>
                    <Text
                        style={{
                            fontSize: FontSize.xl,
                            color: Colors.primary,
                            fontFamily: Font["poppins-bold"],
                            textAlign: "center",
                        }}
                    >
                        
                    </Text>
                    <View>
                        <Text
                            style={{
                                fontSize: FontSize.sm,
                                color: Colors.text,
                                fontFamily: Font["poppins-regular"],
                                textAlign: "center",
                                marginTop: 10, 
                                margin:5,
                                marginBottom:20
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nostrum!
                        </Text>
                    </View>

                    <View
                        style={{
                            paddingHorizontal: 10, 
                            paddingTop: 10,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginTop:20
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: Colors.primary,
                                paddingVertical: 10, 
                                paddingHorizontal: 10, 
                                width: "48%",
                                borderRadius: Spacing.borderRadius.base,
                                shadowColor: Colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: 10,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing.borderRadius.base,
                            }}
                        onPress={()=>{nav.navigate("LoginScreen")}}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: Colors.white,
                                    fontSize: FontSize.lg,
                                    textAlign: "center",
                                }}
                            >
                                Login
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                         onPress={()=>{nav.navigate("RegisterScreen")}}
                            style={{
                                paddingVertical: 10, 
                                paddingHorizontal: 10,
                                width: "40%",
                                borderRadius: Spacing.borderRadius.base,
                            }}
                        // onPress={handleRegisterPress}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: Colors.text,
                                    fontSize: FontSize.lg,
                                    textAlign: "center",
                                }}
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </BlurView>
        </SafeAreaView>
    );
};

export default Welcome;
