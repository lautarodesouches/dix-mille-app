import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    title: {
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: themeBg,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: themeText,
        fontSize: 30,
        marginBottom: 30
    },
    addPlayerInput: {
        backgroundColor: themeBg,
        borderColor: primaryBg,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 20,
        paddingHorizontal: 18,
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
    },
    addPlayerText: {
        fontSize: 20
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