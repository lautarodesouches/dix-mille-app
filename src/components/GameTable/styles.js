import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors'

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
    // TOTAL POINTS
    totalPointsContainer: {
        borderRadius: 5,
        flex: 0.32,
        ...sectionStyle
    },
    totalPointsTitle: {
        fontSize: 25,
        color: themeText,
        marginBottom: 15
    },
    totalPointsBoxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
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