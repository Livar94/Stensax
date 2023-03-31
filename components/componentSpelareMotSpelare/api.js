// api.js
const BASE_URL = "http://yourserverurl.com/api/games"; // Replace "yourserverurl.com" with your actual server URL

export const startGame = async (playerId) => {
    const response = await fetch(`${BASE_URL}/${playerId}/game`, { method: "POST" });
    return response.ok;
};

export const getOpenGames = async () => {
    const response = await fetch(`${BASE_URL}/games`);
    const data = await response.json();
    return data;
};

export const joinGame = async (gameId, playerId) => {
    const response = await fetch(`${BASE_URL}/join/${gameId}?playerId=${playerId}`);
    const data = await response.json();
    return data;
};

export const getGameInfo = async (gameId, playerId) => {
    const response = await fetch(`${BASE_URL}/${gameId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId }),
    });
    const data = await response.json();
    return data;
};

// api.js
export const move = async (moveRequest) => {
    const response = await fetch(`${BASE_URL}/move`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(moveRequest),
    });
    const data = await response.json();
    return data;
};


