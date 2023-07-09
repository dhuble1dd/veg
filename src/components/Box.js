import React from 'react';
import { View, Text } from 'react-native';
import { useStyles } from '../Styles/ScannedCodePage.styles';
import { useSelector } from 'react-redux';


export const Box = () => {
    const styles = useStyles();
    const title = useSelector(state => state.code.code)

    return(
        <View style={styles.box}>
            <View style={styles.img}></View>
            <Text style={[styles.normalBold, styles.blackText]}>Burger title</Text>
            <Text style={[styles.smallText, styles.blackText]}>{title}</Text>
        </View>
    )
}