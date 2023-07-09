import {useMemo} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export const useStyles = () => {
    //const { height } = Dimensions.get('window');
    //const box_count = 3;
    //const box_height = height / box_count;
    const styles = useMemo(
        () => 
        StyleSheet.create({
            //centerText: {
            //    flex: 1,
            //    fontSize: 18,
            //    padding: 32,
            //    color: '#777'
            //},
            //textBold: {
            //    fontWeight: '500',
            //    color: '#000'
            //},
            //buttonText: {
            //    fontSize: 21,
            //    color: 'rgb(0,122,255)'
            //},
            //buttonTouchable: {
            //    padding: 16
            //},
            camera: {
                
                marginHorizontal: 50
                //marginBottom: 50,
                //padding: 50
                //marginHorizontal: 50,
                //paddingHorizontal: 50
                
            },
            container: {
                flex: 1,
                flexDirection: 'column'
              },
            //  box: {
            //    height: box_height
            //  },
              box1: {
                height: '25%',
                backgroundColor: '#38b169',
              },
              box2: {
                marginRight: 50,
                height: '50%'
                
              },
              box3: {
                height: '25%',
                backgroundColor: '#3ebd71',
              },
              greenText: {
                alignSelf: 'center',
                color:  '#3ebd71',
              },
              whiteText: {
                alignSelf: 'center',
                color: '#fff',
              },
              boldText: {
                fontSize: 24,
                fontWeight: 'bold'
              },
              normalText: {
                fontSize: 16
              },
              marginT: {
                marginTop: 20
              },
              btn: {
                position: 'absolute',
                justifyContent: 'center',
                bottom: 20,
                right: 20,
                backgroundColor: '#fff',
                borderRadius: 50,
                width: 50,
                height: 50
              }
        })
    , [])
    return styles;
}