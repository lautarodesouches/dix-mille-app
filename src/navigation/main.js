import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { GameOverScreen, HomeScreen, PlayersScreen, RulesScreen, StartGameScreen, TutorialScreen } from '../screens'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Players' component={PlayersScreen} />
            <Stack.Screen name='Game' component={StartGameScreen} />
            <Stack.Screen name='Over' component={GameOverScreen} />
            <Stack.Screen name='Tutorial' component={TutorialScreen} />
            <Stack.Screen name='Rules' component={RulesScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator