import { createContext, useState } from 'react'

export const PlayersContext = createContext()

const PlayersContextProvider = ({ children }) => {

    const [players, setPlayers] = useState([])
    const [dices, setDices] = useState([])
    const [availableDices, setAvailableDices] = useState(5)
    const [separateDices, setSeparateDices] = useState([])
    const [currentPlayerId, setCurrentPlayerId] = useState(0)
    const [positions, setPositions] = useState([])
    const [winner, setWinner] = useState(false)

    const LIMIT_OF_PLAYERS = 4
    const POINTS_TO_WIN = 10000

    class Player {
        constructor(name, id) {
            this.id = id
            this.playerName = name
            this.totalPoints = 0
            this.turnPoints = 0
            this.inGame = false
            this.winner = false
        }
    }

    const addPlayer = name => { if (players.length < LIMIT_OF_PLAYERS) setPlayers([...players, new Player(name, players.length)]) }

    const removePlayer = (playerToRemove) => {
        const newPlayers = players.filter(player => player !== playerToRemove)
        newPlayers.map(player => {
            if (player.id > playerToRemove.id) player.id = player.id - 1
        })
        setPlayers(newPlayers)
    }

    const resetDices = () => {
        setSeparateDices([])
        setAvailableDices(5)
    }

    const getDicesAmountOf = dices => {
        const stats = {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
            '6': 0
        }
        for (let i = 0; i < dices.length; i++) stats[dices[i]]++
        return stats
    }

    const calculateThrowScore = dices => {

        const dicesAmountOf = getDicesAmountOf(dices)

        if (dices.length === 5) {
            // FIVE OF A KIND
            if (dicesAmountOf[1] === 5) return 10000
            if (dicesAmountOf[5] === 5) return 250
            // STRAIGHT
            if (
                (
                    dicesAmountOf[1] === 1 &&
                    dicesAmountOf[2] === 1 &&
                    dicesAmountOf[3] === 1 &&
                    dicesAmountOf[4] === 1 &&
                    dicesAmountOf[5] === 1
                )
                ||
                (
                    dicesAmountOf[2] === 1 &&
                    dicesAmountOf[3] === 1 &&
                    dicesAmountOf[4] === 1 &&
                    dicesAmountOf[5] === 1 &&
                    dicesAmountOf[6] === 1
                )
            ) return 750
        }

        let throwScore = 0
        let newAvailableDices = availableDices
        const separateDicesToAdd = []

        const changeThrowScoreAvailableDicesAndAmount = (newThrowScore, dicesToRemove, diceNumber) => {
            // ADD SEPARATED DICES
            separateDicesToAdd.push(...(new Array(dicesAmountOf[diceNumber]).fill(diceNumber)))
            throwScore += newThrowScore
            newAvailableDices -= dicesToRemove
            // REMOVE NUMBER STAT
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

        players[currentPlayerId].turnPoints = 0

        resetDices()

        // MORE THAN ONE PLAYER
        if (players.length > 1) {
            // FIND NEXT AVAILABLE PLAYER
            for (let i = currentPlayerId + 1; i < players.length + 1; i++) {
                if (i === players.length) i = 0
                if (!players[i].winner) {
                    setCurrentPlayerId(players[i].id)
                    break
                }
            }
        }

        setPlayers(players)
    }

    const newTotalPoints = () => players[currentPlayerId].totalPoints + players[currentPlayerId].turnPoints
    const overPoints = () => newTotalPoints() > POINTS_TO_WIN
    const isWinner = () => players[currentPlayerId].totalPoints === POINTS_TO_WIN

    const win = () => {
        players[currentPlayerId].winner = true
        setPositions([...positions, { position: positions.length + 1, playerName: players[currentPlayerId].playerName }])
        setWinner(true)
    }

    const finishTurn = () => {
        if (players[currentPlayerId].turnPoints >= 750 && !overPoints()) players[currentPlayerId].inGame = true
        if (players[currentPlayerId].inGame && !overPoints()) players[currentPlayerId].totalPoints = newTotalPoints()
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
            players[currentPlayerId].winner = true
        } else {
            players[currentPlayerId].turnPoints += throwScore
        }
        setDices(newDices)
        setPlayers(players)
    }

    const finishGame = () => {
        players.map(player => {
            player.totalPoints = 0
            player.turnPoints = 0
            player.inGame = false
            player.winner = false
        })
        setWinner(false)
        setCurrentPlayerId(0)
        setPlayers(players)
        setPositions([])
    }

    const continueGame = () => {
        changeTurn()
        setWinner(false)
    }

    return (
        <PlayersContext.Provider
            value={{
                players,
                dices,
                separateDices,
                currentPlayerId,
                winner,
                positions,
                addPlayer,
                removePlayer,
                finishTurn,
                throwDices,
                setCurrentPlayerId,
                finishGame,
                overPoints,
                win,
                continueGame
            }}>
            {children}
        </PlayersContext.Provider>
    )
}

export default PlayersContextProvider