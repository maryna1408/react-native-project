import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { gStyles } from '../styles/styles';

export function FullInf({route}) {


    return (
        <View>
            <Text style={gStyles.name}>{route.params.name}</Text>
            <Text style={gStyles.full}>{route.params.full}</Text>
        </View>
    )
} 