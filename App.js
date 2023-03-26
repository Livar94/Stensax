import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RockPaper from './components/componentSpelareMotData/RockPaper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <RockPaper />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
