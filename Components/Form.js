import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Form() {
    const [text, setValue] = useState('')
    const onChangeFunc = (text) => {
        setValue(text)
    }
  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChangeFunc} placeholder='Type your name...'></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderBottomWidth: 1,
        boderColor: 'black',
        marginVertical: 20,
        width: 300,
        fontSize: 16,
        fontFamily: 'sans-serif',
        letterSpacing: 1,
    }
});
