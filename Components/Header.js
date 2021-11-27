import React from 'react';
import { StyleSheet, View } from 'react-native';
export default function Header() {

  return (
    <View style={styles.headerContainer}>
        <View style={styles.logo}>Logo</View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 120,
        width: '100%',
        backgroundColor: 'pink',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        color: 'black',
        fontSize: 40,
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',

    }
});
