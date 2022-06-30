import { styles } from './styles'
import DicesSection from '../DicesSection'
import ButtonDanger from '../ButtonDanger'
import PrimaryButton from '../PrimaryButton'
import { useContext, useState } from 'react'
import { secondaryBg, secondaryText } from '../../constants/Colors'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { View, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native'

const GameTable = () => {

    const [loadingImage, setLoadingImage] = useState(true)
    const [firstOverpoints, setFirstOverpoints] = useState(true)

    const { currentPlayer, dices, separateDices, finishTurn, throwDices, win, overPoints } = useContext(PlayersContext)

    const handleBgLoadEnd = () => setLoadingImage(false)

    if (firstOverpoints && overPoints()) {
        Alert.alert(
            'Te pasaste!',
            'Los puntos de tu tirada y los totales superan la puntuación objetivo.\nCuando esto pase la puntuación de la tirada se marcara en rojo y solo se te permitira pasar',
            [{ text: 'Entendido' }]
        )
        setFirstOverpoints(false)
    }

    return (
        <ImageBackground
            onLoadEnd={() => handleBgLoadEnd()}
            style={styles.backgroundImage}
            source={require('../../assets/images/table.jpg')}
            resizeMode={'cover'}>
            {
                !loadingImage && (
                    <>
                        <View style={styles.turn}>
                            <View style={styles.turnContainer}>
                                {/*CHEAT*/}
                                <TouchableOpacity onPress={() => win()}>
                                    <Text style={styles.turnTitle}>Turno:</Text>
                                </TouchableOpacity>
                                <Text style={styles.turnText}>
                                    {currentPlayer.playerName}
                                </Text>
                            </View>
                            <View style={styles.turnContainer}>
                                <Text style={styles.turnTitle}>Puntación:</Text>
                                <Text style={styles.turnText}>
                                    {currentPlayer.totalPoints}
                                </Text>
                            </View>
                        </View>
                        <View style={[styles.score, { backgroundColor: overPoints() ? 'crimson' : secondaryBg }]}>
                            <Text style={[styles.scoreTitle, { color: overPoints() ? 'white' : secondaryText }]}>
                                Puntuación Tirada:
                            </Text>
                            <Text style={[styles.scoreText, { color: overPoints() ? 'white' : secondaryText }]}>
                                {currentPlayer.turnPoints}
                            </Text>
                        </View>
                        <View style={styles.dices}>
                            <DicesSection title={'Dados'} dices={dices} />
                            <DicesSection title={'Separados'} dices={separateDices} />
                        </View>
                        <View style={styles.controls}>
                            {
                                (currentPlayer.inGame && currentPlayer.turnPoints > 0 || currentPlayer.turnPoints >= 750) && (
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