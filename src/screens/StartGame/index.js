import { useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { WinnersModal, GameTable } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const StartGameScreen = ({ navigation }) => {

    const { winner } = useContext(PlayersContext)

    const gameOver = () => navigation.navigate('GameOver')

    useEffect(() => {
        navigation.addListener('beforeRemove', e => {
            const action = e.data.action
            e.preventDefault()
            Alert.alert(
                'Estas seguro que querés ir atrás?',
                'El progreso de la partida se perderá',
                [
                    {
                        text: 'Seguir jugando',
                        style: 'destructive',
                        onPress: () => {}
                    },
                    {
                        text: 'Ir atrás',
                        style: 'cancel',
                        onPress: () => navigation.dispatch(e.data.action)
                    }
                ]
            )
        })
    },[navigation])

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