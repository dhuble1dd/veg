import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { StartPage } from '../Screens/StartPage';
import { ScannedScreen } from '../Screens/ScannedScreen';
import { BarcodeScreen } from '../Screens/BarcodeScreen';
import { Bcscrn } from '../Screens/Bcscrn';


export const Navigation = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={StartPage} options={{headerShown: false}}/>
            <Stack.Screen name='BarcodeScreen' component={BarcodeScreen} options={{headerShown: false}}/>
            {/*<Stack.Screen name='BarcodeScreen' component={Bcscrn} options={{headerShown: false}}/>*/}
            <Stack.Screen name='ScannedScreen' component={ScannedScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}