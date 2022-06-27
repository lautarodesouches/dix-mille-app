import { StyleSheet } from 'react-native'
import { secondaryBg, secondaryText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    aPContainer: {
        alignItems: 'center',
        backgroundColor: secondaryBg,
        borderRadius: 5,
        flexGrow: 1,
        justifyContent: 'center',
        margin: '2.5%',
        minHeight: 130,
        width: '45%',
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
    }
})