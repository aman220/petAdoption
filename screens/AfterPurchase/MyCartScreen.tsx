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
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { useNavigation } from "@react-navigation/native";

interface Item {
    id: string;
    title: string;
    description: string;
    size: string;
    price: string;
    image: any;
}

const MyCartScreen: React.FC = () => {
    const colorScheme = useColorScheme();
    const navigate = useNavigation();

    const [data, setData] = useState<Item[]>([
        {
            id: '1',
            title: 'Dachshund',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage1.png'),
        },
        {
            id: '2',
            title: 'Siberian Huskey',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage2.png'),
        }, {
            id: '3',
            title: 'Golden Retriver',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage3.png'),
        },
        // Add more items as needed
    ]);

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.listItem}>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    padding: 5,
                    borderRadius: 20,
                    backgroundColor: Colors.light, // You can use your own color
                }}
                onPress={() => handleDelete(item.id)}
            >
                <Ionicons name="trash-outline" size={20} color={Colors.text} />
            </TouchableOpacity>
            <Image
                source={item.image}
                style={{ width: 130, height: '100%', resizeMode: 'cover' }}
            />
            <View style={{ marginLeft: 8, flex: 1, padding: 10 }}>
                <Text style={{ fontSize: FontSize.lg, marginBottom: 1, fontFamily: Font['poppins-bold'] }}>
                    {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: 'gray', marginBottom: 4 }}>
                    {item.description}
                </Text>
                <Text style={{ fontSize: 14, color: 'gray', marginBottom: 4 }}>
                    Size: {item.size}
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>
                        {item.price}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                padding: 2,
                                borderRadius: 4,
                                backgroundColor: Colors.light,
                                marginLeft: 8,
                            }}
                        >
                            <Ionicons name="remove" size={20} color="black" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, marginHorizontal: 8 }}>0</Text>
                        <TouchableOpacity
                            style={{
                                padding: 2,
                                borderRadius: 4,
                                backgroundColor: Colors.primary,
                                marginLeft: 5,
                            }}
                        >
                            <Ionicons name="add" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    const handleDelete = (itemId: string) => {
        const updatedData = data.filter((item) => item.id !== itemId);
        setData(updatedData);
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        listItem: {
            backgroundColor: 'white',
            marginTop: 20,
            height: 140,
            flexDirection: 'row',
            borderRadius: 8,
            overflow: 'hidden',
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 2,
            marginBottom: 5,
        },
        bottomSection: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            borderTopColor: Colors.textGray,
            padding: 15,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 10,
            elevation: 5,
            flexDirection: 'column', // Change to column layout
            alignItems: 'center', // Center align items
        },
        // Updated styles for the total price container
        totalPriceContainer: {
            marginBottom: 20, // Add some spacing
        },
        totalPriceText: {
            fontSize: FontSize.lg,
            fontFamily: Font['poppins-bold'],
            color: Colors.primary, // Set a prominent color
        },
        // Updated styles for the coupon container
        couponContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20, // Add some spacing

        },
        couponInput: {
            flex: 1,
            height: 40,
            borderColor: Colors.primary, // Set border color
            borderWidth: 1,
            borderRadius: Spacing.borderRadius.lg,
            paddingHorizontal: 10,
            marginRight: 10, // Add some spacing
            borderStyle:"dashed"
        },
        applyCouponButton: {
            backgroundColor: Colors.primary,
            paddingVertical: 8,
            paddingHorizontal: 15,
            borderRadius: Spacing.borderRadius.lg,
        },
        applyCouponButtonText: {
            color: Colors.white,
            fontSize: FontSize.base, // Adjust font size
            fontFamily: Font['poppins-bold'],
        },
        // Updated styles for the process order button
        processOrderButton: {
            backgroundColor: Colors.primary,
            paddingVertical: 10,
            borderRadius: Spacing.borderRadius.xl,
            alignItems: 'center',
            width: '100%', // Take up full width
        },
        processOrderButtonText: {
            color: Colors.white,
            fontSize: FontSize.lg,
            fontFamily: Font['poppins-bold'],
        },
        othertotals: {
            display: "flex", flexDirection: "row", justifyContent: "space-between",
            padding: 3,
            marginVertical: 5,

        }
    });
    const totalPrice = data.reduce((total, item) => total + parseInt(item.price.replace('₹', ''), 10), 0);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>My Cart</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {/* Bottom-up section */}
            <View style={styles.bottomSection}>
                <View style={styles.couponContainer}>
                    <TextInput
                        style={styles.couponInput}
                        placeholder="Enter Coupon Code"
                    />
                    <TouchableOpacity style={styles.applyCouponButton}>
                        <Text style={styles.applyCouponButtonText}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%" }}>
                    <View style={styles.othertotals}>
                        <Text style={{
                            fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.sm,
                            color: Colors.textGray
                        }}>SubTotal: </Text>
                        <Text style={{fontFamily:Font["poppins-bold"]}}>₹ 1222</Text>
                    </View>
                    <View style={styles.othertotals}>
                        <Text style={{
                            fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.sm,
                            color: Colors.textGray
                        }}>Delivery Fee: </Text>
                        <Text style={{fontFamily:Font["poppins-bold"]}}> ₹ 25</Text>
                    </View>
                    <View style={styles.othertotals}>
                        <Text style={{
                            fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.sm,
                            color: Colors.textGray
                        }}>Discount: </Text>
                        <Text style={{fontFamily:Font["poppins-bold"]}}>₹ 12</Text>
                    </View>
                    <View style={{
                        display: "flex", flexDirection: "row", justifyContent: "space-between",
                        padding: 5,
                        marginVertical: 5,
                        borderTopWidth: 0.5
                    }}>
                        <Text style={{
                            fontFamily: Font["poppins-regular"],
                            fontSize: FontSize.sm,
                            color: Colors.textGray
                        }}>Total Amount: </Text>
                        <Text style={{fontFamily:Font["poppins-bold"] , fontSize:FontSize.lg , color:"green"}}>₹ 1299</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.processOrderButton} onPress={()=>{navigate.navigate("CheckOutScreen")}}>
                    <Text style={styles.processOrderButtonText}>Process to Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default MyCartScreen;
