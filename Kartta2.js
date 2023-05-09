import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from '@rneui/base';

import * as Location from 'expo-location';

export default function App() {
const [text, setText] = useState();
const [location, setLocation] = useState(null);

 useEffect(()=> {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted'){
        Alert.alert('No permission to get location')
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
   })();
  }, []);



updateSearch = (search) => {
  this.setState({ search });
};
//api : AIzaSyAB5kHih56rFLj-6jql9r112xWbgcDouQk
  return (
    <View style={styles.container}>
      <SearchBar 
      style={{backgroundColor: 'white', padding:5}}
      lightTheme={true}
      placeholder='Etsi hotelli'
      value={text}
      onChangeText={(text) =>  setText(text)}
      ></SearchBar>

      <MapView style={styles.map}
      initialRegion={{ 
        latitude: 60.192059,
        longitude: 24.945831,
        latitudeDelta: 0.03,
        longitudeDelta: 0.09}}
      />
       <Marker
        coordinate={{
        latitude: 60.172250,
        longitude: 24.945452 }}
        title='Radisson Blu Plaza'/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});