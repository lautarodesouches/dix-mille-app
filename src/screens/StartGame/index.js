import { useContext } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { PrimaryButton, CustomButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const StartGameScreen = () => {

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
                    <Text style={styles.scoreText}>Puntuación Tirada:</Text>
                    <Text style={styles.scoreText}>850</Text>
                </View>
                <View style={styles.dices}>
                    <View style={styles.currentDices}>
                        <Text style={styles.currentDicesText}>Dados</Text>
                    </View>
                    <View style={styles.separateDices}>
                        <Text style={styles.separateDicesText}>Separados</Text>
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