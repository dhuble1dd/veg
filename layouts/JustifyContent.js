import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';
 
const { height } = Dimensions.get('window');
 
const box_count = 3;
const box_height = height / box_count;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start', //replace with flex-end or center
  },
  box: {
    height: box_height * 0.95
  },
  box1: {
    backgroundColor: '#2196F3'
  },
  box2: {
    backgroundColor: '#8BC34A'
  },
  box3: {
    backgroundColor: '#e3aa1a'
  }
});

export default function JustifyContent() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}></View>
            <View style={[styles.box, styles.box2]}></View>
            <View style={[styles.box, styles.box3]}></View>
        </View>
    );
}