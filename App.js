import { StatusBar, StyleSheet, View } from 'react-native';
import Players from './src/screens/Players';

const App = () => {

  let content = <Players />

  return (
    <View style={styles.container}>
      <StatusBar />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App