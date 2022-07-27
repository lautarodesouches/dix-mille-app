import { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Modal, Text, View } from 'react-native'
import { BackButton, CustomButton, GameTable, PrimaryButton } from '../../components'
import { TUTORIAL_HINTS } from '../../constants'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const TutorialScreen = ({ navigation }) => {

    const fadeAnim = useRef(new Animated.Value(1)).current

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    const { players, setPlayers, addPlayer } = useContext(PlayersContext)

    const [timer, setTimer] = useState(null)
    const [showModal, setShowModal] = useState(true)
    const [tutorialSlide, setTutorialSlide] = useState(0)

    const closeModal = () => setShowModal(false)

    const handleNextSlide = () => {
        if (tutorialSlide + 1 === TUTORIAL_HINTS.length) {
            closeModal()
            return
        }
        fadeOut()
        let timerTimeOut = setTimeout(() => {
            setTutorialSlide(tutorialSlide + 1)
            fadeIn()
        }, 1000)
        setTimer(timerTimeOut)
    }

    const goHome = () => navigation.navigate('Home')

    useEffect(() => {
        addPlayer('Jugador 1')
    }, [])

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            e.preventDefault()
            clearTimeout(timer)
            setPlayers([])
            navigation.dispatch(e.data.action)
        })
    }, [navigation])

    return (
        <View style={styles.container}>
            {
                players.length > 0 && <GameTable />
            }
            {
                showModal && (
                    <Modal
                        transparent={true}
                        style={styles.modal}
                        animationType='fade'
                        onRequestClose={closeModal}
                    >
                        {
                            tutorialSlide < TUTORIAL_HINTS.length && (
                                <Animated.View
                                    style={
                                        [
                                            styles.hintContainer,
                                            {
                                                top: TUTORIAL_HINTS[tutorialSlide].top,
                                                bottom: TUTORIAL_HINTS[tutorialSlide].bottom
                                            },
                                            {
                                                opacity: fadeAnim
                                            }
                                        ]
                                    }
                                >
                                    <BackButton goBack={goHome} />
                                    <View style={styles.hintContent}>
                                        <Text style={styles.hintTitle}>
                                            {TUTORIAL_HINTS[tutorialSlide].title}
                                        </Text>
                                        <Text style={styles.hintMessage}>
                                            {TUTORIAL_HINTS[tutorialSlide].message}
                                        </Text>
                                    </View>
                                    <View style={styles.buttonsContainer}>
                                        {
                                            tutorialSlide === TUTORIAL_HINTS.length - 1 && (
                                                <CustomButton buttonStyle={styles.button} handlePress={goHome} textStyle={styles.buttonText}>
                                                    Ir al inicio
                                                </CustomButton>
                                            )
                                        }
                                        <PrimaryButton handlePress={handleNextSlide} textStyle={{ fontSize: 16 }} >
                                            {tutorialSlide === TUTORIAL_HINTS.length - 1 ? 'Continuar' : 'Siguiente'}
                                        </PrimaryButton>
                                    </View>
                                </Animated.View>
                            )
                        }
                    </Modal>
                )
            }
        </View>
    )
}
export default TutorialScreen