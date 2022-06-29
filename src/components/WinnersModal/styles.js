import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors'

const defaultText = {
    backgroundColor: themeBg,
    color: themeText,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
}

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    container: {
        flex: 0.55,
        alignItems: 'center',
        padding: '3%',
        justifyContent: 'space-around',
    },
    title: {
        ...defaultText,
        fontSize: 30,
    },
    text: {
        ...defaultText,
        fontSize: 20
    },
    buttonsSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 20
    }
})