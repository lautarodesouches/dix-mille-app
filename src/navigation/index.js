import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainNavigator from './main';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar/>
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator