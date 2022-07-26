import { StyleSheet } from 'react-native'
import { primaryBg, primaryBgDark, primaryText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hintContainer: {
        minHeight: 100,
        minWidth: 200,
        backgroundColor: '#e1e1e1',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    hintContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    hintText: {
        fontSize: 24,
        color: 'black',
    },
    modal: {
        flex: 1,
    }
})