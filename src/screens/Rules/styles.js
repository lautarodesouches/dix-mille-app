import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeBg,
        padding: '2.5%',
    },
    sectionObj: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionRules: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionTable: {
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
        marginTop: 15
    },
    row: {
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
        fontSize: 17,
        fontFamily: 'RubikBold'
    },
    tableText: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'RubikRegular'
    }
})