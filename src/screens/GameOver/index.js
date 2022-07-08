import { useState } from 'react'
import { styles } from './styles'
import { ImageBackground, View } from 'react-native'
import { ButtonDanger, PrimaryButton } from '../../components'

const GameOverScreen = ({ navigation }) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const handleLoadEnd = () => setLoadingImage(false)
    const handleOptionSelect = option => navigation.navigate(option)

    return (
        <ImageBackground
            source={require('../../assets/images/dicesfalling.jpg')}
            style={styles.backgroundImage}
            resizeMode={'cover'}
            onLoadEnd={() => handleLoadEnd()}
        >
            {
                !loadingImage && (
                    <View style={styles.container}>
                        <PrimaryButton
                            textStyle={styles.optionText}
                            handlePress={() => handleOptionSelect('AddPlayers')}
                        >
                            Cambiar jugadores
                        </PrimaryButton>
                        <PrimaryButton
                            textStyle={styles.optionText}
                            handlePress={() => handleOptionSelect('StartGame')}
                        >
                            Reiniciar juego
                        </PrimaryButton>
                        <ButtonDanger
                            textStyle={styles.optionText}
                            handlePress={() => handleOptionSelect('Home')}
                        >
                            Ir al inicio
                        </ButtonDanger>
                    </View>
                )
            }
        </ImageBackground >
    );
}

export default GameOverScreen