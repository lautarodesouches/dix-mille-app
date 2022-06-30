import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 0.6,
        margin: '5%',
        width: '80%',
        padding: '2.5%',
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    position: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
    },
})