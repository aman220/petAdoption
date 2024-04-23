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
    ImageBackground,
    Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Space from "../../constants/Space";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import showToast from "../../constants/Toast";
import { useNavigation } from "@react-navigation/native";


const LoginScreen: React.FC = () => {
  const nav = useNavigation();
    const Colorscheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor:
            Colorscheme === "dark" ? Colors.darkBackground : Colors.white,
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
        {/* {isLoading && (
       <Modal
         animationType="fade"
         transparent={true}
         visible={isLoading}
         onRequestClose={() => {}}
       >
         <View style={styles.loaderContainer}>
           <View style={styles.loaderContent}>
             <ActivityIndicator size="lg" color={Colors.primary} />
             <Text style={styles.loaderText}>Signing In...</Text>
             
           </View>
         </View>
       </Modal>)} */}
       <Toast/>
       <View style={{margin:15}} >
         <View style={{ alignItems: "center" }}>
           <Text
             style={{
               fontSize: FontSize.xl,
               color: Colors.primary,
               fontFamily: Font["poppins-bold"],
               marginVertical: Space * 3,
               zIndex:-1,
             }}
           >
             Login Here
           </Text>
           <Text
             style={{
               fontFamily: Font["poppins-semiBold"],
               fontSize: FontSize.lg,
               maxWidth: "68%",
               textAlign: "center",
             }}
           >
             Welcome back you've been missed
           </Text>
         </View>
         <View style={{ marginVertical: Space * 3 }}>
           <TextInput
            // onChangeText={setEmail}
             placeholder="Enter User Email"
             placeholderTextColor={Colors.textGray}
             style={{
               fontFamily: Font["poppins-regular"],
               fontSize: FontSize.sm,
               padding: Space * 2,
               backgroundColor: Colors.light,
               borderRadius: Space,
               marginVertical: Space,
             }}
            //  value={email}
           />
 
           <TextInput
        //    onChangeText={setPassword}
             placeholder="Enter User Password"
             placeholderTextColor={Colors.textGray}
             secureTextEntry
             style={{
               fontFamily: Font["poppins-regular"],
               fontSize: FontSize.sm,
               padding: Space * 2,
               backgroundColor: Colors.light,
               borderRadius: Space,
               marginVertical: Space,
             }}
            //  value={password}
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
             Forget your Password ?
           </Text>
         </View>
         <TouchableOpacity
           style={{
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
           }}
           onPress={()=>{nav.navigate("BottamNav")}}
         >
           <Text
             style={{
               fontFamily: Font["poppins-bold"],
               color: Colors.white,
               textAlign: "center",
               fontSize: FontSize.lg,
             }}
           >
             Sign in
           </Text>
         </TouchableOpacity>
 
         <TouchableOpacity
           style={{
             padding: Space,
           }}
           onPress={() => nav.navigate("RegisterScreen")}
         >
           <Text
             style={{
               fontFamily: Font["poppins-semiBold"],
               color: Colors.text,
               textAlign: "center",
               fontSize: FontSize.sm,
             }}
           >
             Create new account
           </Text>
         </TouchableOpacity>
 
         <View
           style={{
             marginVertical: Space * 3,
           }}
         >
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
               style={{
                 padding: Space,
                 backgroundColor: Colors.textGray,
                 borderRadius: Space / 2,
                 marginHorizontal: Space,
               }}
               onPress={() => showToast("error", "Currently not availabe")}
             >
               <Ionicons
                 name="logo-google"
                 color={Colors.darkText}
                 size={Space * 2}
               />
             </TouchableOpacity>
             <TouchableOpacity
               style={{
                 padding: Space,
                 backgroundColor: Colors.textGray,
                 borderRadius: Space / 2,
                 marginHorizontal: Space,
               }}
               onPress={() => showToast("error", "Under Progress")}
             >
               <Ionicons
                 name="logo-apple"
                 color={Colors.darkText}
                 size={Space * 2}
               />
             </TouchableOpacity>
             <TouchableOpacity
               style={{
                 padding: Space,
                 backgroundColor: Colors.textGray,
                 borderRadius: Space / 2,
                 marginHorizontal: Space,
               }}
               onPress={() => showToast("error", "Under Progress")}
             >
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

export default LoginScreen;
