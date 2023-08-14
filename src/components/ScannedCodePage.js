import React from 'react';
import { useSelector } from 'react-redux';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { useStyles } from '../Styles/ScannedCodePage.styles';
import reducer from '../redux/reducer';
import { Box } from './Box';

export const ScannedcodePage = () => {
    const styles = useStyles();
    const data = useSelector(state => state.code.code);

    const keyExtractor = item => {
        return item?.id ?? `${Math.random()}`;
    }

    const renderItem = ({ item }) => {
        return <Box title={item?.title} />;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.header]}>
                <Text style={[styles.boldText, styles.greenText, styles.mid]}>Burger</Text>
            </View>
            <View style={styles.content}>
                <Text style={[styles.boldText, styles.blackText]}>That's what we could find</Text>
                <View style={styles.flt}>
                    <FlatList
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        data={data}
                        //ItemSeparatorComponent={
                        //    <View style={styles.separator}/>
                        //}
                    />
                </View>
            </View>
            {/*<ScrollView>
                <View style={[styles.content]}>
                    <View>
                        <Text>That's what we could find</Text>
                    </View>
                    <View style={[styles.box]}>
                        <Text>{code}</Text>
                    </View>
                    
                </View>
            </ScrollView>*/}

        </View>

    )
}

