import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, secondaryText, themeBg } from '../../constants/Colors'

const sectionStyle = { alignItems: 'center', justifyContent: 'center', margin: 10, width: '100%' }

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        alignItems: 'center',
        backgroundColor: themeBg,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    // TURN
    turn: {
        backgroundColor: primaryBg,
        borderRadius: 15,
        flex: 0.15,
        flexDirection: 'row',
        padding: 10,
        ...sectionStyle,
    },
    turnContainer: {
        flex: 1,
    },
    turnTitle: {
        color: primaryText,
        fontSize: 18,
        fontFamily: 'RubikThin',
        textAlign: 'center',
    },
    turnText: {
        color: primaryText,
        fontSize: 24,
        textAlign: 'center',
    },
    // SCORE
    score: {
        borderRadius: 15,
        flex: 0.10,
        flexDirection: 'row',
        ...sectionStyle,
    },
    scoreTitle: {
        fontSize: 20,
        fontFamily: 'RubikThin',
        marginHorizontal: 10,
    },
    scoreText: {
        marginHorizontal: 10,
        fontSize: 22,
    },
    // OVERPOINTS
    overPoints: {
        fontSize: 22,
        color: 'red'
    },
    // DICES
    dices: {
        flex: 0.60,
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