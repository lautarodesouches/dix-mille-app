import { PlayersContextProvider } from './src/context'
import ScreensManager from './src/screens';
import { useFonts } from 'expo-font'

const App = () => {

  const [loaded] = useFonts({
    RubikRegular: require('./src/assets/fonts/Rubik-Regular.ttf'),
    RubikBold: require('./src/assets/fonts/Rubik-Bold.ttf'),
    RubikThin: require('./src/assets/fonts/Rubik-Light.ttf'),
  });

  if (!loaded) return null;

  return (
    <PlayersContextProvider>
      <ScreensManager />
    </PlayersContextProvider>
  );
}

export default App