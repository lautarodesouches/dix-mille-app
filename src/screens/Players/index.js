import { FlatList, Text, TextInput, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { ActivePlayer, PrimaryButton } from '../../components'

const PlayersScreen = ({ players, addPlayer, removePlayer, handleStartGame }) => {

    const [newPlayerName, setNewPlayerName] = useState('')

    const handleInput = value => setNewPlayerName(value)

    const renderActivePlayer = ({ item }) => <ActivePlayer player={item} removePlayer={removePlayer} />

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
                {
                    players.length < 4
                        ?
                        <PrimaryButton
                            handlePress={() => {
                                addPlayer(newPlayerName)
                                setNewPlayerName('')
                            }}
                        >
                            Agregar
                        </PrimaryButton>
                        :
                        <Text style={styles.maxPlayers}>El máximo son 4 jugadores</Text>
                }
            </View>
            <View style={styles.activePlayerContainer}>
                <FlatList
                    data={players}
                    renderItem={renderActivePlayer}
                    numColumns={2}
                    extraData={players}
                />
            </View>
            <View style={styles.startContainer}>
                <PrimaryButton handlePress={handleStartGame} textStyle={{ fontSize: 22 }}>Iniciar Juego</PrimaryButton>
            </View>
        </View>
    );
}

export default PlayersScreen