import { StyleSheet } from 'react-native'
import { primaryText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 5,
        maxWidth: '50%'
    },
    label: {
        color: primaryText,
        fontSize: 16
    },
    playerName: {
        color: primaryText,
        fontSize: 25,
        marginBottom: 5
    },
    playerPoints: {
        color: primaryText,
        fontSize: 20
    },
})