import {Ball, moveBall} from './ball';
import {broadcastGameState, Players} from './game';
import {getGameState} from "./game";

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
    console.log('a user connected');
    socket.broadcast.emit(broadcastGameState());
    setInterval(function() {
        io.sockets.emit('gameState', broadcastGameState());
    }, 33);
    socket.on('disconnect', function(){
        console.log('user disconnected on socket: ' + socket);
    });
});

http.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});