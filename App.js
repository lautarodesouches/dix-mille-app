import { useState } from 'react'
import { StatusBar, View } from 'react-native'
import { GameOverScreen, PlayersScreen, StartGameScreen } from './src/screens'
import { INITIAL, WATING_PLAYERS, STARTING_GAME, PLAYING, GAMEOVER, WATING_ACTION, RESTART_GAME, CHANGE_PLAYERS } from './src/constants/AppStages'
import { PlayersContextProvider } from './src/context'

const App = () => {

  const [appStage, setAppStage] = useState(INITIAL)
  const [content, setContent] = useState(null)

  const handleStartGame = () => setAppStage(STARTING_GAME)

  if (appStage === INITIAL || appStage === CHANGE_PLAYERS) {
    setContent(<PlayersScreen handleStartGame={handleStartGame} />)
    setAppStage(WATING_PLAYERS)
  }

  if (appStage === STARTING_GAME || appStage === RESTART_GAME) {
    if (appStage === RESTART_GAME) {
      players.map(player => {
        player.points = 0
        player.inGame = false
        player.winner = false
        player.turn = false
      })
    }
    setContent(<StartGameScreen />)
    setAppStage(PLAYING)
  }

  if (appStage === GAMEOVER) {
    setContent(<GameOverScreen />)
    setAppStage(WATING_ACTION)
  }

  return (
    <PlayersContextProvider>
      <View style={{ flex: 1 }}>
        <StatusBar />
        {content}
      </View>
    </PlayersContextProvider>
  );
}

export default App