import { INITIAL, WATING_PLAYERS, STARTING_GAME, PLAYING, GAMEOVER, WATING_ACTION, RESTART_GAME, CHANGE_PLAYERS } from './src/constants/AppStages'
import { PlayersScreen, StartGameScreen, GameOverScreen } from './src/screens'
import { PlayersContextProvider } from './src/context'
import { StatusBar, View } from 'react-native'
import { useFonts } from 'expo-font'
import { useState } from 'react'

const App = () => {

  const [appStage, setAppStage] = useState(INITIAL)
  const [content, setContent] = useState(null)

  const [loaded] = useFonts({
    RubikRegular: require('./src/assets/fonts/Rubik-Regular.ttf'),
    RubikBold: require('./src/assets/fonts/Rubik-Bold.ttf'),
    RubikThin: require('./src/assets/fonts/Rubik-Light.ttf'),
  });

  if (!loaded) return null;

  const startGame = () => setAppStage(STARTING_GAME)

  if (appStage === INITIAL || appStage === CHANGE_PLAYERS) {
    setContent(<PlayersScreen startGame={startGame} />)
    setAppStage(WATING_PLAYERS)
  }

  if (appStage === STARTING_GAME || appStage === RESTART_GAME) {
    setContent(<StartGameScreen restart={appStage === RESTART_GAME} />)
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