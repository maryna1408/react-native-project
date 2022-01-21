import React from 'react';


import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import stackNavigate from './stackNavigation';
import Notifications from '../Components/Notifications';


const Tab = createBottomTabNavigator();

export default function tabNavigate() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="News" component={stackNavigate} options={{ headerShown: false }}/>
                <Tab.Screen name="Notifications" component={Notifications}/>
            </Tab.Navigator>
    )
}