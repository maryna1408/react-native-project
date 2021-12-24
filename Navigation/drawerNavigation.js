import React from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import tabNavigate from './tabNavigation';
import Notifications from '../Components/Notifications';


const Drawer = createDrawerNavigator();

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