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
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from 'expo-blur';
import { Ionicons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";

interface Product {
  id: number;
  name: string;
  price: string;
  image: ImageSourcePropType;
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Dachshund',
    price: '$19.99',
    image: require('../assets/images/DogImage1.png'),
  },
  {
    id: 2,
    name: 'Golden Retriver',
    price: '$24.99',
    image: require('../assets/images/DogImage2.png'),
  },
  {
    id: 3,
    name: 'Labrador Retriver',
    price: '$19.99',
    image: require('../assets/images/DogImage3.png'),
  },
  {
    id: 4,
    name: 'Siberian Husky',
    price: '$24.99',
    image: require('../assets/images/DogImage4.png'),
  },
];

const Products: React.FC = () => {
  const colorScheme = useColorScheme();
  const nav = useNavigation();
  const numColumns = 2;
  const screenWidth = Dimensions.get('window').width;
  const columnWidth = screenWidth / numColumns;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      backgroundColor: colorScheme === 'dark' ? Colors.darkBackground : Colors.white,
    },
    productItem: {
      flexDirection: 'column',
      margin: 3,
      borderRadius: 10,
      backgroundColor:Colors.white,
      padding:3,
      elevation: 4, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    productImage: {
      width: columnWidth - 20,
      height: columnWidth - 20,
      borderRadius: 10,
    },
    productName: {
      fontSize: FontSize.lg,
      fontFamily: Font["poppins-semiBold"],
      marginTop: 5,
      color: colorScheme === 'dark' ? Colors.white : Colors.text,
    },
    productPrice: {
      fontSize: FontSize.base,
      color: colorScheme === 'dark' ? Colors.white : Colors.text,
    },
  });

  const renderProductItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => nav.navigate("DetailsScreen")}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <BlurView intensity={100} style={{ position: "absolute", right: 10, top: 10, padding: 5, borderRadius: 10, opacity: 6 }}>
        <TouchableOpacity>
          <Ionicons name='heart-outline' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
        </TouchableOpacity>
      </BlurView>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
};

export default Products;
