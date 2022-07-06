import { PlayersContextProvider } from './src/context'
import { useFonts } from 'expo-font'
import AppNavigator from './src/navigation'

const App = () => {

  const [loaded] = useFonts({
    RubikRegular: require('./src/assets/fonts/Rubik-Regular.ttf'),
    RubikBold: require('./src/assets/fonts/Rubik-Bold.ttf'),
    RubikThin: require('./src/assets/fonts/Rubik-Light.ttf'),
  });

  if (!loaded) return null;

  return (
    <PlayersContextProvider>
      <AppNavigator />
    </PlayersContextProvider>
  );
}

export default App