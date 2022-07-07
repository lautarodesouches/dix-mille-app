import { styles } from './styles'
import { View } from 'react-native'
import PrimaryButton from '../PrimaryButton'

const AddPlayersFooter = ({ players, handleStartGame }) => (
    <View style={styles.container}>
        {
            players.length
                ?
                <PrimaryButton handlePress={handleStartGame} textStyle={{ fontSize: 22 }}>Iniciar Juego</PrimaryButton>
                :
                null
        }
    </View>
)

export default AddPlayersFooter