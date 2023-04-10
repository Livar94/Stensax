import axios from 'axios';

const BASE_URL = "http://192.168.0.6:8080/api/games";
const USER_BASE_URL = "http://192.168.0.6:8080/api/user";

export const generateToken = async () => {
    const response = await axios.get(`${USER_BASE_URL}/auth/token`);
    return response.data;
};

export const setNameAndUuid = async (uuid, name) => {
    const requestBody = { name: name };
    const response = await axios.post(`${USER_BASE_URL}/name`, requestBody, {
        headers: {
            "Content-Type": "application/json",
            "Token": uuid,
        },
    });
    return response.status===200;
};

export const startGame = async (token) => {
    const response = await axios.post(`${USER_BASE_URL}/game`, null, {
        headers: { "Token": token },
    });
    return response.status===200;
};

export const getOpenGames = async () => {
    const response = await axios.get(`${BASE_URL}/games`);
    return response.data;
};

export const joinGame = async (gameId, token) => {
    const response = await axios.get(`${BASE_URL}/join/${gameId}`, {
        headers: { "Token": token },
    });
    return response.data;
};

export const getGameInfo = async (gameId, token) => {
    const response = await axios.get(`${BASE_URL}/${gameId}`, {
        headers: { "Token": token },
    });
    return response.data;
};

export const move = async (moveRequest, token) => {
    const response = await axios.post(`${BASE_URL}/move`, moveRequest, {
        headers: {
            "Content-Type": "application/json",
            "Token": token,
        },
    });
    return response.data;
};
