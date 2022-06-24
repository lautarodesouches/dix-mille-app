import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const CustomButton = ({ buttonStyle, textStyle, handlePress, children }) => {
    return (
        <TouchableOpacity style={[styles.button, { ...buttonStyle }]} onPress={() => handlePress()}>
            <Text style={[styles.text, { ...textStyle }]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomButton