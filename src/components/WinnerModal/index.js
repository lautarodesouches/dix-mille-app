import { Modal, Text, View } from 'react-native'
import { styles } from './styles'

const WinnerModal = () => {
    return (
        <Modal
            animationType='slide'
            onDismiss={() => null}
        >
            <View style={styles.container}>
                <Text>Winner</Text>
            </View>
        </Modal>
    )
}

export default WinnerModal