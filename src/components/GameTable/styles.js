import { StyleSheet } from 'react-native'
import { primaryBg, primaryBgDark, primaryText, themeBg, themeText } from '../../constants/Colors'

const sectionStyle = { alignItems: 'center', justifyContent: 'center', margin: 5, width: '100%' }

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        alignItems: 'center',
        backgroundColor: themeBg,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '3%',
    },
    // POINTS
    pointsContainer: {
        borderRadius: 5,
        flex: 0.32,
        ...sectionStyle
    },
    pointsTitle: {
        fontSize: 25,
        color: themeText,
        marginBottom: 15
    },
    pointsBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    boxLabel: {
        color: primaryText,
        marginBottom: 10,
    },
    lastPlayerBox: {
        flex: .8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryBg,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 5,
    },
    lastPlayerName: {
        color: primaryText,
        fontSize: 20,
        marginBottom: 5,
    },
    lastPlayerPoints: {
        color: primaryText,
        fontSize: 20,
    },
    activePlayerBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryBgDark,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 5,
    },
    activePlayerName: {
        color: primaryText,
        fontSize: 20,
        marginBottom: 5,
    },
    activePlayerPoints: {
        color: primaryText,
        fontSize: 20,
    },
    // SCORE
    scoreContainer: {
        borderRadius: 5,
        flex: 0.08,
        ...sectionStyle
    },
    scoreText: {
        fontSize: 20
    },
    // DICES
    dices: {
        flex: 0.45,
        ...sectionStyle,
    },
    // CONTROLS
    controls: {
        flex: 0.15,
        flexDirection: 'row',
        ...sectionStyle,
    },
    control: {
        flex: 1,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 20
    }
})