import { styles } from './styles'
import { useContext, useState } from 'react'
import { ImageBackground, Modal, Text, View } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import SecondaryButton from '../SecondaryButton'
import ButtonDanger from '../ButtonDanger'
import Positions from '../Positions'

const WinnersModal = ({ gameOver }) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const { players, currentPlayer, continueGame, positions } = useContext(PlayersContext)

    const handleLoadBgEnd = () => setLoadingImage(false)
    const handleContinue = () => continueGame()
    const handleFinishGame = () => gameOver(positions)

    return (
        <Modal
            animationType='slide'
            onDismiss={() => null}
        >
            <ImageBackground
                onLoadEnd={() => handleLoadBgEnd()}
                source={require('../../assets/images/winner.jpg')}
                style={styles.backgroundImage}
                resizeMode={'cover'}
            >
                {
                    !loadingImage &&
                    (
                        <View style={styles.container}>
                            <Text style={styles.title}>Felicitaciones {currentPlayer.playerName}!</Text>
                            {
                                players.length > 1 && <Positions positions={positions} />
                            }
                            <View style={styles.buttonsSection}>
                                {
                                    players.length > 0 && (
                                        <View style={styles.buttonContainer}>
                                            <SecondaryButton handlePress={() => handleContinue()} textStyle={styles.buttonText}>
                                                Continuar partida
                                            </SecondaryButton>
                                        </View>
                                    )
                                }
                                <View style={styles.buttonContainer}>
                                    <ButtonDanger handlePress={() => handleFinishGame()} textStyle={styles.buttonText}>
                                        Finalizar partida
                                    </ButtonDanger>
                                </View>
                            </View>
                        </View>
                    )
                }
            </ImageBackground>
        </Modal>
    )
}

export default WinnersModal