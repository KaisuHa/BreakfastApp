import React from 'react';
import { View, Text, ImageBackground,  StyleSheet} from 'react-native';



export default function HomeScreen() {
    return (
        <View style={{marginBottom: 20}}>
            <ImageBackground
                style={styles.background}
                source={require('./images/background2.jpg')}
            >
                <View>
                    <Text style={styles.head}>Hotelliaamupalat Helsinki</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.9,
    },
    head: {
        textAlign: 'center',
        marginTop: 100,
        fontSize: 40,
        color: '#ffffff'
    }
});
    