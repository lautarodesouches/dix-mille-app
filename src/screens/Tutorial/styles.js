import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hintContainer: {
        minHeight: 100,
        minWidth: 200,
        backgroundColor: '#e1e1e1',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    hintContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    hintTitle: {
        fontSize: 20,
        color: 'black',
    },
    hintMessage: {
        marginTop: 10,
        fontSize: 18,
        color: 'black',
    },
    modal: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: 'crimson'
    },
    buttonText: {
        color: 'white'
    },
})