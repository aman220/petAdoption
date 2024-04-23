import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Appearance,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';


// Create a ThemeContext
const ThemeContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => { },
});

// type Props = NativeStackScreenProps<RootStackParamList, "SearchScreen">;

const SearchScreen: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [city, setCity] = useState<string>('');
  const [county, setCounty] = useState<string>('');
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        // Use reverse geocoding to get city and county from latitude and longitude
        let address = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        if (address.length > 0) {
          const currentCity = address[0].city || '';
          const currentCounty = address[0].region || '';
          setCity(currentCity);
          setCounty(currentCounty);
        }
      }
    })();
  }, []);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };



  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <SafeAreaView style={{marginTop:40}}>
        {/* <ScrollView> */}
          <View
            style={{
              paddingHorizontal: Spacing.padding.base,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: FontSize.sm,
                    fontFamily: Font["poppins-semiBold"],
                    color: Colors.textGray,
                  }}
                >
                  Location
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity>
                    <Ionicons name='location-sharp' size={24} color={Colors.primary} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: FontSize.lg,
                      fontFamily: Font["poppins-semiBold"],
                      color: isDarkMode ? Colors.white : Colors.text,
                      marginLeft: 5,
                    }}
                  >
                     {city ? `${city}, ${county}` : 'Searching...'}
                  </Text>
                  <TouchableOpacity>
                    <Ionicons name='chevron-down' size={24} color={isDarkMode ? Colors.white : Colors.text} />
                  </TouchableOpacity>
                </View>

              </View>

              <TouchableOpacity>
                <View
                  style={{
                    height: 50,
                    width: 50,
                    backgroundColor: isDarkMode ? "#333" : Colors.light,
                    borderRadius: Spacing.borderRadius.xl,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <MaterialCommunityIcons name="bell" size={25} color={isDarkMode ? "#fff" : Colors.primary} />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginVertical: Spacing.margin.xxl,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: isDarkMode ? Colors.textGray : Colors.light,
                  padding: Spacing.padding.base,
                  borderRadius: Spacing.borderRadius.base,
                  width: "80%",
                  height: 60,
                }}
              >
                <Ionicons name='search' size={24} color={isDarkMode ? Colors.white : Colors.text} />
                <TextInput
                  style={{
                    fontSize: FontSize.base,
                    color: isDarkMode ? Colors.white : Colors.text,
                    marginLeft: Spacing.margin.base,
                  }}
                  placeholder='Search'
                  placeholderTextColor={isDarkMode ? Colors.white : Colors.text}
                />
              </View>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 60,
                  backgroundColor: Colors.primary,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: Spacing.borderRadius.base,
                }}
              >
                <Ionicons name='filter-outline' size={24} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
