import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View,  ImageBackground } from 'react-native';
import { Button } from '@rneui/themed';
import {TextInput} from "@react-native-material/core";
import { Formik } from "formik";
import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('hotelsdb.db');

export default function LisaysLomakeModal({ addHotel }) {
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [web, setWeb] = useState('');
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('create table if not exists hotels (id integer primary key not null, title text, image text, description text, price text, web text);');
        }, null, updateList);
    }, []);

    const saveHotel = () => {
        db.transaction(tx => {
            tx.executeSql('insert into hotels (title,image,description,price,web) values (?, ?, ?, ?,?);', [title, image, description, parseInt(price), web]);
        }, null, updateList
        )
    }


    const updateList = () => {
        db.transaction(tx => {
            tx.executeSql('select * from hotels;', [], (_, { rows }) =>
                setHotels(rows._array)
            );
        });
    }



    return (

        <View style={styles.container}>

            <ImageBackground
                style={styles.background}
                source={require('./images/background2.jpg')}
            >
                <View>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', padding: 30, marginBottom: 10, color: '#ffff' }}> Lisää hotelli: </Text>
                </View>
                <Formik
                    initialValues={{ title: '', image: '', description: '', price: '', web: '' }}
                    onSubmit={(values) => {
                        addHotel(values);
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal: 20, marginLeft: 30 }}
                                type="text"
                                placeholder=' Hotelli'
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                            />
                            <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal: 20, marginLeft: 30 }}
                                type="text"
                                placeholder=' Kuvaus'
                                onChangeText={props.handleChange('description')}
                                value={props.values.description}
                            />
                            <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal: 20, marginLeft: 30 }}
                                type="text"
                                placeholder=' Hinta'
                                onChangeText={props.handleChange('price')}
                                value={props.values.price}
                            />
                            <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal: 20, marginLeft: 30 }}
                                type="text"
                                placeholder=' Verkkosivu'
                                onChangeText={props.handleChange('web')}
                                value={props.values.web}

                            />
                            <TextInput style={{ width: 290, marginBottom: 20, marginHorizontal: 20, marginLeft: 30 }}
                                type="text"
                                placeholder=' Kuva'
                                onChangeText={props.handleChange('image')}
                                value={props.values.image}
                            />
                            <Button
                                onPress={() => { props.handleSubmit(); saveHotel(); }}
                                buttonStyle={styles.button}
                                title="Lisää"></Button>
                        </View>
                    )}
                </Formik>
            </ImageBackground>

        </View>
    )
}
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
        marginTop: 10,
        width: 240,
        padding: 15

    },

});