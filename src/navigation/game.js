import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GameOverScreen, PlayersScreen, StartGameScreen } from '../screens'

const Stack = createNativeStackNavigator()

const GameNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='AddPlayers'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='AddPlayers'
                component={PlayersScreen}
                options={{ title: 'Añadir Jugadores' }}
            />
            <Stack.Screen
                name='PlayGame'
                component={StartGameScreen}
                options={{ title: 'Tablero' }}
            />
            <Stack.Screen
                name='GameOver'
                component={GameOverScreen}
                options={{ title: 'Juego Terminado' }}
            />
        </Stack.Navigator>
    )
}

export default GameNavigator