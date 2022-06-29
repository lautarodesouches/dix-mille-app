import { Image, Text, View } from 'react-native'
import { styles } from './styles'

const DicesSection = ({ title, dices }) => {

    const dicesImages = [
        require('../../assets/images/1.png'),
        require('../../assets/images/2.png'),
        require('../../assets/images/3.png'),
        require('../../assets/images/4.png'),
        require('../../assets/images/5.png'),
        require('../../assets/images/6.png')
    ]

    return (
        <View style={styles.dicesSection}>
            <Text style={styles.dicesText}>{title}</Text>
            <View style={styles.dicesContainer}>
                {
                    dices.map((dice, i) => <Image key={i} style={styles.diceImage} source={dicesImages[dice - 1]} />)
                }
            </View>
        </View>
    )
}

export default DicesSection