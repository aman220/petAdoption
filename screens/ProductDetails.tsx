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
    FlatList // Import useColorScheme hook
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

interface Category {
    id: string;
    name: string;
}


const ProductDetails: React.FC = () => {
    const categories: Category[] = [
        { id: "1", name: "1+" },
        { id: "2", name: "2+" },
        { id: "3", name: "3+" },
        { id: "4", name: "4+" },
        { id: "5", name: "5+" },
        { id: "6", name: "6+" },
        // Add more categories as needed
    ];


    const colorScheme = useColorScheme();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0].id);
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
            
        }, categoryList: {
            marginTop: Spacing.margin.sm,
            padding: 5,
        },
        categoryItem: {
            alignItems: "center",
            backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white,
            borderRadius: Spacing.borderRadius.sm,
            borderColor: "#D3D3D3",
            padding: Spacing.padding.xs,
            marginRight: Spacing.margin.sm,
            borderWidth: 0.5,
            marginHorizontal: 5,
            minWidth: 50
        },
        categoryText: {
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
            fontSize: FontSize.base,
            fontFamily: Font["poppins-regular"],
        },
    });


    const renderCategoryItem = ({ item }: { item: Category }) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                selectedCategory === item.id && { backgroundColor: Colors.primary }, // Change background color for the selected category
            ]}
            onPress={() => setSelectedCategory(item.id === selectedCategory ? null : item.id)}
        >
            <Text style={[styles.categoryText, selectedCategory === item.id && { color: Colors.white }]}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray, fontSize: FontSize.base }}>
                        Dog's
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                        <Ionicons name='star' size={20} color={Colors.primary} />
                        <Text style={{ marginLeft: 5, fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray, fontSize: FontSize.base }}>4.8 Stars</Text>
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.xl, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Labrador Retirver</Text>
                </View>
                <View>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Dog Details</Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: colorScheme === 'dark' ? Colors.white : Colors.textGray }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid atque voluptatem expedita recusandae totam minus aut, deserunt ullam. Doloremque pariatur cumque ipsa vel praesentium nesciunt veniam! Sed doloribus dolor deleniti.</Text>
                </View>
                <View style={{ height: 1, backgroundColor: "#D3D3D3", marginTop: 5 }}></View>
                <View>
                    <View>
                        <FlatList
                            data={categories}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={renderCategoryItem}
                            contentContainerStyle={styles.categoryList}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProductDetails;
