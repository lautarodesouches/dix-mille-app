import { useContext, useEffect, useState } from 'react'
import { Modal, Text, View } from 'react-native'
import { BackButton, GameTable, PrimaryButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const TutorialScreen = ({ navigation }) => {

    const { players, setPlayers, addPlayer } = useContext(PlayersContext)

    const [showModal, setShowModal] = useState(true)
    const [timer, setTimer] = useState(true)
    const [tutorialSlide, setTutorialSlide] = useState(0)

    const tutorial = [
        {
            message: 'Bienvenido al tutorial de Dix Mill!',
            top: '50%',
            right: 0,
            left: 0,
            bottom: 0,
        },
        {
            message: 'A',
            top: 10,
            right: 10,
            left: null,
            bottom: null,
        },
        {
            message: 'B',
            top: 0,
            right: 0,
            left: null,
            bottom: null,
        },
        {
            message: 'C',
            top: 0,
            right: 0,
            left: null,
            bottom: null,
        },
        {
            message: 'D',
            top: 0,
            right: 0,
            left: null,
            bottom: null,
        }
    ]

    const handleNextSlide = () => {
        setShowModal(false)
        setTimer(
            setTimeout(() => {
                setShowModal(true)
            }, 2000)
        )
        setTutorialSlide(tutorialSlide + 1)
    }

    const handleGoBack = () => {
        console.log('timer', timer)
        clearTimeout(timer)
        navigation.goBack()
    }

    useEffect(() => {
        addPlayer('Jugador 1')
    }, [])

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            setPlayers([])
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
                        onRequestClose={handleNextSlide}
                    >
                        <View
                            style={
                                [
                                    styles.hintContainer,
                                    {
                                        top: tutorial[tutorialSlide].top,
                                        right: tutorial[tutorialSlide].right,
                                        bottom: tutorial[tutorialSlide].bottom,
                                        left: tutorial[tutorialSlide].left
                                    }
                                ]
                            }
                        >
                            <BackButton goBack={handleGoBack} />
                            <View style={styles.hintContent}>
                                <Text style={styles.hintText}>
                                    {tutorial[tutorialSlide].message}
                                </Text>
                            </View>
                            <PrimaryButton handlePress={handleNextSlide} textStyle={{ fontSize: 16 }} >
                                Siguiente
                            </PrimaryButton>
                        </View>
                    </Modal>
                )
            }
        </View>
    )
}
export default TutorialScreen