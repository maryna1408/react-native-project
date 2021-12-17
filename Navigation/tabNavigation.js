import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Components/Settings';
import MainPage from '../Components/MainPage';



const Tab = createBottomTabNavigator();

export default function tabNavigate() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="MainPage" component={MainPage}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}