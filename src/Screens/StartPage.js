import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "../Styles/StartPage.styles";
import {useNavigation} from '@react-navigation/native'

export const StartPage = () => {
    const styles = useStyles();

    const navigation = useNavigation();
    const handleNavigate = (screen) => navigation.navigate(screen) 

    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.circle}>
                    <Text style={[styles.greenText, styles.boldText]} numberOfLines={1}>Cool vegan</Text>
                    <Text style={[styles.greenText, styles.boldText]} numberOfLines={2}>logo</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <View>
                    <Text style={[styles.whiteText, styles.boldText]} numberOfLines={1}>Don't Starve!</Text>
                    <Text style={[styles.whiteText, styles.boldText]} numberOfLines={2}>Find a Vegan Alternative</Text>
                </View>
                <View>
                    <Text style={[styles.whiteText, styles.normalText]} numberOfLines={5}>Let vegetarion deliciousness</Text>
                    <Text style={[styles.whiteText, styles.normalText]} numberOfLines={6}>twirl your paenus.</Text>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => handleNavigate('BarcodeScreen')}>
                        <Text style={styles.greenText}>Lets start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}