import {useMemo} from 'react';
import {StyleSheet} from 'react-native';

export const useStyles = () => {

    const styles = useMemo(
        () => 
        StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#3ebd71',
                //backgroundColor: '#38b169'
              }, 
              box1: {
                height: '50%',
                backgroundColor: '#38b169',
                borderBottomLeftRadius: 100,
                borderBottomRightRadius: 150,              
              },         
              box2: {
                height: '50%',
                backgroundColor: '#3ebd71',
                justifyContent: 'space-evenly'
              },
              circle: {
                backgroundColor: '#fff',
                height: 200,
                width: 200,
                borderRadius: 100, 
                justifyContent: 'center',
                position: 'absolute',
                bottom: -10,
                right: 50
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
              btn: {
                backgroundColor: '#fff',
                justifyContent: 'center',
                borderRadius: 10,
                height: 30,
                marginHorizontal: 20
              }        
        })
    , [])
    return styles;
}