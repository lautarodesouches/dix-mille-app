import Ionicons from '@expo/vector-icons/Ionicons'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const ActivePlayer = ({ player, removePlayer }) => {
    return (
        <View style={styles.aPContainer}>
            <Text style={styles.aPTitle}>Jugador N° {player.id + 1}</Text>
            <Text style={styles.aPName}>{player.playerName}</Text>
            <TouchableOpacity onPress={() => removePlayer(player)}>
                <Ionicons name='trash' size={22} color='grey' />
            </TouchableOpacity>
        </View>
    )
}

export default ActivePlayer