// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import { startGame, getOpenGames, joinGame } from './api';

// export default function GameOptions({ route, navigation }) {
//     const { token } = route.params;
//     const [openGames, setOpenGames] = useState([]);

//     useEffect(() => {
//         fetchOpenGames();
//     }, []);

//     const fetchOpenGames = () => {
//         getOpenGames(token)
//             .then(data => {
//                 setOpenGames(data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };

//     const startNewGame = () => {
//         startGame(token)
//             .then(() => {
//                 navigation.navigate('RockPaperSpelareMotSpelare', { token: token });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };

//     const joinExistingGame = (gameId) => {
//         joinGame(gameId, token)
//             .then(() => {
//                 navigation.navigate('RockPaperSpelareMotSpelare', { token: token });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     };

//     return (
//         <View>
//             <Button title="Start a new game" onPress={startNewGame} />
//             <Text>Open games:</Text>
//             {openGames.map(game => (
//                 <View key={game.id}>
//                     <Text>{game.name}</Text>
//                     <Button title="Join" onPress={() => joinExistingGame(game.id)} />
//                 </View>
//             ))}
//         </View>
//     );
// }
