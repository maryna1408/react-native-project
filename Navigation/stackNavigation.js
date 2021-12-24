import React from 'react';


import {createStackNavigator} from '@react-navigation/stack';
import { FullInf } from '../Components/FullInf';
import MainPage from '../Components/MainPage';


const Stack = createStackNavigator();

export default function stackNavigate() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }}/>
            <Stack.Screen name="FullInf" component={FullInf} options={{title: 'Full Information'}}/>
        </Stack.Navigator>
    )
}