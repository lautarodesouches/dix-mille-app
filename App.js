import { useState } from 'react'
import { StatusBar, View } from 'react-native'
import { GameOverScreen, PlayersScreen, StartGameScreen } from './src/screens'
import { GAMEOVER, INITIAL, PLAYING, STARTING_GAME, WATING_PLAYERS } from './src/constants/appStages'

const App = () => {

  const [appStage, setAppStage] = useState(INITIAL)
  const [content, setContent] = useState(null)

  const players = []

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

  const addPlayer = name => { if (players.length < 4) players.push(new Player(name, players.length + 1)) }

  const removePlayer = player => {
    const i = players.indexOf(player)
    players.splice(i, 1)
    players.map(player => { if (player.id > i) player.id-- })
  }

  const handleStartGame = () => setAppStage(STARTING_GAME)

  if (appStage === INITIAL || appStage === CHANGE_PLAYERS) {
    setContent(<PlayersScreen players={players} addPlayer={addPlayer} removePlayer={removePlayer} handleStartGame={handleStartGame} />)
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
    setContent(<StartGameScreen players={players} />)
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
  );
}

export default App