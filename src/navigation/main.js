import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, RulesScreen, TutorialScreen } from '../screens'
import GameNavigator from './game'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Inicio' }}
            />
            <Stack.Screen
                name='Game'
                component={GameNavigator}
            />
            <Stack.Screen
                name='Tutorial'
                component={TutorialScreen}
                options={{ title: 'Tutorial' }}
            />
            <Stack.Screen
                name='Rules'
                component={RulesScreen}
                options={{ title: 'Reglas' }}
            />
        </Stack.Navigator>
    )
}

export default MainNavigator