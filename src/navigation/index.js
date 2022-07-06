import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import MainNavigator from './main';

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar />
            <MainNavigator />
        </NavigationContainer>
    )
}

export default AppNavigator

/* function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Mas"
                onPress={() => navigation.navigate('Mas')}
            />
        </View>
    );
} */