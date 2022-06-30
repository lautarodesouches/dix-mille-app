import { styles } from './styles'
import { useContext, useState } from 'react'
import { ActivePlayer, PrimaryButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { FlatList, ImageBackground, Text, TextInput, View } from 'react-native'

const PlayersScreen = ({ startGame }) => {

    const [loadingImage, setLoadingImage] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState('')

    const { players, addPlayer, removePlayer } = useContext(PlayersContext)

    const handleLoadEnd = () => setLoadingImage(false)
    const handleInput = value => setNewPlayerName(value)
    const handleAddPlayer = () => {
        if (players.length < 4) {
            if (!newPlayerName) return
            addPlayer(newPlayerName)
            setNewPlayerName('')
        }
    }

    const renderActivePlayer = ({ item }) => <ActivePlayer player={item} removePlayer={removePlayer} />

    return (
        <ImageBackground
            source={require('../../assets/images/dicesfalling.jpg')}
            style={styles.backgroundImage}
            resizeMode={'cover'}
            onLoadEnd={() => handleLoadEnd()}
        >
            {
                !loadingImage && (
                    <View style={styles.container}>
                        <View style={styles.welcome}>
                            <Text style={styles.welcomeText}>Bienvenido a Dix Mille!</Text>
                        </View>
                        <View style={styles.addPlayer}>
                            <TextInput
                                onChangeText={handleInput}
                                value={newPlayerName}
                                style={styles.addPlayerInput}
                                placeholder={'Ingrese el nombre del jugador'}
                                placeholderTextColor={'grey'}
                                onEndEditing={() => handleAddPlayer()}
                            />
                            {
                                players.length < 4
                                    ?
                                    <PrimaryButton textStyle={styles.addPlayerText} handlePress={() => handleAddPlayer()}>
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
                            {
                                players.length
                                    ?
                                    <PrimaryButton handlePress={() => startGame()} textStyle={{ fontSize: 22 }}>Iniciar Juego</PrimaryButton>
                                    :
                                    null
                            }
                        </View>
                    </View>
                )
            }
        </ImageBackground>
    );
}

export default PlayersScreen