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
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

interface Item {
    id: string;
    title: string;
    description: string;
    size: string;
    price: string;
    image: any;
}

const CheckOutScreen: React.FC = () => {
    const navigate = useNavigation();
    const colorScheme = useColorScheme();
    const [data, setData] = useState<Item[]>([
        {
            id: '1',
            title: 'Siberian Huskey',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage1.png'),
        },
        {
            id: '2',
            title: 'Golden Retriver',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage2.png'),
        }, 
        {
            id: '3',
            title: 'Dachshund',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            size: 'XL',
            price: '₹2000',
            image: require('../../assets/images/DogImage3.png'),
        },
        // Add more items as needed
    ]);

    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.listItem}>
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
                </View>
            </View>
        </View>
    );

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
            // elevation: 2,
            // shadowColor: '#000',
            // shadowOpacity: 0.2,
            // shadowRadius: 2,
            // marginBottom: 5,
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
    });

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
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>CheckOut</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{marginVertical:15}}>
                        <Text style={{fontFamily:Font["poppins-regular"], fontSize:FontSize.lg}}>Shipping Address</Text>
                        <View style={{backgroundColor:Colors.white , padding:5 , borderRadius:Spacing.borderRadius.base}}>
                            <View style={{display:"flex",flexDirection:"row"}}>
                                <Ionicons name="location-outline" size={20}></Ionicons>
                                <Text style={{fontFamily:Font["poppins-semiBold"] , marginLeft:5}}>Home</Text>
                            </View>
                            <View style={{display:"flex", flexDirection:"row" , justifyContent:"space-between" , marginLeft:24}}>
                                <Text style={{color:Colors.textGray , fontFamily:Font["poppins-regular"] , fontSize:FontSize.sm}}>shiva colony Dhnaipur {"\n"}Aligarh 202001</Text>
                                <TouchableOpacity style={{marginRight:10}} onPress={()=>{navigate.navigate("ChangeAddress")}}>
                                    <Text style={{fontFamily:Font["poppins-bold"] , color:Colors.primary}}>CHANGE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{width:"100%" , height:1 , backgroundColor:Colors.light , marginVertical:10}}></View>
                        <Text style={{fontFamily:Font["poppins-regular"], fontSize:FontSize.lg}}>Choose Shipping Type</Text>
                        <View style={{backgroundColor:Colors.white , padding:5 , borderRadius:Spacing.borderRadius.base}}>
                            <View style={{display:"flex",flexDirection:"row"}}>
                                <MaterialCommunityIcons name="package" size={20}></MaterialCommunityIcons>
                                <Text style={{fontFamily:Font["poppins-semiBold"] , marginLeft:5}}>Econmey</Text>
                            </View>
                            <View style={{display:"flex", flexDirection:"row" , justifyContent:"space-between" , marginLeft:24}}>
                                <Text style={{color:Colors.textGray , fontFamily:Font["poppins-regular"] , fontSize:FontSize.sm}}>Estimated Arrive 25 Januray</Text>
                                <TouchableOpacity style={{marginRight:10}}>
                                    <Text style={{fontFamily:Font["poppins-bold"] , color:Colors.primary}}>CHANGE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.processOrderButton}>
                    <Text style={styles.processOrderButtonText}>Continue to Payment</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CheckOutScreen;
