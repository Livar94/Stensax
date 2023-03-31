// LobbyScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { startGame } from '../api';

export default function LobbyScreen({ navigation, route }) {
    const { playerId } = route.params;

    const handleStartGame = async () => {
        const started = await startGame(playerId);
        if (started) {
            navigation.navigate('WaitingForOpponent', { playerId });
        } else {
            // Show an error message or handle the error as needed
        }
    };

    return (
        <View>
            <Button title="Start a new game" onPress={handleStartGame} />
            <Button title="Join an open game" onPress={() => navigation.navigate('OpenGames', { playerId })} />
        </View>
    );
}

