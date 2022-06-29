import { View, ImageBackground, Text, Image  } from 'react-native'
import PrimaryButton from '../PrimaryButton'
import ButtonDanger from '../ButtonDanger'
import { styles } from './styles'

const GameTable = ({ currentPlayer, dices, separateDices, finishTurn, trowDices }) => {

    const dicesImages = [
        require('../../assets/images/1.png'),
        require('../../assets/images/2.png'),
        require('../../assets/images/3.png'),
        require('../../assets/images/4.png'),
        require('../../assets/images/5.png'),
        require('../../assets/images/6.png')
    ]

    const handleThrowDice = () => trowDices()
    const handleCheck = () => finishTurn()

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/table.jpg')} resizeMode={'cover'}>
                <View style={styles.turn}>
                    <View style={styles.turnContainer}>
                        <Text style={styles.turnTitle}>Turno:</Text>
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
            </ImageBackground>
        </View>
    )
}

export default GameTable