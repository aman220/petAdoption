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
  useColorScheme,
  Modal,
  ActivityIndicator, // Import useColorscheme hook
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Space from "../../constants/Space";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import Toast from "react-native-toast-message";
import showToast from "../../constants/Toast";
import { useNavigation } from "@react-navigation/native";


const SignupScreen: React.FC = () => {
  const nav = useNavigation();
  const Colorscheme = useColorScheme();
  const [isLoading, setisLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const ReisterUser = async () => {
    try {
      setisLoading(true);
      const response = await fetch("http://192.168.164.247:8000/api/user/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, password_confirmation })
      })
      const data = await response.json();
      console.log(data.status);
      console.log(data);
      if (data.status === "Success") {
        nav.navigate("BottamNav")
      } else if (data.status === 'E_failed') {
        showToast("error", "Email is already in use");
        setisLoading(false);
      } else if (data.status === 'P_failed') {
        showToast("error", "Confirmed Pasword Not Same");
        setisLoading(false);
      } 
      else if(data.status === 'F_failed'){
        showToast("error", "All Field required")
        setisLoading(false);
      }
      else {
        showToast("error", "Something wrong try again")
        setisLoading(false);
      }
    } catch (error) {
      setisLoading(false);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colorscheme === "dark" ? Colors.darkBackground : Colors.white,
    },
    input: {
      fontFamily: Font["poppins-regular"],
      fontSize: FontSize.sm,
      padding: Space * 2,
      backgroundColor: Colors.light,
      borderRadius: Space,
      marginVertical: Space,
    },
    button: {
      padding: Space * 2,
      backgroundColor: Colors.primary,
      marginVertical: Space * 3,
      borderRadius: Space,
      shadowColor: Colors.primary,
      shadowOffset: {
        width: 0,
        height: Space,
      },
      shadowOpacity: 0.3,
      shadowRadius: Space,
    },
    link: {
      padding: Space,
    },
    socialButton: {
      padding: Space,
      backgroundColor: Colors.textGray,
      borderRadius: Space / 2,
      marginHorizontal: Space,
    },
    loaderContainer: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      justifyContent: "center",
      alignItems: "center",

    },
    loaderContent: {
      backgroundColor: Colors.white,
      padding: Space * 2,
      borderRadius: Space,
      alignItems: "center",
    },
    loaderText: {
      fontFamily: Font["poppins-regular"],
      fontSize: FontSize.sm,
      marginTop: Space,
      alignItems: "center",
      color: Colors.primary,
      // fontFamily: Font["poppins-bold"],
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading == true && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isLoading}
          onRequestClose={() => { isLoading }}
        >
          <View style={styles.loaderContainer}>
            <View style={styles.loaderContent}>
              <ActivityIndicator color={Colors.primary} />
              <Text style={styles.loaderText}>Signing up...</Text>
            </View>
          </View>
        </Modal>)}
      <Toast />
      <View style={{ margin: 15 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: FontSize.xl,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Space * 3,
              zIndex: -1,
            }}
          >
            Register Here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.sm,
              maxWidth: "98%",
              textAlign: "center",
            }}
          >
            Create an Account and Explore our endless features
          </Text>
        </View>
        <View style={{ marginVertical: Space * 3 }}>
          <TextInput
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor={Colors.textGray}
            style={styles.input}
          />
          <TextInput
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={Colors.textGray}
            style={styles.input}
          />
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={Colors.textGray}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.textGray}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.sm,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forget your Password?
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { ReisterUser() }}>
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.white,
              textAlign: "center",
              fontSize: FontSize.lg,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => nav.navigate("LoginScreen")}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.sm,
            }}
          >
            Already have an account?
          </Text>
        </TouchableOpacity>

        <View style={{ marginVertical: Space * 1 }}>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.sm,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Space,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => showToast("error", "Under Progress")}
            >
              <Ionicons
                name="logo-google"
                color={Colors.darkText}
                size={Space * 2}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-apple"
                color={Colors.darkText}
                size={Space * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons
                name="logo-facebook"
                color={Colors.darkText}
                size={Space * 2}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;
