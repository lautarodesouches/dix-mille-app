import { useContext, useEffect, useRef, useState } from 'react'
import { Animated, Modal, View } from 'react-native'
import { GameTable, TutorialHint } from '../../components'
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
                                <TutorialHint
                                    fadeAnim={fadeAnim}
                                    tutorialSlide={tutorialSlide}
                                    handleNextSlide={handleNextSlide}
                                    goHome={goHome}
                                />
                            )
                        }
                    </Modal>
                )
            }
        </View>
    )
}
export default TutorialScreen