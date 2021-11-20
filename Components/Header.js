import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './Form';
export default function Header() {


  const addHandler = (text) => {
    return (
      <Text>Hello, {text}!</Text>
    )
  }

  return (
    <View style={styles.headerContainer}>
        <View style={styles.logo}>Logo</View>
        <Form addHandler={addHandler}/>
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
