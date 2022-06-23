import { Text, TextInput, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import { styles } from './styles'

const Players = () => {

    const handleStartGame = () => console.log('Test');

    return(
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Bienvenido!</Text>
            </View>
            <View style={styles.addPlayer}>
                <Text style={styles.addPlayerTitle}>Ingrese el nombre del jugador</Text>
                <TextInput style={styles.addPlayerInput} />
                <PrimaryButton handlePress={handleStartGame}>Ingresar</PrimaryButton>
            </View>
            <View style={styles.activePlayers}>
                <View style={styles.aPContainer}>
                    <Text style={styles.aPTitle}>Jugador N° 1</Text>
                    <Text style={styles.aPName}>Primero</Text>
                </View>
                <View style={styles.aPContainer}>
                    <Text style={styles.aPTitle}>Jugador N° 2</Text>
                    <Text style={styles.aPName}>Segundo</Text>
                </View>
            </View>
            <View style={styles.startContainer}>
                <PrimaryButton handlePress={handleStartGame} textStyle={{fontSize: 22}}>Empezar</PrimaryButton>
            </View>
        </View>
    );
}

export default Players