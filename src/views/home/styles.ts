import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        flex: 1,
        paddingBottom: 40,
    },
    input: {
        width: '80%',
        height: 52,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#121214',
        padding: 12,
        fontSize: 16,
    },
    touchableOpacity: {
        width: '80%',
        height: 52,
        backgroundColor: '#E15610',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textTouchableOpacity: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
  },
});