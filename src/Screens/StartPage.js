import React, { useCallback, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useStyles } from "../Styles/StartPage.styles";
import { useNavigation } from '@react-navigation/native';
import strings from "../Lng/localization";
import { ModalLng } from "../Lng/ModalLng";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const StartPage = () => {
    const styles = useStyles();

    const navigation = useNavigation();
    const handleNavigate = useCallback((screen) => navigation.navigate(screen))

    
    

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View style={styles.box1}>
                    <ModalLng />
                    <View style={styles.circle}>
                        <Text style={[styles.greenText, styles.boldText]} numberOfLines={1}>{strings.logo1}</Text>
                        <Text style={[styles.greenText, styles.boldText]} numberOfLines={2}>{strings.logo2}</Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View>
                        <Text style={[styles.whiteText, styles.boldText]} numberOfLines={1}>{strings.head1}</Text>
                        <Text style={[styles.whiteText, styles.boldText]} numberOfLines={2}>{strings.head2}</Text>
                    </View>
                    <View>
                        <Text style={[styles.whiteText, styles.normalText]} numberOfLines={5}>{strings.main1}</Text>
                        <Text style={[styles.whiteText, styles.normalText]} numberOfLines={6}>{strings.main2}</Text>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity onPress={() => handleNavigate('BarcodeScreen')}>
                            <Text style={styles.greenText}>{strings.btn}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Provider>

    )
}