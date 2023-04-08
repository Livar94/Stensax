import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { startGame } from './api';

export default function LobbyScreen({ navigation, route }) {
    const { playerId } = route.params;
    const [errorMessage, setErrorMessage] = useState(null);

    const handleStartGame = async () => {
        const started = await startGame(playerId);
        if (started) {
            navigation.navigate('WaitingForOpponent', { playerId });
        } else {
            setErrorMessage('Failed to start a new game. Please try again.');
        }
    };

    return (
        <View>
            <Button title="Start a new game" onPress={handleStartGame} />
            <Button title="Join an open game" onPress={() => navigation.navigate('OpenGames', { playerId })} />
            {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        </View>
    );
}
