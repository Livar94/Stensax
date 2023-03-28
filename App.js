import {StatusBar} from 'expo-status-bar';

import {Button, StyleSheet, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import ChooseGame from './components/FrontPage/ChooseGame';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import RockPaper from './components/componentSpelareMotData/RockPaper';

import RockPaperSpelareMotSpelare from './components/componentSpelareMotSpelare/RockPaperSpelareMotSpelare';

/*
import { Player } from './components/componentSpelareMotSpelare/RockPaperSpelareMotSpelare';
*/


const Stack = createStackNavigator();


const HomeScreen = ({navigation}) => {

    const handlePress = () => {
        navigation.navigate('RockPaper');

    };

    const handlePressVsPlayer = () => {
        navigation.navigate('RockPaperSpelareMotSpelare');
    };

    return (

        <SafeAreaProvider>

            <View style={styles.container}>

                <ChooseGame title="Player VS Computer!" onPress={handlePress}/>
                <Button title="Player VS Player!" onPress={handlePressVsPlayer}/>

                <StatusBar style="auto"/>

            </View>

        </SafeAreaProvider>

    );

};


const RockPaperScreen = () => {

    return (

        <View>

            <RockPaper/>

        </View>

    );

};

const RockPaperSpelareMotSpelareScreen = () => {
    return (
        <View>
            <RockPaperSpelareMotSpelare/>
        </View>
    );
};

export default function App() {

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="RockPaper" component={RockPaperScreen}/>
                <Stack.Screen name="RockPaperSpelareMotSpelare" component={RockPaperSpelareMotSpelareScreen}/>

            </Stack.Navigator>

        </NavigationContainer>

    );

}


const styles = StyleSheet.create({

    container: {

        flex: 1

    },

});