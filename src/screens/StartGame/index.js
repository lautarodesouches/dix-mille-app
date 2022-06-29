import { useContext, useEffect } from 'react'
import { WinnersModal, GameTable } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const StartGameScreen = ({ gameOver }) => {

    const { findCurrentPlayer, setCurrentPlayer, winner } = useContext(PlayersContext)

    useEffect(() => {
        setCurrentPlayer(findCurrentPlayer())
    }, [])

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