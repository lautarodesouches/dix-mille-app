import { useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { WinnersModal, GameTable } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const StartGameScreen = ({ navigation }) => {

    const { winner, finishGame } = useContext(PlayersContext)

    const gameOver = () => navigation.navigate('GameOver')

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            if (e.data.action.type === 'GO_BACK') {
                e.preventDefault()
                Alert.alert(
                    'Estas seguro que querés ir atrás?',
                    'El progreso de la partida se perderá',
                    [
                        {
                            text: 'Ir atrás',
                            style: 'cancel',
                            onPress: () => {
                                finishGame()
                                navigation.dispatch(e.data.action)
                            }
                        },
                        {
                            text: 'Seguir jugando',
                            style: 'destructive',
                            onPress: () => { }
                        }
                    ]
                )
            }
        })
    }, [navigation])

    return (
        <>
            {
                winner
                    ?
                    <WinnersModal gameOver={gameOver} />
                    :
                    <GameTable />
            }
        </>
    )
}

export default StartGameScreen