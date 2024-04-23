import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

const Product_Review: React.FC = () => {
    const nav = useNavigation();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.light,
            
        },
        ratingContainer: {
            margin: 15,
            backgroundColor: Colors.white,
            padding: 15,
            borderRadius: 10,
        },
        ratingRow: {
            flexDirection: "row",
            marginVertical: 10,
        },
        progressBar: {
            width: "70%",
            backgroundColor: Colors.light,
            borderRadius: 4,
        },
        filledProgressBar: {
            height: 24,
            borderRadius: 4,
        },
    });

    const ratings = [
        { value: 5, percentage: 75, count: 1300, color: "lightgreen" },
        { value: 4, percentage: 15, count: 200, color: "#9dff5c" },
        { value: 3, percentage: 35, count: 100, color: "#FFBF00" },
        { value: 2, percentage: 25, count: 12, color: "#FFD580" },
        { value: 1, percentage: 15, count: 10, color: "#FF4433" }
    ];


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ratingContainer}>
                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg }}>
                    Customer Review
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.xxl }}>4.7</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginLeft: 5 }}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <MaterialCommunityIcons
                                key={index}
                                name="heart"
                                size={20}
                                color="lightgreen"
                                style={{ marginLeft: 5 }}
                            />
                        ))}
                        <Text
                            style={{
                                fontFamily: Font["poppins-regular"],
                                fontSize: FontSize.xs,
                                marginTop: 5,
                                marginLeft: 5,
                                color: Colors.textGray,
                            }}
                        >
                            13500 ratings
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                    {ratings.map((rating, index, color) => (
                        <View key={index} style={styles.ratingRow}>
                            <Text style={{ fontFamily: Font["poppins-bold"], marginRight: 10 }}>{rating.value}</Text>
                            <View style={styles.progressBar}>
                                <View
                                    style={[
                                        styles.filledProgressBar,
                                        {
                                            width: `${rating.percentage}%`,
                                            backgroundColor: rating.color,
                                            borderTopRightRadius: 8,
                                            borderBottomRightRadius: 8
                                        },
                                    ]}
                                />
                            </View>
                            <Text style={{ fontFamily: Font["poppins-bold"], marginRight: 10, marginLeft: 10 }}>
                                {rating.percentage}%
                            </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"], marginRight: 5, fontSize: FontSize.xs, alignSelf: "center" }}>
                                {rating.count}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ratingContainer}>
                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg }}>Reviews</Text>
                <View style={{ flexDirection: "row", alignItems: "baseline" , gap:20}}>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], paddingVertical: 10 }}>Verifed</Text>

                    <Text style={{ fontFamily: Font["poppins-semiBold"], paddingVertical: 10 }}>All ratings</Text>

                </View>
                <View style={{ height: 1.5, width: "100%", backgroundColor: Colors.light }}></View>

                {/* review starrt */}

                <View >
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Aman raj Singh</Text>

                            <Text style={{ color: Colors.textGray }}>Jan 11</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            {[1, 2, 3, 4, 5].map((index) => (
                                <MaterialCommunityIcons
                                    key={index}
                                    name="heart"
                                    size={20}
                                    color="lightgreen"
                                />
                            ))}
                        </View>

                        <View>
                            <Text style={{ fontFamily: Font["poppins-bold"], marginTop: 10, fontSize: FontSize.base }}>My Name is antony gonjaswish maen duniya maen akela hu</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"], marginVertical: 10 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit in, repellendus ad voluptatum fugiat quo esse possimus molestiae accusantium? Enim?</Text>
                        </View>
                    </View>

                    <View style={{ height: 1.5, width: "100%", backgroundColor: Colors.light }}></View>

                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Aman raj Singh</Text>
                            <Text style={{ color: Colors.textGray }}>Jan 11</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            {[1, 2, 3,].map((index) => (
                                <MaterialCommunityIcons
                                    key={index}
                                    name="heart"
                                    size={20}
                                    color="lightgreen"
                                />
                            ))}
                        </View>

                        <View>
                            <Text style={{ fontFamily: Font["poppins-bold"], marginTop: 10, fontSize: FontSize.base }}>My Name is antony gonjaswish maen duniya maen akela hu</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"], marginVertical: 10 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit in, repellendus ad voluptatum fugiat quo esse possimus molestiae accusantium? Enim?</Text>
                            <View style={{padding:10 , backgroundColor:Colors.light , borderRadius:10}}>
                                <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
                                    <Text style={{fontFamily:Font["poppins-semiBold"]}}>Murphy</Text>
                                    <Text style={{color:Colors.textGray}}>jan 12</Text>
                                </View>
                                <Text style={{fontFamily:Font["poppins-regular"]}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut culpa saepe repellat esse recusandae, dicta laborum illo eligendi rerum?</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Product_Review;
