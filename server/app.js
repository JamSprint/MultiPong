import {Ball, moveBall} from 'ball';

const app = require('express')();
const http = require('http').Server(app);
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(
    	"x: " + Ball.x +
    	", y: " + Ball.y +
    	", xspeed: " + Ball.xspeed +
    	", yspeed: " + Ball.yspeed
    );
};

app.get('/', function(req, res){
    res.send('<h1>MultiPong server!</h1>'
        + "x: " + Ball.x +
        ", y: " + Ball.y +
        ", xspeed: " + Ball.xspeed +
        ", yspeed: " + Ball.yspeed);
});

http.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});