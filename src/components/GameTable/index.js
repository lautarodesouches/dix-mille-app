import { styles } from './styles'
import { useContext, useState } from 'react'
import ButtonDanger from '../ButtonDanger'
import PrimaryButton from '../PrimaryButton'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native'
import DicesSection from '../DicesSection'

const GameTable = () => {

    const [loading, setLoading] = useState(true)

    const { currentPlayer, dices, separateDices, finishTurn, trowDices, win } = useContext(PlayersContext)

    const handleBgLoadEnd = () => setLoading(false)

    const handleThrowDice = () => trowDices()
    const handleCheck = () => finishTurn()

    return (
        <View style={styles.container}>
            <ImageBackground
                onLoadEnd={() => handleBgLoadEnd()}
                style={styles.backgroundImage}
                source={require('../../assets/images/table.jpg')}
                resizeMode={'cover'}>
                {
                    loading
                        ?
                        null
                        :
                        <>
                            <View style={styles.turn}>
                                <View style={styles.turnContainer}>
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
                            <View style={styles.score}>
                                <Text style={styles.scoreTitle}>Puntuación Tirada:</Text>
                                <Text style={styles.scoreText}>
                                    {currentPlayer.turnPoints}
                                </Text>
                            </View>
                            <View style={styles.dices}>
                                <DicesSection title={'Dados'} dices={dices} />
                                <DicesSection title={'Separados'} dices={separateDices} />
                            </View>
                            <View style={styles.controls}>
                                {
                                    currentPlayer.inGame && currentPlayer.turnPoints > 0 && (
                                        <View style={styles.control}>
                                            <ButtonDanger textStyle={styles.buttonText} handlePress={() => handleCheck()}>
                                                Pasar
                                            </ButtonDanger>
                                        </View>
                                    )
                                }
                                <View style={styles.control}>
                                    <PrimaryButton textStyle={styles.buttonText} handlePress={() => handleThrowDice()}>
                                        Tirar Dados
                                    </PrimaryButton>
                                </View>
                            </View>
                        </>
                }
            </ImageBackground>
        </View>
    )
}

export default GameTable