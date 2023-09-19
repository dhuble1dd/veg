import React, { useState, useEffect, useMemo } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
//import strings from './localization';
import { useDispatch, useSelector } from 'react-redux';
import { lng } from '../redux/reducer';
import LocalizedStrings from "react-native-localization";
import ru from "./ru.json";
import en from "./en.json";
import tech from "./tech.json"


const strings = new LocalizedStrings({
    ...ru, ...en, ...tech
})

export const ModalLng = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch()
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const lang = [
        { shortform: 'ru', longform: 'Русский' },
        { shortform: 'en', longform: 'English' },
        { shortform: 'tech', longform: 'Technical' },
    ];

    const l = useSelector(state => state.code.lng);
    console.log(l);

    const setText = (value) => {
        dispatch(lng(value))
        //strings.setLanguage(value)
        //l = useSelector(state => state.code.lng);
        //strings.setLanguage(useSelector(state => state.code.lng))
        setModalVisible(!isModalVisible);
    }
     useEffect(()=>{
        //dispatch(lng(value));
        strings.setLanguage(l);
        //setModalVisible(!isModalVisible);
    },[l])
    return (
        <View>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Show modal</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible}>
                <View>
                    <Text>{strings.choise}</Text>
                </View>
                <View>
                    <ScrollView>
                        {lang.map((item, key) => (
                            <View key={key}>
                                <Text
                                onPress={()=> setText(item.shortform)}
                                >
                                    {item.longform}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text>Hide modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default strings