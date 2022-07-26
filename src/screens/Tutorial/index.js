import { useContext, useEffect, useState } from 'react'
import { Modal, Text, View } from 'react-native'
import { BackButton, CustomButton, GameTable, PrimaryButton, SecondaryButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const TutorialScreen = ({ navigation }) => {

    const { players, setPlayers, addPlayer } = useContext(PlayersContext)

    const [showModal, setShowModal] = useState(true)
    const [tutorialSlide, setTutorialSlide] = useState(0)

    const tutorial = [
        {
            title: 'Bienvenido al tutorial!',
            message: 'Acá aprenderás como jugar Dix Mille.',
            top: '50%',
            right: 0,
            bottom: 0,
            left: 0,
        },
        {
            title: `Puntuación: `,
            message: `Acá se mostrará tu puntuación total. Si hay mas de un jugador el jugador actual se mostrará más grande y en un azul mas oscuro.`,
            top: '30%',
            right: 0,
            bottom: null,
            left: 0,
        },
        {
            title: 'Puntuación tirada:',
            message: 'Esta será la puntuación de la tirada actual.',
            top: '5%',
            right: 0,
            bottom: null,
            left: 0,
        },
        {
            title: '"Entrar al juego"',
            message: 'Para "entrar al juego" y desbloquear la opción de pasar de turno necesitas obtener al menos 750 puntos en un turno.',
            top: '5%',
            right: 0,
            bottom: null,
            left: 0,
        },
        {
            title: 'Pasar',
            message: 'Al obtener 750 puntos o más o estar en el juego se habilitará la opción de "Pasar" junto a la de "Tirar dados". Esta opción sumará los puntos que acumulaste en la tirada a los totales y finalizara tu turno.',
            top: null,
            right: 0,
            bottom: '15%',
            left: 0,
        },
        {
            title: 'Cuidado!',
            message: 'Si acabás de sacar 750 puntos o mas en tu turno y decidís tirar de nuevo puede que no saques nada y termine tu turno sin haber entrado al juego. Lo mas seguro es pasar!',
            top: '5%',
            right: 0,
            bottom: null,
            left: 0,
        },
        {
            title: 'Objetivo',
            message: 'El objetivo es llegar a los 10.000 puntos exactos. Si te pasas de los 10.000 puntos no se sumara nada a tu puntuación total y tendrás que intentarlo de nuevo.',
            top: '30%',
            right: '5%',
            bottom: '30%',
            left: '5%',
        },
        {
            title: 'Si hay mas de un jugador',
            message: 'Todos los jugadores tendrán la posibilidad de llegar a 10.000 para aparecer en el tablero final.',
            top: '30%',
            right: '5%',
            bottom: '30%',
            left: '5%',
        },
        {
            title: 'Felicitaciones!',
            message: 'Eso es todo, puedes continuar con la partida o volver a la página principal.',
            top: '30%',
            right: '5%',
            bottom: '30%',
            left: '5%',
        }
    ]

    const handleNextSlide = () => {
        setShowModal(false)
        setTimeout(() => {
            setShowModal(true)
        }, 1000)
        setTutorialSlide(tutorialSlide + 1)
    }

    const goBack = () => navigation.goBack()

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
            <Modal
                transparent={true}
                style={styles.modal}
                animationType='fade'
                onRequestClose={goBack}
            >
                {
                    (showModal && tutorialSlide < tutorial.length) && (
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
                            <BackButton goBack={goBack} />
                            <View style={styles.hintContent}>
                                <Text style={styles.hintTitle}>
                                    {tutorial[tutorialSlide].title}
                                </Text>
                                <Text style={styles.hintMessage}>
                                    {tutorial[tutorialSlide].message}
                                </Text>
                            </View>
                            <View style={styles.buttonsContainer}>
                                {
                                    tutorialSlide === tutorial.length - 1 && (
                                        <CustomButton buttonStyle={styles.button} handlePress={''} textStyle={styles.buttonText}>
                                            Ir al inicio
                                        </CustomButton>
                                    )
                                }
                                <PrimaryButton handlePress={handleNextSlide} textStyle={{ fontSize: 16 }} >
                                    {tutorialSlide === tutorial.length - 1 ? 'Continuar' : 'Siguiente'}
                                </PrimaryButton>
                            </View>
                        </View>
                    )
                }
            </Modal>
        </View>
    )
}
export default TutorialScreen