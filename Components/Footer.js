import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default function Footer() {



  return (
    <View style={styles.footerContainer}>
        <Text style={styles.logo}>LOGO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
        paddingVertical: 43,
    },
    logo: {
        color: 'black',
        fontSize: 30,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',

    }
});
