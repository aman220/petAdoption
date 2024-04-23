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
    FlatList, // Import useColorScheme hook
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
import { useNavigation } from "@react-navigation/native";


interface Item {
    id: string;
    title: string;
    description: string;
    size: string;
    price: string;
    image: any;
}

const All_Orders: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigate = useNavigation();
    const [selectedTab, setSelectedTab] = useState("Active");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        tabText: {
            fontSize: FontSize.lg,
        },
        listItem: {
            backgroundColor: 'white',
            marginTop: 20,
            height: 140,
            flexDirection: 'row',
            borderRadius: 8,
            overflow: 'hidden',
        },
    });

    const handleTabPress = (tab: string) => {
        setSelectedTab(tab);
    };

    const [data, setData] = useState<Item[]>([
        {
            id: '1',
            title: 'Dachshund',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../assets/images/DogImage1.png'),
        },
        {
            id: '2',
            title: 'Siberian Huskey',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../assets/images/DogImage3.png'),
        }, {
            id: '3',
            title: 'Golden Retriver',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../assets/images/DogImage5.png'),
        },
        // Add more items as needed
    ]);


    const renderItem = ({ item }: { item: Item }) => (
        <>
            <TouchableOpacity style={styles.listItem} >
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
                            <TouchableOpacity style={{ backgroundColor: Colors.primary, padding: 5, borderRadius: Spacing.borderRadius.lg } } onPress={()=>{navigate.navigate("TrackOrder")}}>
                                <Text style={{ color: Colors.white, paddingHorizontal: 4 }}>Track Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={{ borderWidth: 0.5, width: "100%", borderColor: Colors.light, marginTop: 10 }}></View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginTop: 40, margin: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>My Orders</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10, marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => handleTabPress("Active")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Active" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Active' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Active</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress("Completed")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Completed" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Completed' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Completed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleTabPress("Cancel")}>
                        <Text style={[styles.tabText, { color: selectedTab === "Cancel" ? Colors.primary : Colors.textGray, fontFamily: selectedTab === 'Cancel' ? Font["poppins-semiBold"] : Font["poppins-regular"], }]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, width: "100%", borderColor: Colors.light }}></View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView >
    );
};

export default All_Orders;
