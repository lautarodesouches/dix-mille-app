import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        backgroundColor: themeBg,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: themeText,
        fontSize: 30,
        marginBottom: 20
    },
    addPlayerInput: {
        backgroundColor: themeBg,
        borderColor: primaryBg,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
    addPlayerText: {
        fontSize: 18
    },
    maxPlayers: {
        backgroundColor: 'crimson',
        borderRadius: 5,
        color: 'white',
        fontSize: 16,
        paddingVertical: 10,
        paddingHorizontal: 15,
        textAlign: 'center',
    },
})