// OpenGamesScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getOpenGames, joinGame } from '../componentSpelareMotSpelare/api';

export default function OpenGamesScreen({ navigation, route }) {
    const { token } = route.params;
    const [openGames, setOpenGames] = useState([]);

    useEffect(() => {
        const fetchOpenGames = async () => {
            const games = await getOpenGames();
            setOpenGames(games);
        };

        fetchOpenGames();
    }, []);

    const handleJoinGame = async (gameId) => {
        const game = await joinGame(gameId, token);
        navigation.navigate('RockPaperSpelareMotSpelare', { game, token });
    };

    return (
        <View>
            {openGames.map((game) => (
                <View key={game.gameId}>
                    <Text>Game ID: {game.gameId}</Text>
                    <Button title="Join Game" onPress={() => handleJoinGame(game.gameId)} />
                </View>
            ))}
        </View>
    );

}
