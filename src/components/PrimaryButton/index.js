import CustomButton from '../CustomButton';
import styles from './styles'

const PrimaryButton = ({ textStyle, handlePress, children }) => {
    return (
        <CustomButton buttonStyle={styles.button} textStyle={{ ...styles.text, ...textStyle }} handlePress={handlePress}>
            {children}
        </CustomButton>
    );
}

export default PrimaryButton