
import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';;
import Home from './Home';
import Hotellit from './Hotellit';
import Kartta from './Kartta';


const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Header backgroundColor='rgba(111, 195, 180, 1)'></Header>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } if (route.name === 'Hotellit') {
              iconName = focused ? 'list' : 'list-outline';
            }
            if (route.name === 'Kartta') {
              iconName = focused ? 'location-outline' : 'location-outline'
            }
            if (route.name === 'Lisäys') {
              iconName = focused ? 'add-circle-outline' : 'add-circle-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgba(111, 195, 180, 1)',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            shadowOpacity: 0.70,
            shadowColor: 'black'
          }

        })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Hotellit" component={Hotellit} options={{ headerShown: false }} />
        <Tab.Screen name="Kartta" component={Kartta} options={{ headerShown: false }} />
      </Tab.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});