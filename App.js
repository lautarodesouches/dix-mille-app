import { StatusBar, View } from 'react-native'
import PlayersScreen from './src/screens/Players'

const App = () => {

  let id = 1

  class Player {
    constructor(name) {
      this.id = id++
      this.name = name
      this.points = 0
      this.inGame = false
      this.winner = false
      this.turn = false
    }
  }

  const player1 = new Player('Juan')
  const player2 = new Player('Mateo')

  const players = [player1, player2]

  const addPlayer = name => {
    players.push(new Player(name))
  }
  const removePlayer = player => {
    const i = players.indexOf(player)
    players.splice(i, 1)
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