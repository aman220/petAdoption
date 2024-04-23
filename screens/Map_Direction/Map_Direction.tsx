// Map_Direction.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, useColorScheme, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface CurrentLocation {
  latitude: number;
  longitude: number;
}

const Map_Direction: React.FC = () => {
  const colorScheme = useColorScheme();

  const [currentLocation, setCurrentLocation] = useState<CurrentLocation | null>(
    null
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    })();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? "black" : "white",
    },
    map: {
      flex: 1,
    },
    bottomCard: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: 16,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      elevation: 5,
      alignItems: 'center', // Center content horizontally
    },
    shopName: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center', // Center text horizontally
    },
    ownerName: {
      fontSize: 18,
      color: 'gray',
      marginBottom: 8,
      textAlign: 'center', // Center text horizontally
    },
    distance: {
      fontSize: 16,
      color: 'blue',
      marginBottom: 16,
    },
    shopImage: {
      width: 120,
      height: 120,
      resizeMode: 'cover',
      borderRadius: 60, // Make it circular
      marginBottom: 12,
    },
    shopAddress: {
      fontSize: 14,
      color: 'gray',
      marginBottom: 8,
      textAlign: 'center',
    },
  });

  const aligarhCoordinates = {
    latitude: 27.8974,
    longitude: 78.0880,
  };

  return (
    <View style={styles.container}>
      {currentLocation && (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
              }}
              title="Your Location"
              description="You are here"
            />

            <Marker
              coordinate={aligarhCoordinates}
              title="Aligarh"
              description="Selected Location"
              pinColor="red"
            />
          </MapView>

          <View style={styles.bottomCard}>
            <Image source={require("../../assets/images/avatar.jpeg")} style={{ ...styles.shopImage, width: 80, height: 80 }} />
            <Text style={styles.shopName}>Thakur Pet Shop</Text>
            <Text style={styles.ownerName}>Aman Raj Singh</Text>
            <Text style={styles.shopAddress}>123 Main Street, Aligarh</Text>
            <Text style={styles.distance}>Distance: 100 km</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Map_Direction;
