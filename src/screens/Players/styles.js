import { StyleSheet } from 'react-native'
import { primaryBg, themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20
    },
    welcome: {
        backgroundColor: themeBg,
        borderRadius: 10,
        flex: 0.1,
        justifyContent: 'center',
        padding: 15,
    },
    welcomeText: {
        color: themeText,
        fontSize: 30
    },
    addPlayer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    addPlayerInput: {
        backgroundColor: themeBg,
        borderColor: primaryBg,
        borderRadius: 5,
        borderWidth: 2,
        fontSize: 18,
        marginBottom: 10,
        padding: 10,
        textAlign: 'center',
    },
    addPlayerText: {
        fontSize: 18
    },
    activePlayerContainer: {
        flex: 0.5
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
    startContainer: {
        alignItems: 'center',
        flex: 0.1,
        justifyContent: 'center',
    }
})