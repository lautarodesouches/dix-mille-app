import { useContext, useEffect } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { PrimaryButton, ButtonDanger } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const StartGameScreen = ({  }) => {

    const dicesImages = [
        require('../../assets/images/1.png'),
        require('../../assets/images/2.png'),
        require('../../assets/images/3.png'),
        require('../../assets/images/4.png'),
        require('../../assets/images/5.png'),
        require('../../assets/images/6.png')
    ]

    const { dices, separateDices, currentPlayer, findCurrentPlayer, finishTurn, trowDices, setCurrentPlayer } = useContext(PlayersContext)

    useEffect(() => {
        setCurrentPlayer(findCurrentPlayer())
    }, [])

    const handleThrowDice = () => trowDices()

    const handleCheck = () => finishTurn()

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/table.jpg')} resizeMode={'cover'}>
                <View style={styles.turn}>
                    <View style={styles.turnContainer}>
                        <Text style={styles.turnTitle}>Turno:</Text>
                        <Text style={styles.turnText}>
                            {currentPlayer && currentPlayer.playerName}
                        </Text>
                    </View>
                    <View style={styles.turnContainer}>
                        <Text style={styles.turnTitle}>Puntación:</Text>
                        <Text style={styles.turnText}>
                            {currentPlayer && currentPlayer.totalPoints}
                        </Text>
                    </View>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreTitle}>Puntuación Tirada:</Text>
                    <Text style={styles.scoreText}>
                        {currentPlayer && currentPlayer.turnPoints}
                    </Text>
                </View>
                <View style={styles.dices}>
                    <View style={styles.dicesSection}>
                        <Text style={styles.dicesText}>Dados</Text>
                        <View style={styles.dicesContainer}>
                            {
                                dices.map((dice, i) => <Image key={i} style={styles.diceImage} source={dicesImages[dice - 1]} />)
                            }
                        </View>
                    </View>
                    <View style={styles.dicesSection}>
                        <Text style={styles.dicesText}>Separados</Text>
                        <View style={styles.dicesContainer}>
                            {
                                separateDices.map((dice, i) => <Image key={i} style={styles.diceImage} source={dicesImages[dice - 1]} />)
                            }
                        </View>
                    </View>
                </View>
                <View style={styles.controls}>
                    {
                        currentPlayer.inGame && (
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
            </ImageBackground>
        </View>
    );
}

export default StartGameScreen