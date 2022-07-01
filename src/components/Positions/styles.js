import { StyleSheet } from 'react-native'
import { themeBg, themeText } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: themeBg,
        borderRadius: 10,
        flex: 0.6,
        margin: '5%',
        padding: '2.5%',
        width: '80%',
    },
    title: {
        color: themeText,
        fontSize: 22,
        marginBottom: 10,
    },
    position: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 4,
        width: '100%',
    },
    text: {
        flex:1,
        fontSize: 20,
        textAlign: 'center', 
    },
})