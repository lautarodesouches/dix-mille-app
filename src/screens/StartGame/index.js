import { useContext } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { PrimaryButton, CustomButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const StartGameScreen = () => {

    const dice1 = require(`../../assets/images/1.png`)
    const dice2 = require(`../../assets/images/2.png`)
    const dice3 = require(`../../assets/images/3.png`)
    const dice4 = require(`../../assets/images/4.png`)
    const dice5 = require(`../../assets/images/5.png`)

    const { players } = useContext(PlayersContext)

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={require('../../assets/images/background.jpg')} resizeMode={'cover'}>
                <View style={styles.turn}>
                    <View style={styles.turnContainer}>
                        <Text style={styles.turnTitle}>Turno:</Text>
                        <Text style={styles.turnText}>Test</Text>
                    </View>
                    <View style={styles.turnContainer}>
                        <Text style={styles.turnTitle}>Puntación:</Text>
                        <Text style={styles.turnText}>850</Text>
                    </View>
                </View>
                <View style={styles.score}>
                    <Text style={styles.scoreTitle}>Puntuación Tirada:</Text>
                    <Text style={styles.scoreText}>850</Text>
                </View>
                <View style={styles.dices}>
                    <View style={styles.dicesSection}>
                        <Text style={styles.dicesText}>Dados</Text>
                        <View style={styles.dicesContainer}>
                            <Image style={styles.diceImage} source={dice1} />
                            <Image style={styles.diceImage} source={dice2} />
                            <Image style={styles.diceImage} source={dice3} />
                            <Image style={styles.diceImage} source={dice4} />
                            <Image style={styles.diceImage} source={dice5} />
                        </View>
                    </View>
                    <View style={styles.dicesSection}>
                        <Text style={styles.dicesText}>Separados</Text>
                        <View style={styles.dicesContainer}>
                            <Image style={styles.diceImage} source={dice1} />
                            <Image style={styles.diceImage} source={dice2} />
                            <Image style={styles.diceImage} source={dice3} />
                            <Image style={styles.diceImage} source={dice4} />
                            <Image style={styles.diceImage} source={dice5} />
                        </View>
                    </View>
                </View>
                <View style={styles.controls}>
                    <View style={styles.control}>
                        <CustomButton buttonStyle={{ backgroundColor: 'crimson' }} textStyle={{ color: 'white', fontSize: 20 }} handlePress={() => ''}>Pasar</CustomButton>
                    </View>
                    <View style={styles.control}>
                        <PrimaryButton textStyle={{ fontSize: 20 }} handlePress={() => ''}>Tirar Dados</PrimaryButton>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default StartGameScreen