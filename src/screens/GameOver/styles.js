import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20
    },
    buttonsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '10%',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 20
    }
})