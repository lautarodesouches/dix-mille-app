import { useContext, useEffect } from 'react'
import { WinnerModal, GameTable } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const StartGameScreen = ({ gameOver }) => {

    const { currentPlayer, findCurrentPlayer, setCurrentPlayer, dices, separateDices, finishTurn, trowDices } = useContext(PlayersContext)

    useEffect(() => {
        setCurrentPlayer(findCurrentPlayer())
    }, [])

    return (
        <>
            {
                currentPlayer.winner
                    ?
                    <WinnerModal
                        gameOver={gameOver}
                    />
                    :
                    <GameTable
                        currentPlayer={currentPlayer}
                        dices={dices}
                        separateDices={separateDices}
                        finishTurn={finishTurn}
                        trowDices={trowDices}
                    />
            }
        </>
    )
}

export default StartGameScreen