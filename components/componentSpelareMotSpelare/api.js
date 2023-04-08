// api.js
/*const BASE_URL = "http://localhost:8080/api/games";
const USER_BASE_URL = "http://localhost:8080/api/user";*/

const BASE_URL = "http://192.168.0.6:8080/api/games";
const USER_BASE_URL = "http://192.168.0.6:8080/api/user";


export const startGame = async (token) => {
    const response = await fetch(`${USER_BASE_URL}/game`, {
        method: "POST",
        headers: { "Token": token },
    });
    return response.ok;
};

export const getOpenGames = async () => {
    const response = await fetch(`${BASE_URL}/games`);
    return await response.json();
};

export const joinGame = async (gameId, token) => {
    const response = await fetch(`${BASE_URL}/join/${gameId}`, {
        headers: { "Token": token },
    });
    return await response.json();
};

export const getGameInfo = async (gameId, token) => {
    const response = await fetch(`${BASE_URL}/${gameId}`, {
        headers: { "Token": token },
    });
    return await response.json();
};

export const move = async (moveRequest, token) => {
    const response = await fetch(`${BASE_URL}/move`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Token": token,
        },
        body: JSON.stringify(moveRequest),
    });
    return await response.json();
};
