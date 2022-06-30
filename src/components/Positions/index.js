import { useContext } from 'react'
import { Text, View } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const Positions = () => {

    const { positions } = useContext(PlayersContext)

    return (
        <View style={styles.container}>
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