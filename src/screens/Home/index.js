import { useState } from "react"
import { ImageBackground, Text, View } from "react-native"
import { PrimaryButton } from "../../components"
import { styles } from "./styles"

const HomeScreen = ({ navigation }) => {

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
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Dix Mille</Text>
                        </View>
                        <View style={styles.menuContainer}>
                            <PrimaryButton
                                textStyle={styles.optionText}
                                handlePress={() => handleOptionSelect('Game')}
                            >
                                Partida
                            </PrimaryButton>
                            <PrimaryButton
                                textStyle={styles.optionText}
                                handlePress={() => handleOptionSelect('Tutorial')}
                            >
                                Tutorial
                            </PrimaryButton>
                            <PrimaryButton
                                textStyle={styles.optionText}
                                handlePress={() => handleOptionSelect('Rules')}
                            >
                                Reglas
                            </PrimaryButton>
                        </View>
                    </View>
                )
            }
        </ImageBackground>
    )
}
export default HomeScreen