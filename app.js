const http = require('http');
const port = 3000;

var ball = {
	x: 50.0,
	y: 50.0,
	xspeed: 1.0,
	yspeed: 1.0,
	rad: 1.0
};

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end(
    	"x: " + ball.x + 
    	", y: " + ball.y + 
    	", xspeed: " + ball.xspeed + 
    	", yspeed" + ball.yspeed
    );
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
});
