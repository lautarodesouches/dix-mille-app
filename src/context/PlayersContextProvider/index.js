import { createContext, useState } from 'react'

export const PlayersContext = createContext()

const PlayersContextProvider = ({ children }) => {

    const [players, setPlayers] = useState([])
    const [dices, setDices] = useState([])
    const [availableDices, setAvailableDices] = useState(5)
    const [separateDices, setSeparateDices] = useState([])

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

    const resetDices = () => {
        setDices([])
        setAvailableDices(5)
    }

    const findCurrentPlayer = () => players.find(player => player.isMyTurn)

    const getDicesAmountOf = dices => {
        const stats = {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0
        }
        for (let i = 0; i < dices.length; i++) {
            stats[dices[i]] += 1
        }
        return stats
    }

    const calculateThrowScore = dices => {

        const dicesAmountOf = getDicesAmountOf(dices)

        // FIVE OF A KIND
        if (dicesAmountOf[1] === 5) return 10000
        if (dicesAmountOf[5] === 5) return 250

        let throwScore = 0
        let newAvailableDices = availableDices

        // FOUR OF A KIND
        if (dicesAmountOf[1] === 4) {
            throwScore += 400
            newAvailableDices -= 4
            dicesAmountOf[1] = 0
        } else if (dicesAmountOf[5] === 4) {
            throwScore += 200
            newAvailableDices -= 4
            dicesAmountOf[5] = 0
        } else {
            // SEARCH FOR THREE OF A KIND
            for (let i = 0; i < 6; i++) {
                if (dicesAmountOf[i] === 3) {
                    if (i === 1) {
                        throwScore += 1000
                    } else {
                        throwScore += i * 100
                    }
                    newAvailableDices -= 3
                    dicesAmountOf[i] = 0
                }
            }
        }
        // SEARCH FOR ONE OF A KING
        if (newAvailableDices > 0) {
            if (dicesAmountOf[1] > 0 || dicesAmountOf[5] > 0) {
                // 1
                throwScore += dicesAmountOf[1] * 100
                newAvailableDices -= dicesAmountOf[1]
                dicesAmountOf[1] -= dicesAmountOf[1]
                // 5
                throwScore += dicesAmountOf[5] * 50
                newAvailableDices -= dicesAmountOf[5]
                dicesAmountOf[5] -= dicesAmountOf[5]
            }
        }

        if (newAvailableDices === 0) {
            setAvailableDices(5)
        } else {
            setAvailableDices(newAvailableDices)
        }
        return throwScore
    }

    const changeTurn = () => {
        resetDices()
        let currentPlayer = findCurrentPlayer()
        currentPlayer.turnPoints = 0
        if (players.length > 1) {
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

    const trowDices = currentPlayer => {
        const newDices = []
        for (let i = 0; i < availableDices; i++) {
            newDices.push(Math.round(Math.random() * 5) + 1)
        }
        let throwScore = calculateThrowScore(newDices)
        if (throwScore === 0) {
            changeTurn()
        } else if (throwScore === 10000) {
            players[currentPlayer.id].winner = true
        } else {
            players[currentPlayer.id].turnPoints += throwScore
            setDices(newDices)
        }
        setPlayers(players)
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