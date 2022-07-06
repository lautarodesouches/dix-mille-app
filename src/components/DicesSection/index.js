import { Image, Text, View, FlatList } from 'react-native'
import { DICES_IMAGES } from '../../constants'
import { styles } from './styles'

const DicesSection = ({ title, dices }) => {

    const renderItem = ({ item }) => <Image style={styles.diceImage} source={DICES_IMAGES[item - 1]} />

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