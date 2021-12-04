import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function Form({addHandler}) {
    const [text, setValue] = useState('')
    const onChangeFunc = (text) => {
        setValue(text)
    }
  return (
    <View style={styles.form}>
        <TextInput style={styles.input} onChangeText={onChangeFunc} placeholder='Type your task...'/>
        <Button title='Add' onPress={() => addHandler(text)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        fontSize: 16,
        fontFamily: 'sans-serif',
        letterSpacing: 1,
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        margin: 30,
    },
});
