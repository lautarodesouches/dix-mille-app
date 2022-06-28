import { useContext, useEffect, useState } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { PrimaryButton, ButtonDanger } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const StartGameScreen = () => {

    const dicesImages = [
        require('../../assets/images/1.png'),
        require('../../assets/images/2.png'),
        require('../../assets/images/3.png'),
        require('../../assets/images/4.png'),
        require('../../assets/images/5.png'),
        require('../../assets/images/6.png')
    ]

    const { dices, findCurrentPlayer, changeTurn, trowDices } = useContext(PlayersContext)

    const [ currentPlayer, setCurrentPlayer] = useState(findCurrentPlayer())

    const handleThrowDice = () => trowDices(currentPlayer)

    const handleEndTurn = () => {
        changeTurn()
        setCurrentPlayer(findCurrentPlayer())
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.jpg')} resizeMode={'cover'}>
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
                                dices.map( (dice, i) => <Image key={i} style={styles.diceImage} source={dicesImages[dice - 1]} />)
                            }
                        </View>
                    </View>
                    <View style={styles.dicesSection}>
                        <Text style={styles.dicesText}>Separados</Text>
                        <View style={styles.dicesContainer}>
                            <Image style={styles.diceImage} source={dicesImages[0]} />
                            <Image style={styles.diceImage} source={dicesImages[1]} />
                            <Image style={styles.diceImage} source={dicesImages[2]} />
                            <Image style={styles.diceImage} source={dicesImages[3]} />
                            <Image style={styles.diceImage} source={dicesImages[4]} />
                        </View>
                    </View>
                </View>
                <View style={styles.controls}>
                    <View style={styles.control}>
                        <ButtonDanger textStyle={styles.buttonText} handlePress={() => handleEndTurn()}>
                            Pasar
                        </ButtonDanger>
                    </View>
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