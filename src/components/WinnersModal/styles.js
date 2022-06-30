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
        flex: 0.1,
        ...defaultText,
        fontSize: 22,
    },
    text: {
        ...defaultText,
        fontSize: 20
    },
    positionsSection: {
        alignItems: 'center',
        flex: 0.6,
        margin: '5%',
        width: '80%',
        padding: '2.5%',
        borderRadius: 10,
        backgroundColor: themeBg
    },
    positionsTitle: {
        fontSize: 22,
        marginBottom: 20
    },
    positionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    positionText: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
    },
    buttonsSection: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
        maxWidth: '60%',
    },
    buttonText: {
        fontSize: 18
    }
})