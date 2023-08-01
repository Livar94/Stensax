/*
import {StatusBar} from 'expo-status-bar';

import {Button, StyleSheet, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import ChooseGame from './components/FrontPage/ChooseGame';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import RockPaper from './components/componentSpelareMotData/RockPaper';

import RockPaperSpelareMotSpelare from './components/componentSpelareMotSpelare/Player';




const Stack = createStackNavigator();


const HomeScreen = ({navigation}) => {

    const handlePressPlayerVsComputer = () => {
        navigation.navigate('RockPaper');

    };

    const handlePressPlayerVsPlayer = () => {
        navigation.navigate('RockPaperSpelareMotSpelare');
    };

    return (

        <SafeAreaProvider>

            <View style={styles.container}>

                <ChooseGame title="Player VS Computer!" onPress={handlePressPlayerVsComputer}/>
                <Button title="Player VS Player!" onPress={handlePressPlayerVsPlayer}/>

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
                <Stack.Screen name="Lobby" component={LobbyScreen}/>
                <Stack.Screen name="WaitingForOpponent" component={WaitingForOpponentScreen}/>
                <Stack.Screen name="OpenGames" component={OpenGamesScreen}/>
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
});*/


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/FrontPage/HomeScreen';
// import LobbyScreen from './components/componentSpelareMotSpelare/LobbyScreen';
// import GameOptions from './components/componentSpelareMotSpelare/GameOptions';
// import WaitingForOpponentScreen from './components/componentSpelareMotSpelare/WaitingForOpponentScreen';
// import OpenGamesScreen from './components/componentSpelareMotSpelare/OpenGamesScreen';
// import RockPaperSpelareMotSpelareScreen from './components/componentSpelareMotSpelare/RockPaperSpelareMotSpelareScreen';
import RockPaper from "./components/componentSpelareMotData/RockPaper";
import Online from './components/componentSpelareMotSpelare/Online';
import Game from './components/componentSpelareMotSpelare/Game'

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Online" component={Online} />
                <Stack.Screen name="Game" component={Game} />
                {/* <Stack.Screen name="Lobby" component={LobbyScreen} />
                <Stack.Screen name="GameOptions" component={GameOptions} />
                <Stack.Screen name="WaitingForOpponent" component={WaitingForOpponentScreen} />
                <Stack.Screen name="OpenGames" component={OpenGamesScreen} /> */}
                <Stack.Screen name="RockPaper" component={RockPaper} />
                {/* <Stack.Screen name="RockPaperSpelareMotSpelareScreen" component={RockPaperSpelareMotSpelareScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


