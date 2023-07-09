import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {
    const styles = useMemo(
        () => 
        StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'
              },
              header: {
                height: 60,
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                backgroundColor: '#fff',
                zIndex: 10,
                paddingTop: 10
              },
              content: {
                alignItems: 'center',
                marginTop: 90,
                marginBottom: 40
              },
              box: {
                width: 300,
                height: 200,
                backgroundColor: '#fff',
                marginBottom: 10
              },
              greenText: {
                
                color:  '#3ebd71',
              },
              whiteText: {
                
                color: '#fff',
              },
              blackText: {
                
                color: '#000',
              },
              boldText: {
                fontSize: 24,
                fontWeight: 'bold'
              },
              normalText: {
                fontSize: 16
              },
              flt: {
                marginTop: 20
              },
              img: {
                width: 300,
                height: 100,
                backgroundColor: '#3ebd71'
              },
              normalBold: {
                fontWeight: 'bold'
              },
              mid: {
                alignSelf: 'center',
              },
              smallText: {
                fontSize: 12
              },
              
        })
    , [])
    return styles;
}