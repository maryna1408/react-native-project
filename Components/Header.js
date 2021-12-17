import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Header() {

  return (
    <View style={styles.headerContainer}>
        <View style={styles.logo}><Text>News</Text></View>
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
      fontSize: 30,
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',

    }
});
