// GameOptions.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const GAME_BASE_URL = 'http://localhost:8080/api/games';

export default function GameOptions({ route, navigation }) {
    const { token } = route.params;
    const [openGames, setOpenGames] = useState([]);

    useEffect(() => {
        fetchOpenGames();
    }, []);

    const fetchOpenGames = () => {
        axios.get(`${GAME_BASE_URL}/games`, {
            headers: { 'Token': token }
        })
            .then(response => {
                setOpenGames(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const startGame = () => {
        axios.post(`${GAME_BASE_URL}/game`, null, {
            headers: { 'Token': token }
        })
            .then(response => {
                navigation.navigate('RockPaperSpelareMotSpelare', { token: token });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const joinGame = (gameId) => {
        axios.get(`${GAME_BASE_URL}/join/${gameId}`, {
            headers: { 'Token': token }
        })
            .then(response => {
                navigation.navigate('RockPaperSpelareMotSpelare', { token: token });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button title="Start a new game" onPress={startGame} />
            <Text>Open games:</Text>
            {openGames.map (game => (
                <View key={game.id}>
                    <Text>{game.name}</Text>
                    <Button title="Join" onPress={() => joinGame(game.id)} />
                </View>
            ))}
        </View>
    );
}
