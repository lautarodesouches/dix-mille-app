import { PlayersContextProvider } from './src/context'
import { useFonts } from 'expo-font'
import AppNavigator from './src/navigation'

const App = () => {

  const [loaded] = useFonts({
    KaiseiOptiRegular: require('./src/assets/fonts/KaiseiOpti-Regular.ttf'),
    KaiseiOptiBold: require('./src/assets/fonts/KaiseiOpti-Bold.ttf')
  })

  if (!loaded) return null

  return (
    <PlayersContextProvider>
      <AppNavigator />
    </PlayersContextProvider>
  );
}

export default App