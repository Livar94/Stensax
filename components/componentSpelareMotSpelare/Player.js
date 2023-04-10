/*

// Player.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
/!*import axios from 'axios';*!/
import apiInstance from './apiInstance';


/!*const BASE_URL = 'http://localhost:8080/api/user';*!/
const BASE_URL = '/api/user';


export default function Player({ navigation }) {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');

    const generateToken = () => {
        /!*axios.get(`${BASE_URL}/auth/token`)*!/
        apiInstance.get('/auth/token')
            .then(response => {
                setToken(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const setNameAndToken = () => {
        const requestBody = { name: name };
       /!* axios.post(`${BASE_URL}/name`, requestBody, {
            headers: { 'Token': token, 'Content-Type': 'application/json' },
        })*!/
        apiInstance.post(`/name`, requestBody, {
            headers: { 'Token': token, 'Content-Type': 'application/json' },
        })
            .then(response => {
                console.log(response);
                navigation.navigate('GameOptions', { token: token });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button title="Generate Token" onPress={generateToken} />
            {token ? <Text>{`Token: ${token}`}</Text> : null}
            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title="Set Name and Play" onPress={setNameAndToken} />
        </View>
    );
};

*/

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { generateToken, setNameAndUuid } from './api';


export default function Player({ navigation }) {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');

    const handleGenerateToken = () => {
        console.log('handleGenerateToken called');
        generateToken()
            .then(uuid => {
                setToken(uuid);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const setNameAndToken = () => {
        setNameAndUuid(token, name)
            .then(response => {
                console.log(response);
                navigation.navigate('GameOptions', { token: token });
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View>
            <Button title="Generate Token" onPress={handleGenerateToken} />
            {token ? <Text>{`Token: ${token}`}</Text> : null}
            <TextInput
                placeholder="Enter your name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button title="Set Name and Play" onPress={setNameAndToken} />
        </View>
    );
};

