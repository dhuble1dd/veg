import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../Styles/BarcodePage.styles";
import { scannedCode } from "../redux/reducer";


export const BarcodeScanner = () => {
    const styles = useStyles();
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const handleNavigate = (screen) => navigation.navigate(screen);

    const [reactivate, setReactivate] = useState(false)    

    const onSuccess = e => {
        dispatch(scannedCode(e.data));
        setReactivate(false);
        handleNavigate('ScannedScreen');
        
    }


    return (
        <View>
            <View style={styles.box1}>
                <View style={styles.marginT}>
                    <Text style={[styles.whiteText, styles.boldText]}>Take a picture of your</Text>
                    <Text style={[styles.whiteText, styles.boldText]}>foods barcode</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <QRCodeScanner
                    onRead={onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    reactivate={reactivate}
                    reactivateTimeout={1000}
                    //cameraContainerStyle={styles.camera}
                    //containerStyle={styles.camera}
                //cameraStyle={styles.camera}
                //topContent={
                //    <View>
                //        <Text style={styles.centerText}>
                //            Take a picture of your
                //            <Text>
                //                foods barcode
                //            </Text>
                //        </Text>

                //    </View>

                //}
                //bottomContent={
                //    <TouchableOpacity style={styles.buttonTouchable}>
                //        <Text style={styles.buttonText}>OK. Got it!</Text>
                //    </TouchableOpacity>
                //}
                />
            </View>
            <View style={styles.box3}>
                <TouchableOpacity style={styles.btn} onPress={() => setReactivate(true)}>
                    <Text style={[styles.greenText, styles.normalText]}>re</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}