import { Text, View } from 'react-native'
import { primaryBg, primaryBgDark } from '../../constants/Colors'
import { styles } from './styles'

const PlayerTotalPoints = ({ player, active = false }) => {
    return (
        <>
            {
                player.playerName && (
                    <View
                        style={[
                            styles.container,
                            {
                                flex: active ? 1 : .8,
                                backgroundColor: active ? primaryBgDark : primaryBg,
                            }
                        ]}>
                        {
                            active && <Text style={styles.label}>Actual</Text>
                        }
                        <Text style={styles.playerName}>
                            {player.playerName}
                        </Text>
                        <Text style={styles.playerPoints}>
                            {player.totalPoints}
                        </Text>
                    </View>
                )
            }
        </>
    )
}

export default PlayerTotalPoints