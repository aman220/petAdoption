import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    useColorScheme,
    ImageSourcePropType,
    Dimensions,
} from "react-native";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";

interface Product {
    id: number;
    name: string;
    price: string;
    image: ImageSourcePropType;
    Category: string;
}

const productsData: Product[] = [
    {
        id: 1,
        name: 'Adult Siberian Husky',
        price: '$19.99',
        image: require('../assets/images/DogImage1.png'),
        Category: "Best Saler"
    },
    {
        id: 2,
        name: 'American Golden Retriver',
        price: '$24.99',
        image: require('../assets/images/DogImage2.png'),
        Category: "Recommended"
    },
    {
        id: 3,
        name: 'New Labrador Retirver Vaccinated',
        price: '$19.99',
        image: require('../assets/images/DogImage3.png'),
        Category: "Fast Out"
    },
    {
        id: 4,
        name: 'Premium Siberian Huskey',
        price: '$24.99',
        image: require('../assets/images/DogImage4.png'),
        Category: "Best Saler"
    },
];

const FeaturedProducts: React.FC = () => {
    const colorScheme = useColorScheme();
    const nav = useNavigation();

    const screenWidth = Dimensions.get('window').width;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,marginBottom:50
        },
        productItem: {
            width: 250,
            display: "flex",
            flexDirection: 'column',
            margin: 5,
            borderRadius: 10,
            backgroundColor:Colors.white,
            padding:5,
            elevation: 4, // Shadow for Android
            shadowColor: '#000', // Shadow for iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
        },
        productImage: {
            width: 240,
            height: 300,
            borderRadius: 10,
        },
        productName: {
            fontSize: FontSize.base,
            fontFamily: Font["poppins-semiBold"],
            marginTop: 5,
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        },
        productPrice: {
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-bold"],
            color: colorScheme === 'dark' ? Colors.white : '#85BB65',
        },
    });

    const renderProductItem = ({ item }: { item: Product }) => (
        <TouchableOpacity
            style={styles.productItem}
            onPress={() => nav.navigate("DetailsScreen")}
        >
            <Image source={item.image} style={styles.productImage} />
            <View style={{ marginTop: 5 }}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 5 }}>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <BlurView intensity={100} style={{ padding: 5, borderRadius: Spacing.borderRadius.lg, opacity: 0.6, marginRight: 10 }}>
                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <Text style={{ marginLeft: 5, fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.primary, fontSize: FontSize.base }}>{item.Category}</Text>
                        </TouchableOpacity>
                    </BlurView>
                </View>
            </View>

            <BlurView intensity={100} style={{ position: "absolute", left: 10, top: 10, padding: 5, borderRadius: Spacing.borderRadius.lg, opacity: 6 }}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                    <Ionicons name='star' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.primary} />
                    <Text style={{ marginLeft: 5, fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray, fontSize: FontSize.base }}>4.8 Stars</Text>
                </TouchableOpacity>
            </BlurView>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:10}}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" , marginTop:20}}>
                <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color:colorScheme === 'dark' ? Colors.white : Colors.text }}>Featured Products</Text>
                <TouchableOpacity   onPress={() => nav.navigate("AllProducts")}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color:colorScheme === 'dark' ? Colors.white : Colors.textGray }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={productsData}
                renderItem={renderProductItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingVertical: 10 }}
            />
            </View>
        </View>
    );
};

export default FeaturedProducts;
