import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../Styles/BarcodePage.styles";
import { scannedCode } from "../redux/reducer";
import strings from "../Lng/localization";


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
                    <Text style={[styles.whiteText, styles.boldText]}>{strings.bc1}</Text>
                    <Text style={[styles.whiteText, styles.boldText]}>{strings.bc2}</Text>
                </View>
            </View>
            <View style={styles.box2}>
            <QRCodeScanner
                onRead={onSuccess}
                flashMode={RNCamera.Constants.FlashMode.auto}
                reactivate={true}
                reactivateTimeout={1000}
                checkAndroid6Permissions={true}
                showMarker={true}
                markerStyle={styles.marker}
                //cameraContainerStyle={styles.box2}
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
                //topViewStyle={styles.box1}
                //bottomContent={
                //    <TouchableOpacity style={styles.buttonTouchable}>
                //        <Text style={styles.buttonText}>OK. Got it!</Text>
                //    </TouchableOpacity>
                //}
                //bottomViewStyle={styles.box3}
            />
            </View>
            <View style={styles.box3}>
                {/*<TouchableOpacity style={styles.btn} onPress={() => setReactivate(true)}>
                    <Text style={[styles.greenText, styles.normalText]}>re</Text>
                </TouchableOpacity>*/}
            </View>

        </View>

    )
}