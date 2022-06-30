import { useContext } from 'react'
import { WinnersModal, GameTable } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const StartGameScreen = ({ gameOver }) => {

    const { winner } = useContext(PlayersContext)

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