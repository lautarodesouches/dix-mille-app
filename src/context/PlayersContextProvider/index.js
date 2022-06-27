import { createContext, useState } from 'react'

export const PlayersContext = createContext()

const PlayersContextProvider = ({ children }) => {

    const [players, setPlayers] = useState([])

    const LIMIT_OF_PLAYERS = 4

    class Player {
        constructor(name, id) {
            this.id = id
            this.playerName = name
            this.points = 0
            this.inGame = false
            this.winner = false
            this.turn = false
        }
    }

    const addPlayer = name => { if (players.length < LIMIT_OF_PLAYERS) setPlayers([...players, new Player(name, players.length + 1)]) }

    const removePlayer = playerToRemove => {
        const newPlayers = players.filter(player => player !== playerToRemove)
        newPlayers.map(player => { if (player.id > playerToRemove.id) player.id = player.id - 1 })
        setPlayers(newPlayers)
    }

    const resetPoints = () => {
        players.map(player => {
            player.points = 0
            player.inGame = false
            player.winner = false
            player.turn = false
        })
        setPlayers(players)
    }

    return (
        <PlayersContext.Provider value={{ players, addPlayer, removePlayer, resetPoints }}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider