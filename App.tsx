import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Import available layouts
import VerticalStack from "./layouts/VerticalStack";
import VerticalStack2 from "./layouts/VerticalStack2";
import HorizontalStack from "./layouts/HorizontalStack";
import JustifyContent from "./layouts/JustifyContent";
import AlignItems from "./layouts/AlignItems";
import Grid from "./layouts/Grid";
import Absolute from "./layouts/Absolute";
import HeaderFooter from "./layouts/HeaderFooter";
import SuperGrid from "./layouts/SuperGrid";
import { StartPage } from './src/Screens/StartPage';
import { NavigationContainer } from '@react-navigation/native'
import { Navigation } from './src/Navigation/Navigation';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
//import "react-native-gesture-handler";
export default function App() {
    return (
    <Provider store={store}>
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    </Provider>

    );
}