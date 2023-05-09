import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar } from '@rneui/base';

//api key : oCUBCOgAJgmfNeARWtOkL36fuuETAMgM
export default function Kartta() {
  const [mapRegion, setMapRegion] = useState({
    latitude: 60.192059,
    longitude: 24.945831,
    latitudeDelta: 0.03,
    longitudeDelta: 0.09
  })
  const [text, setText] = useState('');


  useEffect(() => {
    const userLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('No permission to get location');
      } else {
        try {
          let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
          setMapRegion({ ...mapRegion, latitude: location.coords.latitude, longitude: location.coords.longitude });
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    userLocation();
  }, []);


  const getAddress = (text) => {
    fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=oCUBCOgAJgmfNeARWtOkL36fuuETAMgM&location=${text}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const { lat, lng } = data.results[0].locations[0].latLng;
        setMapRegion({ ...mapRegion, latitude: lat, longitude: lng })
      })
      .catch(error => console.error('API call failed', error.message))

  }
  return (

    <View style={styles.container}>
      <SearchBar
        style={{ backgroundColor: 'white', padding: 5 }}
        lightTheme={true}
        placeholder='Etsi hotelli'
        value={text}
        onChangeText={(text) => setText(text)}
        onSubmitEditing={getAddress}
      ></SearchBar>

      <MapView style={styles.map}
        region={mapRegion}
      >
        <Marker
          coordinate={{
            latitude: 60.164085,
            longitude: 24.933334
          }}
          title='Radisson Blu Aleksanteri' />
        <Marker
          coordinate={{
            latitude: 60.172250,
            longitude: 24.945452
          }}
          title='Radisson Blu Plaza' />
        <Marker
          coordinate={{
            latitude: 60.162227,
            longitude: 24.924117
          }}
          title='Radisson Blu Seaside' />
        <Marker
          coordinate={{
            latitude: 60.167904,
            longitude: 24.929624
          }}
          title='Radisson Blu Royal' />
        <Marker
          coordinate={{
            latitude: 60.164976,
            longitude: 24.951120
          }}
          title='Hotel U14' />
        <Marker
          coordinate={{
            latitude: 60.167586,
            longitude: 24.941203
          }}
          title='Scandic Marski' />
        <Marker
          coordinate={{
            latitude: 60.172125,
            longitude: 24.942739
          }}
          title='Scandic Grand Central' />


      </MapView>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%"
  },

});