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
    activePlayers: {
        flex: 0.5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
    },
    aPContainer: {
        alignItems: 'center',
        backgroundColor: secondaryBg,
        borderRadius: 5,
        flexGrow: 1,
        justifyContent: 'center',
        margin: '2.5%',
        height: '40%',
        padding: 10,
    },
    aPTitle: {
        color: secondaryText,
        fontSize: 18,
    },
    aPName: {
        color: secondaryText,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20
    },
    startContainer: {
        flex: 0.1,
        width: '40%'
    }
})