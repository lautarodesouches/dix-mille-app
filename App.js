import { StatusBar, View } from 'react-native'
import { PlayersScreen } from './src/screens'

const App = () => {

  const players = []

  let id = 1

  class Player {
    constructor(name) {
      this.id = id++
      this.playerName = name
      this.points = 0
      this.inGame = false
      this.winner = false
      this.turn = false
    }
  }

  const addPlayer = name => {
    if (players.length < 4) players.push(new Player(name))
  }
  const removePlayer = player => {
    const i = players.indexOf(player)
    players.splice(i, 1)
    players.map(player => {
      if (player.id > i) {
        player.id = player.id - 1
      }
    })
    console.log(players)
  }

  const handleStartGame = () => console.log('Test')

  let content = (
    <PlayersScreen
      players={players}
      addPlayer={addPlayer}
      removePlayer={removePlayer}
      handleStartGame={handleStartGame}
    />
  )

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      {content}
    </View>
  );
}

export default App