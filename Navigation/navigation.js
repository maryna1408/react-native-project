import React from 'react';
import { FullInf } from '../Components/FullInf';
import MainPage from '../Components/MainPage';
import Settings from '../Components/Settings';
import Notifications from '../Components/Notifications';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export function stackNavigate() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainPage} options={{ headerShown: false }}/>
            <Stack.Screen name="FullInf" component={FullInf} options={{title: 'Full Information'}}/>
        </Stack.Navigator>
    )
}


export function tabNavigate() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="MainPage" component={stackNavigate} options={{ headerShown: false }}/>
                <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
    )
}

export default function drawerNavigate() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="MainPage">
                <Drawer.Screen name="Home" component={tabNavigate}/>
                <Drawer.Screen name="Notifications" component={Notifications}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

