import CustomButton from '../CustomButton'
import styles from './styles'

const ButtonDanger = ({ textStyle, handlePress, children }) => {
    return (
        <CustomButton buttonStyle={styles.button} textStyle={{ ...styles.text, ...textStyle }} handlePress={handlePress}>
            {children}
        </CustomButton>
    );
}

export default ButtonDanger