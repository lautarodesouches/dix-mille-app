import { styles } from './styles'
import { useContext, useState } from 'react'
import { FlatList, ImageBackground, View } from 'react-native'
import { ActivePlayer, AddPlayersFooter, AddPlayersHeader } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const AddPlayersScreen = ({ navigation }) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const { players, addPlayer, removePlayer } = useContext(PlayersContext)

    const handleLoadEnd = () => setLoadingImage(false)
    const handleStartGame = () => navigation.navigate('PlayGame')

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
                    <FlatList
                        contentContainerStyle={styles.contentContainer}
                        data={players}
                        renderItem={renderActivePlayer}
                        numColumns={2}
                        extraData={players}
                        ListHeaderComponent={<AddPlayersHeader players={players} addPlayer={addPlayer} />}
                        ListFooterComponent={<AddPlayersFooter players={players} handleStartGame={handleStartGame} />}
                    />
                )
            }
        </ImageBackground>
    );
}

export default AddPlayersScreen