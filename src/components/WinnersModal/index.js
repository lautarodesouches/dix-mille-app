import { styles } from './styles'
import { useContext, useState } from 'react'
import { ImageBackground, Modal, Text, View } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import SecondaryButton from '../SecondaryButton'
import ButtonDanger from '../ButtonDanger'

const WinnersModal = ({ gameOver }) => {

    const [loading, setLoading] = useState(true)

    const { players, currentPlayer, positions } = useContext(PlayersContext)

    const handleLoadBgEnd = () => setLoading(false)
    const handleFinishGame = () => gameOver()

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
                    !loading &&
                    (
                        <View style={styles.container}>
                            <Text style={styles.title}>Felicitaciones {currentPlayer.playerName}!</Text>
                            {
                                players.length > 1 && (
                                    <View style={styles.positionsSection}>
                                        <Text style={styles.positionsTitle}>Posiciones:</Text>
                                        {
                                            positions.map((player, id) => (
                                                <View style={styles.positionContainer} key={id}>
                                                    <Text style={styles.positionText}>{id + 1}- {player.playerName}</Text>
                                                </View>
                                            ))
                                        }
                                    </View>
                                )
                            }
                            <View style={styles.buttonsSection}>
                                {
                                    players.length > positions.length && (
                                        <View style={styles.buttonContainer}>
                                            <SecondaryButton handlePress={() => handleFinishGame()} textStyle={styles.buttonText}>
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