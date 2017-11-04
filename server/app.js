import {Ball, moveBall} from './ball';
import {Score} from './score';

const app = require('express')();
const http = require('http').Server(app);
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

http.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});