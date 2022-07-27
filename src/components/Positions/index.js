import { useContext } from 'react'
import { Text, View, FlatList } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const Positions = () => {

    const { positions } = useContext(PlayersContext)

    const renderItem = ({ item }) => {
        return (
            <View style={styles.position}>
                <Text style={styles.text}>{item.position}-</Text>
                <Text style={styles.text}>{item.playerName}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Posiciones:</Text>
            <FlatList
                data={positions}
                renderItem={renderItem}
                keyExtractor={item => item.position}
                extraData={positions}
                style={{}}
                contentContainerStyle={{}}
            />
        </View>
    )
}

export default Positions