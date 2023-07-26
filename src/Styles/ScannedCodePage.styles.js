import { useMemo, useState } from 'react';
import { StyleSheet, Appearance } from 'react-native';

export const useStyles = () => {
    const dark = 'dark';

    const [isDarkTheme, setIsDarkTheme] = useState(
        Appearance.getColorScheme() === 'dark',
    );
    Appearance.addChangeListener(props =>
        setIsDarkTheme(props.colorScheme === dark),
    );

    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: isDarkTheme ? '#000' : '#fff',
                },
                header: {
                    height: 60,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    backgroundColor: isDarkTheme ? '#000' : '#fff',
                    zIndex: 10,
                    paddingTop: 10,
                    borderBottomColor: isDarkTheme ? '#fff' : '#000',
                    borderBottomWidth: 1
                },
                content: {
                    alignItems: 'center',
                    marginTop: 90,
                    marginBottom: 40
                },
                box: {
                    width: 300,
                    height: 200,
                    backgroundColor: isDarkTheme ? '#000' : '#fff',
                    marginBottom: 10
                },
                greenText: {
                    color: '#3ebd71',
                },
                whiteText: {
                    color: isDarkTheme ? '#000' : '#fff',
                },
                blackText: {

                    color: isDarkTheme ? '#fff' : '#000',
                },
                boldText: {
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                normalText: {
                    fontSize: 16
                },
                flt: {
                    marginTop: 20,
                    borderColor: isDarkTheme ? '#fff' : '#000',
                    //borderWidth: 1,
                    //padding: 5
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
                separator: {
                    height: 2,
                    marginBottom: 5,
                    backgroundColor: isDarkTheme ? '#fff' : '#000',
                }
            })
        , [isDarkTheme])
    return styles;
}