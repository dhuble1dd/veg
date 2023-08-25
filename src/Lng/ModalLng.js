import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { strings } from './localization';

export const ModalLng = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const lang = [
        { shortform: 'ru', longform: 'Russian' },
        { shortform: 'en', longform: 'English' },
        { shortform: 'tech', longform: 'Technical' },
    ];

    const setText = (value) => {
        strings.setLanguage(value);
        setModalVisible(!isModalVisible);
    }

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
                            <View>
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