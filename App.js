import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ChooseGame from './components/FrontPage/ChooseGame';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RockPaper from './components/componentSpelareMotData/RockPaper';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('RockPaper');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ChooseGame title="Play VS Computer!" onPress={handlePress} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
};

const RockPaperScreen = () => {
  return (
    <View>
      <RockPaper />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RockPaper" component={RockPaperScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
