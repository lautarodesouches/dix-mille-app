import { StyleSheet } from 'react-native'
import { primaryBg, primaryText, themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: .3,
        justifyContent: 'center'
    },
    title: {
        backgroundColor: themeBg,
        color: themeText,
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 15,
        fontSize: 44,
        fontFamily: 'KaiseiOptiBold'
    },
    menuContainer: {
        flex: .5,
        justifyContent: 'space-evenly'
    },
    menuOption: {
        backgroundColor: primaryBg,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    optionText: {
        color: primaryText,
        fontSize: 25,
        fontFamily: 'KaiseiOptiRegular'
    }
})