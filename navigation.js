import React from 'react';
import { FullInf } from './Components/FullInf';
import MainPage from './Components/MainPage';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} options={{title: 'Main Page'}}/>
            <Stack.Screen name="FullInf" component={FullInf} options={{title: 'Full Information'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}