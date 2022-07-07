import { styles } from './styles'
import { useContext, useEffect, useState } from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { ActivePlayer, AddPlayersFooter, AddPlayersHeader, BackButton } from '../../components'
import { PlayersContext } from '../../context/PlayersContextProvider'

const AddPlayersScreen = ({ navigation }) => {

    const [loadingImage, setLoadingImage] = useState(true)

    const { players, setPlayers, addPlayer, removePlayer } = useContext(PlayersContext)

    const handleLoadEnd = () => setLoadingImage(false)
    const handleStartGame = () => navigation.navigate('StartGame')

    const renderActivePlayer = ({ item }) => <ActivePlayer player={item} removePlayer={removePlayer} />

    useEffect(() => {
        navigation.addListener('beforeRemove', () => {
            setPlayers([])
        })
    }, [navigation])

    return (
        <ImageBackground
            source={require('../../assets/images/dicesfalling.jpg')}
            style={styles.backgroundImage}
            resizeMode={'cover'}
            onLoadEnd={() => handleLoadEnd()}
        >
            <BackButton goBack={navigation.goBack}/>
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