import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const BackButton = ({ goBack }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={goBack}>
            <Text style={styles.text}>X</Text>
        </TouchableOpacity>
    )
}

export default BackButton