import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Kartta() {
    return (
        <MapView style = {{ flex:1 }}
        initialRegion={{
          latitude: 60.192059,
          longitude: 24.945831,
          latitudeDelta: 0.03,
          longitudeDelta: 0.02
        }}
        >
       </MapView>  
    );
};
const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
  });