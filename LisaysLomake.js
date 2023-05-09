import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { Button } from '@rneui/themed';
import * as SQLite from 'expo-sqlite';
import Hotellilista from './Hotellilista';
import Formik from 'formik';
import Hotellit from './Hotellit';

//const db = SQLite.openDatabase('hotellitdb.db');

export default function LisaysLomake() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [web, setWeb] = useState();

  const [hotels, setHotels] = useState({
    title:'',
    image:'',
    description:'',
    price:'',
    web:'',
  });

  

{/* useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists course (id integer primary key not null, title text, image text, description text, price text, web text);');
    }, null, updateList); 
  }, []);

  // Save course
  const saveHotel = () => {
    db.transaction(tx => {
        tx.executeSql('insert into hotellit (title,image,description,price,web) values (?, ?, ?, ?,?);', [parseInt(price), title, image, description,web]);    
      }, null, updateList
    )
  }

  // Update courselist
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from hotellit;', [], (_, { rows }) =>
        setHotels(rows._array)
      ); 
    });
  }

  // Delete course
  const deleteHotel = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from hotellit where id = ?;`, [id]);
      }, null, updateList
    )    
  }*/}
  return (
    <View style={styles.container}>   
      <ImageBackground
        style={styles.background}
        source={require('./images/background2.jpg')}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold',  padding:30, marginBottom: 10, color: '#ffff' }}> Lisää hotelli: </Text>
        </View>
  
        <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal:20, marginLeft:30 }}
          type="text"
          placeholder=' Hotelli'
          onChangeText={(title) => setTitle(title)}
          value={title}
        />
        <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal:20, marginLeft:30 }}
          type="text"
          placeholder=' Kuvaus'
          onChangeText={(description) => setDescription(description)}
          value={description}
        />
        <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal:20, marginLeft:30 }}
          type="text"
          placeholder=' Hinta'
          onChangeText={(price) => setPrice(price)}
          value={price}
        />
        <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal:20, marginLeft:30 }}
          type="text"
          placeholder=' Verkkosivu'
          onChangeText={(web) => setWeb(web)}
          value={web}
        />
        <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal:20, marginLeft:30 }}
          type="text"
          placeholder=' Kuva'
          onChangeText={(image) => setImage(image)}
          value={image}
        />
        <Button
        onPress={(hotel) => setHotels(hotel)}
        buttonStyle={styles.button}
        title="Lisää"></Button>

      </ImageBackground>

    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  button: {
    backgroundColor: 'rgba(111, 190, 185, 2)',
    borderRadius: 8,
    marginLeft: 50,
    marginRight: 10,
    marginTop:10,
    width: 240,
    padding:15
    
  },

});