import { useContext } from 'react'
import { Text, View } from 'react-native'
import { PlayersContext } from '../../context/PlayersContextProvider'
import { styles } from './styles'

const StartGameScreen = () => {

    const { players } = useContext(PlayersContext)

    console.log(players)

    return (
        <View style={styles.container}>
            <Text>Start Game</Text>
        </View>
    );
}

export default StartGameScreen