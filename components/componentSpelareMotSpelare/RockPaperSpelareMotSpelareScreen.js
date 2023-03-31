import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getGameInfo, move } from './api';

//The main React component file where the game logic is handled
export default function RockPaperSpelareMotSpelareScreen({ route }) {
    const { game, playerId } = route.params;
    const [gameInfo, setGameInfo] = useState(game);
    const [moveChoice, setMoveChoice] = useState(null);

    useEffect(() => {
        const fetchGameInfo = async () => {
            const info = await getGameInfo(game.gameId, { playerId: playerId });
            setGameInfo(info);
        };

        fetchGameInfo();
        // Add polling mechanism
        const interval = setInterval(() => {
            fetchGameInfo();
        }, 5000); // Poll every 5 seconds

        return () => {
            clearInterval(interval);
        };
    }, [game.gameId, playerId]);

    const handleMove = async (playerMove) => {
        setMoveChoice(playerMove);
    };

    useEffect(() => {
        if (moveChoice) {
            const makeMove = async () => {
                const updatedGame = await move({ gameId: game.gameId, playerId: playerId, playerMove: moveChoice });
                setGameInfo(updatedGame);
            };

            makeMove();
            setMoveChoice(null);
        }
    }, [moveChoice, gameInfo]);

    const { gameId, status, playerOneWins, playerTwoWins, opponentId } = gameInfo;

    return (
        <View>
            <Text>Game ID: {gameId}</Text>
            <Text>Status: {status}</Text>
            <Text>Player One Wins: {playerOneWins}</Text>
            <Text>Player Two Wins: {playerTwoWins}</Text>
            <Button title="Rock" onPress={() => handleMove('ROCK')} />
            <Button title="Paper" onPress={() => handleMove('PAPER')} />
            <Button title="Scissors" onPress={() => handleMove('SCISSORS')} />
        </View>
    );
}
