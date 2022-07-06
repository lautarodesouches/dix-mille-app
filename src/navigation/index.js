import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './main';

const AppNavigator = () => {
    return (
        <NavigationContainer>
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