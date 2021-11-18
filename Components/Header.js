import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';
export default function Header() {
  return (
    <View style={styles.headerContainer}>
        <View style={styles.logo}>Logo</View>
        <Form></Form>
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
        justifyContent: 'space-between',
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
