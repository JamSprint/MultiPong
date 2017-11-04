import {Ball} from "./ball";
import {Position} from "./position";
import {Players} from "./players";

function createGameState() {
    if (Ball === undefined || Ball === null) {
        return {}
    } else if (Position === undefined || Position === null) {
        return {}
    }
    return {
        ballPosition: createBall(Ball),
        playerPositionSouth: createPlayerPosition(Position.S),
        playerPositionWest: createPlayerPosition(Position.W),
        playerPositionNorth: createPlayerPosition(Position.N),
        playerPositionEast: createPlayerPosition(Position.E)
    }
}

function playerExists(player) {
    return player !== null;
}

function createBall(ball) {
    return {
        size: ball.rad,
        x: ball.x,
        y: ball.y
    }
}

function createPlayerPosition(player) {
    const doesPlayerExist = playerExists(player);
    return {
        playerExists: doesPlayerExist,
        x: doesPlayerExist ? player.x : 0,
        y: doesPlayerExist ? player.y : 0
    }
}

export function fetchGameState() {
    return createGameState();
}

function ballOnBallCollide(ball1, ball2) {
    var distanceSquared = Math.pow((ball1.x-ball2.x), 2)+Math.pow((ball1.y-ball2.y), 2);
    var radiusesSquared = Math.pow(ball1.rad, 2) + Math.pow(ball2.rad,2);
    if (distanceSquared < radiusesSquared) {
        return true;
    }
    return false;
}

function ballOnBallBounce(ball1, ball2) {
    // get the mtd (minimum translation distance)
    var deltaX = ball1.x - ball2.x;
    var deltaY = ball1.y - ball2.y;
    var distance = Math.sqrt(Math.pow((ball1.x-ball2.x), 2)+Math.pow((ball1.y-ball2.y), 2));

    // minimum translation distance to push balls apart after intersecting
    var mtdX = deltaX * ((ball1.radius+ball2.radius-distance)/distance);
    var mtdY = deltaY * ((ball1.radius+ball2.radius-distance)/distance);

    // push-pull them apart based off their velocity
    var speed1 = Math.sqrt(Math.pow((ball1.xspeed, 2)+Math.pow((ball1.yspeed, 2))));
    var speed2 = Math.sqrt(Math.pow((ball2.xspeed, 2)+Math.pow((ball2.yspeed, 2))));
    //position = position.add(mtd.multiply(im1 / (im1 + im2)));
    //ball.position = ball.position.subtract(mtd.multiply(im2 / (im1 + im2)));

    // impact speed
    //Vector2d v = (this.velocity.subtract(ball.velocity));
    //float vn = v.dot(mtd.normalize());

    // sphere intersecting but moving away from each other already
    //if (vn > 0.0f) return;

    // collision impulse
    //float i = (-(1.0f + Constants.restitution) * vn) / (im1 + im2);
    //Vector2d impulse = mtd.multiply(i);

    // change in momentum
    //this.velocity = this.velocity.add(impulse.multiply(im1));
    //ball.velocity = ball.velocity.subtract(impulse.multiply(im2));
    return;
}

export function addPlayer(id, name) {
	var newPlayer = {
	    id: id,
		name: name,
		score: 0,
		centerPos: 50
	};
	Players.push(newPlayer);
	addPlayerToPosition(newPlayer);
}

export function removePlayer(id) {
    let index = -1;
    for (let i = 0; i < Players.length; i++) {
		if (Players[i].id === id) {
			index = i;
			removePlayerFromPosition(Players[i]);
			break;
		}
	}
	if (index !== -1) {
		Players.splice(index, 1);
	}
}

export function removeAllPlayers() {
    for (let i = 0; i < Players.length; i++) {
        index = i;
        removePlayerFromPosition(Players[i]);
        break;
    }
}

function removePlayerFromPosition(player) {
	for(var i = 0; i < Position.queue.length; i++) {
		if (Position.queue[i] == player) {
			Position.queue.splice(i, 1);
			return;
		}
	}

	var newPlayer = null;
	if (Position.queue.length > 0) {
		newPlayer = Position.queue[0];
		Position.queue.splice(0, 1);
	}
	if (Position.S == player) {
		Position.S = newPlayer;
	} else if (Position.N == player) {
		Position.N = newPlayer;
	} else if (Position.E == player) {
		Position.E = newPlayer;
	} else if (Position.W == player) {
		Position.W = newPlayer;
	}
}

function addPlayerToPosition(player) {
	if (!Position.S) {
		Position.S = player;
	} else if (!Position.N) {
		Position.N = player;
	} else if (!Position.E) {
		Position.E = player;
	} else if (!Position.W) {
		Position.W = player;
	} else {
		Position.queue.push(player);
	}
}

export function movePlayer(id, value) {
	for (let i = 0; i < Players.length; i++) {
		let p = Players[i];
		if(p.id === id) {
			p.centerPos += value;
			if(p.centerPos > 90) {
				p.centerPos = 90;
			} else if (p.centerPos < 10) {
				p.centerPos = 10;
			}
			//player found
			return;
		}
	}
}
