import { useContext } from 'react';
import { Text, View } from 'react-native'
import { ButtonDanger, PrimaryButton } from '../../components';
import { PlayersContext } from '../../context/PlayersContextProvider';
import { styles } from './styles'

const GameOverScreen = ({ restarGame, changePlayers }) => {

    const { resetPoints } = useContext(PlayersContext)

    const CHANGE_PLAYERS = 1

    const handleDecision = decision => {
        resetPoints()
        if (decision === CHANGE_PLAYERS) {
            changePlayers()
        } else {
            restarGame()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.positionsContainer}>
                <Text style={styles.text}>Posiciones</Text>
            </View>
            <View style={styles.buttonsSection}>
                <View style={styles.buttonContainer}>
                    <ButtonDanger handlePress={() => handleDecision(CHANGE_PLAYERS)} textStyle={styles.buttonText}>
                        Cambiar Jugadores
                    </ButtonDanger>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton handlePress={() => handleDecision()} textStyle={styles.buttonText}>
                        Reiniciar Juego
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default GameOverScreen