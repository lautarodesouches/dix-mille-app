import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    diceImage: {
        height: 50,
        width: 50,
    },
    dicesContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        width: '100%'
    },
    dicesSection: {
        flex: 0.5,
        margin: 10,
        width: '100%',
    },
    dicesText: {
        textAlign: 'center',
        fontSize: 25,
    }
})