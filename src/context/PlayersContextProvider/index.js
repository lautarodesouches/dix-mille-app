import { createContext, useState } from 'react'

export const PlayersContext = createContext()

const PlayersContextProvider = ({ children }) => {

    const [players, setPlayers] = useState([])
    const [dices, setDices] = useState([])
    const [availableDices, setAvailableDices] = useState(5)
    const [separateDices, setSeparateDices] = useState([])
    const [currentPlayer, setCurrentPlayer] = useState({})
    const [positions, setPositions] = useState([])
    const [winner, setWinner] = useState(false)

    const LIMIT_OF_PLAYERS = 4
    const POINTS_TO_WIN = 1500//10000

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

    const removePlayer = (playerToRemove, resetTurn = true) => {
        const newPlayers = players.filter(player => player !== playerToRemove)
        newPlayers.map(player => {
            if (player.id > playerToRemove.id) player.id = player.id - 1
            if(resetTurn)player.isMyTurn = player.id === 0
        })
        setPlayers(newPlayers)
    }

    const resetPoints = () => {
        players.map(player => {
            player.totalPoints = 0
            player.turnPoints = 0
            player.inGame = false
            player.winner = false
            player.isMyTurn = player.id === 0
            player.position = 0
        })
        setWinner(false)
        setPlayers(players)
        setPositions([])
    }

    const resetDices = () => {
        setSeparateDices([])
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
        for (let i = 0; i < dices.length; i++) stats[dices[i]] += 1
        return stats
    }

    const calculateThrowScore = dices => {

        const dicesAmountOf = getDicesAmountOf(dices)

        // FIVE OF A KIND
        if (dicesAmountOf[1] === 5) return 10000
        if (dicesAmountOf[5] === 5) return 250

        let throwScore = 0
        let newAvailableDices = availableDices
        const separateDicesToAdd = []

        const changeThrowScoreAvailableDicesAndAmount = (newThrowScore, dicesToRemove, diceNumber) => {
            // CHANGE SEPARATE DICES
            for (let i = 0; i < dicesAmountOf[diceNumber]; i++) {
                separateDicesToAdd.push(diceNumber)
            }

            // CORE FUNCTION
            throwScore += newThrowScore
            newAvailableDices -= dicesToRemove
            dicesAmountOf[diceNumber] = 0

        }

        // FOUR OF A KIND
        if (dicesAmountOf[1] === 4) {
            changeThrowScoreAvailableDicesAndAmount(400, 4, 1)
        } else if (dicesAmountOf[5] === 4) {
            changeThrowScoreAvailableDicesAndAmount(200, 4, 5)
        } else {
            // SEARCH FOR THREE OF A KIND
            for (let i = 0; i < 6; i++) {
                if (dicesAmountOf[i] === 3) {
                    let newThrowScore = i * 100
                    if (i === 1) newThrowScore += 1000
                    changeThrowScoreAvailableDicesAndAmount(newThrowScore, 3, i)
                }
            }
        }
        // SEARCH FOR ONE OF A KIND
        if (newAvailableDices > 0) {
            if (dicesAmountOf[1] > 0) changeThrowScoreAvailableDicesAndAmount(dicesAmountOf[1] * 100, dicesAmountOf[1], 1)
            if (dicesAmountOf[5] > 0) changeThrowScoreAvailableDicesAndAmount(dicesAmountOf[5] * 50, dicesAmountOf[5], 5)
        }

        if (newAvailableDices === 0) {
            resetDices()
        } else {
            setAvailableDices(newAvailableDices)
            setSeparateDices([...separateDices, ...separateDicesToAdd])
        }

        return throwScore
    }

    const changeTurn = () => {

        currentPlayer.turnPoints = 0

        resetDices()

        if (players.length > 1) {
            let isLastPlayer = currentPlayer.id + 1 === players.length
            if (isLastPlayer) {
                players[0].isMyTurn = true
            } else {
                players[currentPlayer.id + 1].isMyTurn = true
            }
            players[currentPlayer.id].isMyTurn = false
            setCurrentPlayer(findCurrentPlayer())
        }

        setPlayers(players)
    }

    const newTotalPoints = () => currentPlayer.totalPoints + currentPlayer.turnPoints
    const overPoints = () => newTotalPoints() > POINTS_TO_WIN
    const isWinner = () => currentPlayer.totalPoints === POINTS_TO_WIN

    const win = () => {
        players[currentPlayer.id].winner = true
        positions.push(currentPlayer)
        setPositions(positions)
        setWinner(true)
    }

    const finishTurn = () => {
        if (currentPlayer.turnPoints >= 750) players[currentPlayer.id].inGame = true
        if (currentPlayer.inGame && !overPoints()) {
            currentPlayer.totalPoints = newTotalPoints()
        }
        if (isWinner()) return win()
        changeTurn()
    }

    const throwDices = () => {
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
        }
        setDices(newDices)
        setPlayers(players)
    }

    const continueGame = () => {
        let playerToRemove = currentPlayer
        changeTurn()
        removePlayer(playerToRemove, false)
        setWinner(false)
    }

    return (
        <PlayersContext.Provider
            value={{
                players,
                dices,
                separateDices,
                currentPlayer,
                winner,
                positions,
                addPlayer,
                removePlayer,
                findCurrentPlayer,
                finishTurn,
                throwDices,
                setCurrentPlayer,
                resetPoints,
                overPoints,
                win,
                continueGame
            }}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider