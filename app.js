const app = require('express')();
const http = require('http').Server(app);
const port = 3000;

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