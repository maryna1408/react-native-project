import React from 'react';


import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import stackNavigate from './stackNavigation';
import Settings from '../Components/Settings';


const Tab = createBottomTabNavigator();

export default function tabNavigate() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="MainPage" component={stackNavigate} options={{ headerShown: false }}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
    )
}