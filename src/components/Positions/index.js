import { Text, View } from 'react-native'
import { styles } from './styles'

const Positions = ({ positions, backgroundColor }) => {
    return (
        <View style={[{backgroundColor: backgroundColor}, styles.container]}>
            <Text style={styles.title}>Posiciones:</Text>
            {
                positions.map((player, id) => (
                    <View style={styles.position} key={id}>
                        <Text style={styles.text}>{id + 1}- {player.playerName}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default Positions