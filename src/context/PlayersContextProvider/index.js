import { createContext, useState } from 'react'

export const PlayersContext = createContext()

const PlayersContextProvider = ({ children }) => {

    const [players, setPlayers] = useState([])
    const [dices, setDices] = useState([1, 2, 3, 4, 5])

    const LIMIT_OF_PLAYERS = 4

    class Player {
        constructor(name, id) {
            this.id = id
            this.playerName = name
            this.totalPoints = 0
            this.turnPoints = 0
            this.inGame = false
            this.winner = false
            this.isMyTurn = id === 0
        }
    }

    const addPlayer = name => { if (players.length < LIMIT_OF_PLAYERS) setPlayers([...players, new Player(name, players.length)]) }

    const removePlayer = playerToRemove => {
        const newPlayers = players.filter(player => player !== playerToRemove)
        newPlayers.map(player => { if (player.id > playerToRemove.id) player.id = player.id - 1 })
        setPlayers(newPlayers)
    }

    const resetPoints = () => {
        players.map(player => {
            player.totalPoints = 0
            player.turnPoints = 0
            player.inGame = false
            player.winner = false
            player.isMyTurn = player.id === 0
        })
        setPlayers(players)
    }

    const findCurrentPlayer = () => players.find(player => player.isMyTurn)

    const changeTurn = () => {
        if (players.length > 1) {
            let currentPlayer = findCurrentPlayer()
            let isLastPlayer = currentPlayer.id + 1 === players.length
            if (isLastPlayer) {
                players[0].isMyTurn = true
            } else {
                players[currentPlayer.id + 1].isMyTurn = true
            }
            players[currentPlayer.id].isMyTurn = false
        }
        setPlayers(players)
    }

    const trowDices = () => {
        const newDices = []
        for (let i = 0; i < dices.length; i++) {
            newDices.push(Math.round(Math.random() * 4) + 1)
        }
        console.log(newDices)
        setDices(newDices)
    }

    return (
        <PlayersContext.Provider
            value={{
                players,
                dices,
                addPlayer,
                removePlayer,
                resetPoints,
                findCurrentPlayer,
                changeTurn,
                trowDices
            }}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider