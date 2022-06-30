import { useState } from 'react'
import { styles } from './styles'
import { ImageBackground, View } from 'react-native'
import { ButtonDanger, PrimaryButton } from '../../components'

const GameOverScreen = ({ restarGame, changePlayers }) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const handleLoadEnd = () => setLoadingImage(false)
    const handleChangePlayers = () => changePlayers()
    const handleRestartGame = () => restarGame()

    return (
        <ImageBackground
            source={require('../../assets/images/dicesfalling.jpg')}
            style={styles.backgroundImage}
            resizeMode={'cover'}
            onLoadEnd={() => handleLoadEnd()}
        >
            {
                !loadingImage && (
                    <>
                        <View style={styles.buttonsSection}>
                            <View style={styles.buttonContainer}>
                                <ButtonDanger handlePress={() => handleChangePlayers()} textStyle={styles.buttonText}>
                                    Cambiar Jugadores
                                </ButtonDanger>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton handlePress={() => handleRestartGame()} textStyle={styles.buttonText}>
                                    Reiniciar Juego
                                </PrimaryButton>
                            </View>
                        </View>
                    </>
                )
            }
        </ImageBackground >
    );
}

export default GameOverScreen