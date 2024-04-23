import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import Colors from "../constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import { useNavigation } from "@react-navigation/native";

interface Category {
    name: string;
    icon: 'dog' | 'cat' | 'bird' | 'rabbit'; // Valid icon names recognized by MaterialCommunityIcons
}

const Categories: React.FC = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    

    const petCategories: Category[] = [
        { name: 'Dog', icon: 'dog' },
        { name: 'cat', icon: 'cat' },
        { name: 'Birds', icon: 'bird' },
        { name: 'Rabbit', icon: 'rabbit' },
    ];

    const colorScheme = useColorScheme();
    const nav = useNavigation();

    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 15,
        },
        categoryBtn: {
            height: 80,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: Spacing.borderRadius.xxl,
            marginTop:10,
        },
        categoryBtnName: {
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
            fontSize: FontSize.sm,
            marginTop: 5,
            fontWeight: 'bold',
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color:colorScheme === 'dark' ? Colors.white : Colors.text }}>Category</Text>
                <TouchableOpacity   onPress={() => nav.navigate("AllProducts")}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color:colorScheme === 'dark' ? Colors.white : Colors.textGray }}>See All</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                {petCategories.map((item, index) => (
                    <View key={'pet' + index} style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => setSelectedCategoryIndex(index)}
                            style={[
                                styles.categoryBtn,
                                {
                                    backgroundColor:
                                        selectedCategoryIndex === index
                                            ? Colors.primary
                                            : colorScheme === 'dark' ? Colors.textGray : Colors.light,
                                            
                                },
                            ]}>
                            <MaterialCommunityIcons
                                name={item.icon}
                                size={35}
                                color={
                                    selectedCategoryIndex === index
                                        ? Colors.white
                                        : Colors.primary
                                }
                            />
                        </TouchableOpacity>
                        <Text style={styles.categoryBtnName}>{item.name}</Text>
                    </View>
                ))}
            </View>
           
        </SafeAreaView>
    );
};

export default Categories;
