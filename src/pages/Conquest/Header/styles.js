import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 5,
        height: 40,
        alignItems: 'center',
    },
    items: {
        flex: 1,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'purple',
    },
    icon: {
        alignSelf: 'flex-start',
        fontSize: 28,
        color: 'purple'
    },
    line: {
        height: 0,
        color: '#C8C8C8',
        backgroundColor: '#5C9CEE'

    }

});

export default styles;