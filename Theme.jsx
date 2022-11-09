import { StyleSheet } from 'react-native';

const theme = StyleSheet.create({
    container: {
        main: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F0F8FF',
        },
        details: {
            textAlign: 'justify',
            paddingLeft: 28,
            paddingRight: 28,
        },
        data: {
            backgroundColor: '#1976d2',
            padding: 20,
            marginBottom: 5,
            marginTop: 5,
            borderRadius: '25px',
            width: '70%',
            textAlign: 'center'
        }
    },
    font: {
        logo: {
            text: 'center',
            fontSize: '42px',
            marginBottom: 120,
        },
        details:{
            title: {
                fontSize: '36px',
                textAlign: 'center',
                marginBottom: 60,
            },
            text: {
                fontSize: '18px',
            },
        },
        home: {
            title: {
                fontSize: '20px',
                textAlign: 'center',
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 60
            },
        },
        data: {
            color: 'white',
        },
    },
    button: {
        menu: {
            marginTop: 10,
            marginBottom: 10,
        },
        details: {
            marginTop: 100,
        },
        home: {
            marginTop: 100,
        },
    },
    image: {
        logo: {
            height: 200,
            width: 200,
            marginBottom: 30
        },
    },
    skeleton: {
        height: 60,
        width: 250,
        marginBottom: 10,
    }
});

export default theme;