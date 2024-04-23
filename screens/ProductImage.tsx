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
    FlatList,
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
import { LinearGradient } from 'expo-linear-gradient';


const ProductImage: React.FC = () => {

    const colorScheme = useColorScheme();
    const [selectedImage, setSelectedImage] = useState(require('../assets/images/DogImage1.png')); // State to keep track of selected image

    const styles = StyleSheet.create({
        container: {
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.light,
        }, imageContainer: {
            width: "100%",
            height: 400,
            overflow: 'hidden',
            borderTopWidth: 3,
            borderTopColor: 'transparent',
        },
        imageOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '15%',
            transform: [{ rotate: '180deg' }],
        },
        image: {
            width: "100%",
            height: "100%",
        },
    });
    // Function to convert hex color to RGBA
    const hexToRGBA = (hex: string, alpha: number) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const startColor = hexToRGBA('#EBEAEF', 0); // Transparent color equivalent to #EBEAEF
    const endColor = hexToRGBA('#EBEAEF', 1);

    const hexToRGBAdark = (hex : string, alpha:number) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    
    const startColordark = hexToRGBAdark('#1E1E1E', 0); // Transparent color equivalent to #504f4f
    const endColordark = hexToRGBAdark('#1E1E1E', 1); 

    const productImages = [
        { id: "1", image: require('../assets/images/DogImage1.png') },
        { id: "2", image: require('../assets/images/DogImage2.png') },
        { id: "3", image: require('../assets/images/DogImage3.png') },
        { id: "4", image: require('../assets/images/DogImage4.png') },
        { id: "5", image: require('../assets/images/DogImage5.png') },
    ];

    const handleImageSelection = (image: any) => {
        setSelectedImage(image); // Update selected image when a new image is selected from FlatList
      };
    

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{

                    paddingHorizontal: Spacing.padding.base,
                }}
            ></View>
            <View
            >
                <View style={{
                    marginTop: 40,
                    margin: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"] , color:colorScheme === 'dark' ? Colors.white : Colors.text}}>Product Details</Text>
                    <TouchableOpacity style={{backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.imageContainer}>
                    <View style={{ position: 'relative', width: '100%', height: 400 }}>
                        <Image
                            source={selectedImage} // Replace with your image path
                            style={styles.image}
                        />
                        <LinearGradient
                            colors={[colorScheme === 'dark' ? startColordark : startColor, colorScheme === 'dark' ? endColordark : endColor]} // Fading from transparent to opaque white
                            locations={[0, 0.8]} // Adjust the location where the fade begins
                            style={styles.imageOverlay}
                        />
                    </View>
                    <View style={{ position: 'absolute', bottom: 0, width:"auto", backgroundColor: Colors.white, margin: 15, borderRadius: Spacing.borderRadius.sm }}>
                        <FlatList 
                            data={productImages}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleImageSelection(item.image)}>
                                <Image
                                    source={item.image}
                                    style={{ width: 70, height: 70, margin: 2 , borderRadius:Spacing.borderRadius.sm , left:-15}}
                                    resizeMode="cover"
                                />
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={{
                                paddingHorizontal: Spacing.padding.base,
                            }}
                        />
                    </View>
                </View>

            </View>


        </SafeAreaView>
    );
};

export default ProductImage;
