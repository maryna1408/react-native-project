import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function MainBlock() {
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Hello, anonym!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500
    },
    mainText: {
        fontSize: 22,
        fontFamily: 'italic',
        letterSpacing: 1,
    }
});
