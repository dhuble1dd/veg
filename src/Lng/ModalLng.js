import React, { useState, useEffect, useMemo } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import strings from './localization';
import { useDispatch, useSelector } from 'react-redux';
import { lng } from '../redux/reducer';

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

    const l = strings.getLanguage();
    

    const setText = (value) => {
        strings.setLanguage(value);
        
        setModalVisible(!isModalVisible);
        
    }
    useEffect(()=> {}, [isModalVisible])
    return (
        <View>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Show modal</Text>
            </TouchableOpacity>
            <Modal isVisible={isModalVisible} hasBackdrop={true}>
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