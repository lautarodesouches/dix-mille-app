import { styles } from './styles'
import DicesSection from '../DicesSection'
import ButtonDanger from '../ButtonDanger'
import PrimaryButton from '../PrimaryButton'
import { useContext, useState } from 'react'
import { themeBg, themeText } from '../../constants/Colors'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { View, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native'
import PlayerTotalPoints from '../PlayerTotalPoints'

const GameTable = () => {

    const [loadingImage, setLoadingImage] = useState(true)
    const [firstOverpoints, setFirstOverpoints] = useState(true)

    const { players, currentPlayerId, lastPlayer, dices, separateDices, finishTurn, throwDices, win, overPoints } = useContext(PlayersContext)

    const scoreContainerStyle = [styles.scoreContainer, { backgroundColor: overPoints() ? 'crimson' : themeBg }]
    const scoreTextStyle = [styles.scoreText, { color: overPoints() ? 'white' : themeText }]

    if (firstOverpoints && overPoints()) {
        Alert.alert(
            'Te pasaste!',
            'Los puntos de tu tirada y los totales superan la puntuación objetivo.\nCuando esto pase la puntuación de la tirada se marcara en rojo y solo se te permitira pasar',
            [{ text: 'Entendido' }]
        )
        setFirstOverpoints(false)
    }

    const handleBgLoadEnd = () => setLoadingImage(false)

    return (
        <ImageBackground
            onLoadEnd={() => handleBgLoadEnd()}
            style={styles.backgroundImage}
            source={require('../../assets/images/table.jpg')}
            resizeMode={'cover'}>
            {
                !loadingImage && (
                    <>
                        <View style={styles.totalPointsContainer}>
                            <TouchableOpacity onPress={win}>
                                <Text style={styles.totalPointsTitle}>Puntuacion total</Text>
                            </TouchableOpacity>
                            <View style={styles.totalPointsBoxes}>
                                {
                                    lastPlayer !== players[currentPlayerId] && <PlayerTotalPoints player={lastPlayer} />
                                }
                                <PlayerTotalPoints player={players[currentPlayerId]} active={true} />
                            </View>
                        </View>
                        <View style={scoreContainerStyle}>
                            <Text style={scoreTextStyle}>
                                Puntuación Tirada: {players[currentPlayerId].turnPoints}
                            </Text>
                        </View>
                        <View style={styles.dices}>
                            <DicesSection title={'Dados'} dices={dices} />
                            <DicesSection title={'Separados'} dices={separateDices} />
                        </View>
                        <View style={styles.controls}>
                            {
                                (
                                    (players[currentPlayerId].inGame && players[currentPlayerId].turnPoints > 0)
                                    ||
                                    players[currentPlayerId].turnPoints >= 750
                                )
                                &&
                                (
                                    <View style={styles.control}>
                                        <ButtonDanger textStyle={styles.buttonText} handlePress={() => finishTurn()}>
                                            Pasar
                                        </ButtonDanger>
                                    </View>
                                )
                            }
                            {
                                !overPoints() && (
                                    <View style={styles.control}>
                                        <PrimaryButton textStyle={styles.buttonText} handlePress={() => throwDices()}>
                                            Tirar Dados
                                        </PrimaryButton>
                                    </View>
                                )
                            }
                        </View>
                    </>
                )
            }
        </ImageBackground>
    )
}

export default GameTable