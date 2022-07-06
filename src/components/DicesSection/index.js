import { Image, Text, View, FlatList } from 'react-native'
import { styles } from './styles'

const DicesSection = ({ title, dices }) => {

    const dicesUrl = '../../assets/images/'

    const dicesImages = [
        require(dicesUrl + '1.png'),
        require(dicesUrl + '2.png'),
        require(dicesUrl + '3.png'),
        require(dicesUrl + '4.png'),
        require(dicesUrl + '5.png'),
        require(dicesUrl + '6.png')
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