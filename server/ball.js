import {addPlayer, removePlayer, movePlayer} from './game';
import {Position} from "./position";
import {Players} from "./players";
import {DEBUG, RENDER} from "./debug";

export const Ball = {
    x: 50.0,
    y: 50.0,
    xspeed: 0.0,
    yspeed: 0.0,
    rad: 1.0
};

resetPlayers();
reset();
setInterval(moveBall, 33); // 33 milliseconds = ~ 30 frames per sec
if(DEBUG) {
    setInterval(moveDebugPlayer, 100);
}

function resetPlayers() {
    if (DEBUG) {
        removePlayer("0");
        removePlayer("1");
        addPlayer("0", "Aaron");
        addPlayer("1", "Martin");
    }    
}

function reset() {
    if(DEBUG) {
        if(Players[0].score >= 3) {
            log(Players[1].name + " wins! Only missed the ball " + Players[1].score + " time(s)!");
            resetPlayers();
        } else if(Players[1].score >= 3) {
            log(Players[0].name + " wins! Only missed the ball " + Players[0].score + " time(s)!");
            resetPlayers();
        }
    } 
    Ball.x = 50.0;
    Ball.y = 50.0;
    Ball.xspeed = Math.random()*2.0-1;
    Ball.yspeed = Math.random()*2.0-1;
    //Ball.xspeed = 0.0;
    //Ball.yspeed = 1.0;
    log("\t\t" + JSON.stringify(Players));
}

function moveDebugPlayer() {
    for(var i = 0; i < Players.length; i++) {
        let p = Players[i];
        if(p.centerPos < Ball.x && p.centerPos < 90 ) {
            movePlayer(p.id, +1);
        } else if (p.centerPos > Ball.x) {
            movePlayer(p.id, -1);
        }
    }

}

function invert() {
    if(Ball.x > 100 || Ball.x < 0) {
        Ball.xspeed = -1 * Ball.xspeed;
        if(Ball.x > 100) {
            Ball.x = 100 - (Ball.x % 100);
        } else {
            Ball.x = (Ball.x % 100);
        }
    }
    if(Ball.y > 100 || Ball.y < 0) {
        Ball.yspeed = -1 * Ball.yspeed;
        if(Ball.y > 100) {
            Ball.y = 100 - (Ball.y % 100);
        } else {
            Ball.y = (Ball.y % 100);
        }
    }
}

function moveBall() {
    Ball.x = Ball.x + Ball.xspeed;
    Ball.y = Ball.y + Ball.yspeed;
    let oob = [];
    if (Ball.x > 100 && Position.E) {
        if(Math.abs(Ball.y-Position.E.centerPos) <= 10) {
            accelerate();
        } else {
            oob.push(Position.E);
        }
    } else if (Ball.x < 0 && Position.W) {
        if(Math.abs(Ball.y-Position.W.centerPos) <= 10) {
            accelerate();
        } else {
            oob.push(Position.W);
        }
    }
    if (Ball.y > 100 && Position.N) {
        if(Math.abs(Ball.x-Position.N.centerPos) <= 10) {
            accelerate();
        } else {
            oob.push(Position.N);
        }
    } 
    if (Ball.y < 0 && Position.S) {
        if(Math.abs(Ball.x-Position.S.centerPos) <= 10) {
            accelerate();
        } else {
            oob.push(Position.S);
        }
    }
    for (let i = 0; i < oob.length; i++) {
        oob[i].score++;
    }
    if(oob.length > 0) {
        reset();
        return;
    }
    invert();
    render();
}

function accelerate() {
    Ball.xspeed *= 1.1;
    Ball.yspeed *= 1.1;
}

function log(str) {
    if (DEBUG && !RENDER) {
        console.log(str);
    }
}

function render() {
    if(!RENDER) {
        return;
    }
    console.log("\n\n\n\n\n\n\n")
    var field = Position.N.name + ": " + Position.N.score + "\n";
    for(var x = 0; x < 50; x++) {
        if(Math.abs(x*2-Position.N.centerPos) <= 10) {
            field = field + "#";
        } else {
            field = field + " ";
        }
    }
    field = field + "\n";
    for(var y = 24; y >= 0; y--) {
        var row = "";
        for(var x = 0; x < 50; x++) {
            if(parseInt(Ball.x/2.0) == x && parseInt(Ball.y/4.0) == y) {
                row = row + "O";
            } else {
                row = row + ".";
            }
        }
        field = field + row + "\n";
    }
    for(var x = 0; x < 50; x++) {
        if(Math.abs(x*2-Position.S.centerPos) <= 10) {
            field = field + "#";
        } else {
            field = field + " ";
        }
    }
    field += "\n" + Position.S.name + ": " + Position.S.score;
    console.log(field);

}