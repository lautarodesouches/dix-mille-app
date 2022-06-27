import { StatusBar, View } from "react-native"
import { useState } from 'react'
import { INITIAL, WATING_PLAYERS, STARTING_GAME, PLAYING, GAMEOVER, WATING_ACTION, RESTART_GAME, CHANGE_PLAYERS } from '../constants/AppStages'
import PlayersScreen from "./Players"
import StartGameScreen from "./StartGame"
import GameOverScreen from "./GameOver"

const ScreenManager = () => {

    const [appStage, setAppStage] = useState(INITIAL)
    const [content, setContent] = useState(null)

    const startGame = () => setAppStage(STARTING_GAME)

    if (appStage === INITIAL || appStage === CHANGE_PLAYERS) {
        setContent(<PlayersScreen startGame={startGame} />)
        setAppStage(WATING_PLAYERS)
    }

    if (appStage === STARTING_GAME || appStage === RESTART_GAME) {
        if (appStage === RESTART_GAME) {
            resetPoints()
        }
        setContent(<StartGameScreen />)
        setAppStage(PLAYING)
    }

    if (appStage === GAMEOVER) {
        setContent(<GameOverScreen />)
        setAppStage(WATING_ACTION)
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar />
            {content}
        </View>
    )
}

export default ScreenManager