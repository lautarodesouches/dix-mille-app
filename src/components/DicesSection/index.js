import { Image, Text, View, FlatList } from 'react-native'
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

    const renderItem = ({ item }) => <Image style={styles.diceImage} source={dicesImages[item - 1]} />

    return (
        <View style={styles.dicesSection}>
            <Text style={styles.dicesText}>{title}</Text>
            <FlatList
                horizontal
                data={dices}
                renderItem={renderItem}
                keyExtractor={(item, i) => i}
                extraData={dices}
                contentContainerStyle={styles.dicesContainer}
            />
        </View>
    )
}

export default DicesSection