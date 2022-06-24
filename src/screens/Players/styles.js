import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, secondaryBg, secondaryText, themeBg, themeText } from '../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: themeBg,
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20
    },
    welcome: {
        flex: 0.1,
        justifyContent: 'center',
    },
    welcomeText: {
        color: themeText,
        fontSize: 30
    },
    addPlayer: {
        flex: 0.3,
        justifyContent: 'center',
    },
    addPlayerTitle: {
        color: themeText,
        fontSize: 18
    },
    addPlayerInput: {
        marginTop: 15,
        borderColor: primaryBg,
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        padding: 5,
        textAlign: 'center',
        marginBottom: 10
    },
    activePlayerContainer: {
        flex: 0.5
    },
    maxPlayers: {
        textAlign: 'center',
        backgroundColor: 'crimson',
        color: 'white',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    startContainer: {
        flex: 0.1,
        width: '40%'
    }
})