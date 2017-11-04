import {Ball, moveBall} from './ball';
import {Score} from './score';

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

app.get('/', function(req, res){
    res.send('<h1>MultiPong server!</h1>'
        + "x: " + Ball.x +
        ", y: " + Ball.y +
        ", xspeed: " + Ball.xspeed +
        ", yspeed: " + Ball.yspeed +
        "<br>" +
        "score: " + JSON.stringify(Score)
    );
});

io.on('connection', function(socket){
    console.log('a user connected on socket: ' + socket);
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