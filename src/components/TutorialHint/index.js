import { Animated, Text, View } from 'react-native'
import { TUTORIAL_HINTS } from '../../constants'
import BackButton from '../BackButton'
import ButtonDanger from '../ButtonDanger'
import PrimaryButton from '../PrimaryButton'
import { styles } from './styles'

const TutorialHint = ({ fadeAnim, tutorialSlide, goHome, handleNextSlide }) => {

    const { top, bottom, title, message } = TUTORIAL_HINTS[tutorialSlide]

    return (
        <Animated.View
            style={
                [
                    styles.container,
                    {
                        top: top,
                        bottom: bottom
                    },
                    {
                        opacity: fadeAnim
                    }
                ]
            }
        >
            <BackButton goBack={goHome} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.message}>
                    {message}
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                {
                    tutorialSlide === TUTORIAL_HINTS.length - 1 && (
                        <ButtonDanger handlePress={goHome} >
                            Ir al inicio
                        </ButtonDanger>
                    )
                }
                <PrimaryButton handlePress={handleNextSlide} textStyle={{ fontSize: 16 }} >
                    {tutorialSlide === TUTORIAL_HINTS.length - 1 ? 'Jugar' : 'Siguiente'}
                </PrimaryButton>
            </View>
        </Animated.View>
    )
}

export default TutorialHint