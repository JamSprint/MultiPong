const http = require('http');
const port = 3000;

var ball = {
	x: 50.0,
	y: 50.0,
	xspeed: 0.98,
	yspeed: 1.37,
	rad: 1.0
};

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(
    	"x: " + ball.x + 
    	", y: " + ball.y + 
    	", xspeed: " + ball.xspeed + 
    	", yspeed: " + ball.yspeed
    );
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});

setInterval(moveBall, 33); // 33 milliseconds = ~ 30 frames per sec

function moveBall() {
    ball.x = ball.x + ball.xspeed;
    if (ball.x > 100) {
    	ball.xspeed = -1 * ball.xspeed;
    	ball.x = 100 - (ball.x % 100);
    } else if (ball.x < 0) {
    	ball.xspeed = -1 * ball.xspeed;
    	ball.x = (ball.x % 100);
    }
    ball.y = ball.y + ball.yspeed;
    if (ball.y > 100) {
    	ball.yspeed = -1 * ball.yspeed;
    	ball.y = 100 - (ball.y % 100);
    } else if (ball.y < 0) {
    	ball.yspeed = -1 * ball.yspeed;
    	ball.y = (ball.y % 100);
    }
}