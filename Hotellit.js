import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Linking, ImageBackground, Modal } from 'react-native';
import { Card, Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LisaysLomakeModal from './LisaysLomakeModal';
import EditLomakeModal from './EditLomakeModal';


export default function Hotellit() {
  const [modalOpen, setModalOpen] = useState(false);

  const [hotels, setHotels] = useState(
    [
      {
        id: '1',
        title: 'Radisson Blu Aleksanteri',
        image: 'https://media.radissonhotels.net/image/radisson-blu-aleksanteri-hotel-helsinki/exterior/16256-116501-f63812400_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
        description: 'Super Breakfast Buffet',
        price: '25 €',
        web: 'https://www.radissonhotels.com/fi-fi/hotellit/radisson-blu-helsinki-aleksanteri'
      },
      {
        id: '2',
        title: 'Radisson Blu Plaza',
        image: 'https://media.radissonhotels.net/image/radisson-blu-plaza-hotel-helsinki/breakfastarea/16256-113856-f66998418_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
        description: 'Super Breakfast Buffet',
        price: '25 €',
        web: 'https://www.radissonhotels.com/fi-fi/hotellit/radisson-blu-helsinki'
      },
      {
        id: '3',
        title: 'Radisson Blu Seaside',
        image: 'https://media.radissonhotels.net/image/radisson-blu-seaside-hotel-helsinki/breakfast-area/16256-114028-f62728344_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
        description: 'Super Breakfast Buffet',
        price: '25 €',
        web: 'https://www.radissonhotels.com/fi-fi/hotellit/radisson-blu-helsinki-seaside'
      },
      {
        id: '4',
        title: 'Radisson Blu Royal',
        image: 'https://media.radissonhotels.net/image/radisson-blu-royal-hotel-helsinki/exterior/16256-114029-f65015604_3xl.jpg?impolicy=CustomCrop&cwidth=800&cheight=610',
        description: 'Super Breakfast Buffet',
        price: '25 €',
        web: 'https://www.radissonhotels.com/fi-fi/hotellit/radisson-blu-helsinki-royal'
      },
      {
        id: '5',
        title: 'Hotel U14',
        image: 'https://hotelu14.fi/media/pages/images/574998492-1637322028/23-512x-q85.png',
        description: 'Buffet',
        price: '34 €',
        web: 'https://hotelu14.fi/?gclid=Cj0KCQjwlumhBhClARIsABO6p-zgx6Gcugm644EsBhOKVD9Ip86QKV8aqVM1rPf219hcldxFrATI24gaAkLbEALw_wcB'
      },
      {
        id: '6',
        title: 'Scandic Marski',
        image: 'https://www.scandichotels.fi/imageVault/publishedmedia/94cn5m53n7po305cceg7/Marski-by-Scandic-breakfast-1.jpg',
        description: 'Buffet',
        price: '24 €',
        web: 'https://www.scandichotels.fi/hotellit/suomi/helsinki/marski-by-scandic?&cmpid=ppc_BH2d&s_kwcid=AL!7589!3!650991744158!e!!g!!marski&gclid=Cj0KCQjwlumhBhClARIsABO6p-wQZWjQpaEk02D52hMisxcm8conf4VbDYr5fYY2f9kJdQ30akHoOscaAnczEALw_wcB&gclsrc=aw.ds'
      },
      {
        id: '7',
        title: 'Scandic Grand Central',
        image: 'https://www.scandichotels.fi/imageVault/publishedmedia/xbmax0n5usq0hehbjslj/scandic-grand-central-helsinki-breakfast-buffet-de.jpg',
        description: 'Buffet',
        price: '19 €',
        web: 'https://www.scandichotels.fi/hotellit/suomi/helsinki/scandic-grand-central-helsinki?&cmpid=ppc_BH2d&s_kwcid=AL!7589!3!650991744659!e!!g!!grand%20central%20helsinki&gclid=Cj0KCQjwlumhBhClARIsABO6p-wtOxQRindvlkncdvgT58jOqaOdn0RafzIofdrVjRvFKNR9gVN4bV8aAkCrEALw_wcB&gclsrc=aw.ds'
      }
    ]
  )

  const addHotel = (hotels) => {
    hotels.id = Math.random().toString();
    setHotels((currentHotels) => {
      return [hotels, ...currentHotels]

    });
    setModalOpen(false);
  }

  const editHotel = () => {
    setHotels((currentHotels) => {
      return [hotels, ...currentHotels]

    });
    setModalOpen(false);
  }

  return (
    <View style={{ marginBottom: 20 }}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={{ flex: 1 }} >
          <Ionicons name="close-outline"
            color='white'
            style={{ ...styles.modal, ...styles.modalClose }}
            size={50}
            onPress={() => setModalOpen(false)}>
          </Ionicons>
          <LisaysLomakeModal addHotel={addHotel} />
        </View>
      </Modal>
      <ImageBackground
        style={styles.background}
        source={require('./images/background2.jpg')}>

        <Ionicons name="add-circle-outline"
          style={styles.modal}
          color='rgba(111, 190, 180, 1)'
          size={50}
          onPress={() => setModalOpen(true)}>
        </Ionicons>

        <FlatList
          data={hotels}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.cards}>
              <Card.Title >{item.title}</Card.Title>
              <Card.Divider />
              <Card.Image
                style={styles.cardimage}
                source={{
                  uri: item.image
                }}
              />
              <Text style={styles.text}>
                {item.description}
              </Text>
              <Text style={styles.text}> {item.price} </Text>
              <Button
                buttonStyle={styles.button}
                title="Go To Website"
                onPress={() => { Linking.openURL(item.web) }}
              />
              <View style={{ marginTop: 10 }}>
                <Button
                  buttonStyle={styles.button}
                  title='Edit'
                  value={item.id}
                  onPress={() => editHotel()}

                ></Button>

              </View>
            </Card>

          )}

        />
      </ImageBackground>

    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(111, 190, 180, 1)',
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  cards: {
    borderRadius: 10,
    backgroundColor: 'white'
  },

  cardimage: {
    padding: 50,
    borderRadius: 8
  },

  text: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',

  },
  otsikko: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 30
  },
  bar: {
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 8,
    shadowOpacity: 0.70,

  },
  background: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  modal: {
    textAlign: 'right',
    borderWidth: 1,
    padding: 10,

  },
  modalClose: {
    textAlign: 'center',
    backgroundColor: 'black'

  }

});
