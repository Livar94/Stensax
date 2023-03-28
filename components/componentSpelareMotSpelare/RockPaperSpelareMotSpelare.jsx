import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/user';

export default function Player () {
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

/*export default {Player};*/




