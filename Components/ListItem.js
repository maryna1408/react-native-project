import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function ListItem({item}) {

  return (
    <TouchableOpacity>
        <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
        textAlign: 'center',
        width: '60%',
        marginLeft: '20%',
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
    }
});
