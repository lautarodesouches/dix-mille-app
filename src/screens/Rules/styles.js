import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {    
        backgroundColor: themeBg,
        padding: '1%',
    },
    scrollContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        color: themeText,
        fontSize: 25,
    },
    sectionText: {
        fontSize: 18,
        color: themeText,
        marginVertical: 5
    },
    sectionContent: {
        marginTop: 20
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#f1f1f1'
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: 10,
        width: '33%',
        borderColor: themeText,
        borderWidth: 1
    },
    tableTitle: {
        fontSize: 20,
        fontFamily: 'RubikBold'
    },
    tableText: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'RubikRegular',
        margin: 5
    }
})