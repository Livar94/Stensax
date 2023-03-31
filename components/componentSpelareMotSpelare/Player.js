/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';

export const Player = () => {
    const [name, setName] = useState('');
    const [uuid, setUuid] = useState('');

    export const generateUuid = () => {
        axios.get(`${BASE_URL}/auth/token`)
            .then(response => {
                setUuid(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    export const setNameAndUuid = () => {
        const requestBody = { name: name };
        axios.post(`${BASE_URL}/${uuid}/name`, requestBody)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button title="Generate UUID" onPress={generateUuid} />
            {uuid ? <Text>{`UUID: ${uuid}`}</Text> : null}
            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title="Set Name" onPress={setNameAndUuid} />
        </View>
    );
};

export default {Player};




*/


// Player.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';
const GAME_BASE_URL = 'http://localhost:8080/api/games';

export default function Player({ navigation }) {
    const [name, setName] = useState('');
    const [uuid, setUuid] = useState('');

    const generateUuid = () => {
        axios.get(`${BASE_URL}/auth/token`)
            .then(response => {
                setUuid(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const setNameAndUuid = () => {
        const requestBody = { name: name };
        axios.post(`${BASE_URL}/${uuid}/name`, requestBody)
            .then(response => {
                console.log(response);
                navigation.navigate('GameOptions', { playerId: uuid });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button title="Generate UUID" onPress={generateUuid} />
            {uuid ? <Text>{`UUID: ${uuid}`}</Text> : null}
            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title="Set Name and Play" onPress={setNameAndUuid} />
        </View>
    );
};
