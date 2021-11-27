import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';

export function FullInf({navigation}) {

    const loadScene = () => {
        navigation.goBack();
    }

    return (
        <View>
        <Text>Hi!</Text>
        <Button title='Open page' onPress={loadScene}/>
        </View>
    )
} 