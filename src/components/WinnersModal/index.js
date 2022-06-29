import { styles } from './styles'
import { useContext, useState } from 'react'
import { ImageBackground, Modal, Text, View } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import SecondaryButton from '../SecondaryButton'

const WinnersModal = ({ gameOver }) => {

    const [loading, setLoading] = useState(true)

    const { players, currentPlayer } = useContext(PlayersContext)

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
                    loading
                        ?
                        null
                        :
                        (
                            <View style={styles.container}>
                                <Text style={styles.title}>Felicitaciones {currentPlayer.playerName}!</Text>
                                {
                                    players.length > 1
                                        ?
                                        <Text style={styles.text}>Varios jugadores</Text>
                                        :
                                        <Text style={styles.text}>Un solo jugador</Text>
                                }
                                <View>
                                    <Text style={styles.text}>A</Text>
                                </View>
                                <View style={styles.buttonsSection}>
                                    <SecondaryButton handlePress={() => handleFinishGame()} textStyle={styles.buttonText}>Finalizar partida</SecondaryButton>
                                </View>
                            </View>
                        )
                }
            </ImageBackground>
        </Modal>
    )
}

export default WinnersModal