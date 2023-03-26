import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Text, TextInput} from "react-native-paper";
import {Button} from "react-native";

function View(props) {
    return null;
}

function RockPaperSpelareMotSpelare() {
    const [uuid, setUuid] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        // Fetch UUID
        axios.get('http://localhost:8080/api/user/auth/token')
            .then(response => {
                setUuid(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const handleSetName = () => {
        // Send POST request to set name
        axios.post(`http://localhost:8080/api/user/${uuid}/name`, { name })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <View>
            <Text>UUID: {uuid}</Text>
            <TextInput value={name} onChangeText={setName} />
            <Button title="Set Name" onPress={handleSetName} />
        </View>
    );


}


