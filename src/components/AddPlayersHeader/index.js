import { styles } from './styles'
import PrimaryButton from '../PrimaryButton'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const AddPlayersHeader = ({players, addPlayer}) => {

    const [newPlayerName, setNewPlayerName] = useState('')

    const handleInput = value => setNewPlayerName(value)
    const handleAddPlayer = () => {
        if (players.length < 4) {
            if (!newPlayerName) return
            addPlayer(newPlayerName)
            setNewPlayerName('')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Añadir Jugadores</Text>
            <TextInput
                style={styles.addPlayerInput}
                onChangeText={handleInput}
                value={newPlayerName}
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
    )
}

export default AddPlayersHeader