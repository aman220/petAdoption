import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View, FlatList } from "react-native";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";

interface Category {
    id: string;
    name: string;
}


const FlashSale: React.FC = () => {
    const categories: Category[] = [
        { id: "1", name: "All" },
        { id: "2", name: "New" },
        { id: "3", name: "Popular" },
        { id: "4", name: "Parrots" },
        { id: "5", name: "Cat's" },
        { id: "6", name: "Dog's" },
        // Add more categories as needed
    ];
    const colorScheme = useColorScheme();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(categories[0].id);

    const styles = StyleSheet.create({
        container: {
            margin: 15,
            backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        title: {
            fontSize: FontSize.lg,
            fontFamily: Font["poppins-semiBold"],
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
        }, categoryList: {
            marginTop: Spacing.margin.sm,
            padding: 5,
        },
        categoryItem: {
            minWidth: 80,
            alignItems: "center",
            backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light,
            borderRadius: Spacing.borderRadius.lg,
            borderColor: Colors.textGray,
            elevation: 3,
            paddingVertical: Spacing.padding.sm,
            paddingHorizontal: Spacing.padding.sm,
            marginRight: Spacing.margin.sm,
        },
        categoryText: {
            color: colorScheme === 'dark' ? Colors.white : Colors.text,
            fontSize: FontSize.sm,
            fontFamily: Font["poppins-regular"],
        },
    });

    const [timeRemaining, setTimeRemaining] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    // Function to update the time remaining
    const updateTimeRemaining = () => {
        // Set your target date for the flash sale to end
        const targetDate = new Date("2025-12-31T00:00:00Z");

        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setTimeRemaining({ hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds });
    };

    useEffect(() => {
        const interval = setInterval(updateTimeRemaining, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);



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
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" }}>
                <Text style={styles.title}>Flash Sale</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: Spacing.margin.sm, color: colorScheme === 'dark' ? Colors.white : Colors.textGray }}>Closing in:</Text>
                    <View style={{ backgroundColor: Colors.primary, padding: 1, borderRadius: Spacing.borderRadius.sm, marginRight: Spacing.margin.sm }}>
                        <Text style={{ padding: 1, color: colorScheme === 'dark' ? Colors.white : Colors.white }}>{`${timeRemaining.hours}`}</Text>
                    </View>
                    <Text style={{ padding: 1, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>:</Text>
                    <View style={{ backgroundColor: Colors.primary, padding: 1, borderRadius: Spacing.borderRadius.sm, marginHorizontal: Spacing.margin.sm }}>
                        <Text style={{ padding: 1, color: colorScheme === 'dark' ? Colors.white : Colors.white }}>{`${timeRemaining.minutes}`}</Text>
                    </View>
                    <Text style={{ padding: 1, color: colorScheme === 'dark' ? Colors.white : Colors.text }}>:</Text>
                    <View style={{ backgroundColor: Colors.primary, padding: 1, borderRadius: Spacing.borderRadius.sm, marginLeft: Spacing.margin.sm }}>
                        <Text style={{ padding: 1, color: colorScheme === 'dark' ? Colors.white : Colors.white }}>{`${timeRemaining.seconds}`}</Text>
                    </View>
                </View>
            </View>
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
        </SafeAreaView>
    );
};



export default FlashSale;
