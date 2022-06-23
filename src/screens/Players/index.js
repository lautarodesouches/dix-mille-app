import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import PrimaryButton from '../../components/PrimaryButton';
import { styles } from './styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const PlayersScreen = ({ players, addPlayer, removePlayer, handleStartGame }) => {

    const [newPlayerName, setNewPlayerName] = useState('')

    const handleInput = value => setNewPlayerName(value)

    return (
        <View style={styles.container}>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Bienvenido!</Text>
            </View>
            <View style={styles.addPlayer}>
                <Text style={styles.addPlayerTitle}>Ingrese el nombre del jugador</Text>
                <TextInput
                    onChangeText={handleInput}
                    value={newPlayerName}
                    style={styles.addPlayerInput}
                />
                <PrimaryButton
                    handlePress={() => {
                        addPlayer(newPlayerName)
                        setNewPlayerName('')
                    }}
                >Agregar</PrimaryButton>
            </View>
            <View style={styles.activePlayers}>
                <View style={styles.aPContainer}>
                    <Text style={styles.aPTitle}>Jugador N° 1</Text>
                    <Text style={styles.aPName}>Primero</Text>
                    <TouchableOpacity onPress={() => removePlayer()}>
                        <Ionicons name='trash' size={22} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={styles.aPContainer}>
                    <Text style={styles.aPTitle}>Jugador N° 2</Text>
                    <Text style={styles.aPName}>Segundo</Text>
                    <TouchableOpacity onPress={() => removePlayer()}>
                        <Ionicons name='trash' size={22} color='grey' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.startContainer}>
                <PrimaryButton handlePress={handleStartGame} textStyle={{ fontSize: 22 }}>Empezar</PrimaryButton>
            </View>
        </View>
    );
}

export default PlayersScreen