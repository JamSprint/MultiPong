import {Ball, moveBall} from './ball';
import {addPlayer, removeAllPlayers, fetchGameState, removePlayer} from './game';
import {Players} from "./players";

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', function(req, res) {
    res.send('<h1>MultiPong server!</h1>'
        + "x: " + Ball.x +
        ", y: " + Ball.y +
        ", xspeed: " + Ball.xspeed +
        ", yspeed: " + Ball.yspeed +
        "<br>" +
        "score: " + JSON.stringify(Players)
    );
});

io.on('connection', function(socket){
    console.log('A user connected with ID: ' + socket.id);

    socket.on('join', function(playerName) {
        console.log('Player ' + playerName + ' joined the game with socket ID: ' + socket.id);
        addPlayer(socket.id, playerName);
    });

    socket.on('leave', function(playerName) {
        console.log('Player ' + playerName + ' (' + socket.id + ') left the game');
        removePlayer(socket.id);
    });

    socket.on('kickAll', function(){
        console.log('Removing all players from the game: ' + Players.S.name + ', ' + Players.W.name + ', ' + Players.N.name + ', ' + Players.E.name);
        removeAllPlayers();
    });

    socket.on('disconnect', function(){
        console.log('User disconnected on socket: ' + socket.id);
        removePlayer(socket.id);
    });
});

setInterval(function() {
    let gameState = fetchGameState();
    io.sockets.emit('gameState', gameState);
}, 33);

http.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});