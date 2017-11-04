import {addPlayer, removePlayer} from './game';
import {Position} from "./position";
import {Players} from "./players";

var DEBUG = true;
var RENDER = false;

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
    setInterval(movePlayer, 100);
}

function resetPlayers() {
    if (DEBUG) {
        removePlayer("Aaron");
        removePlayer("Martin");
        addPlayer("Aaron");
        addPlayer("Martin");
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
    log("\t\t" + JSON.stringify(Players));
}

function movePlayer() {


}

function moveBall() {
    Ball.x = Ball.x + Ball.xspeed;
    if (Ball.x > 100) {
        log("Ball exiting E on y=" + Ball.y);
        if(Position.E) {
            if(Math.abs(Ball.y-Position.E.centerPos) <= 10) {
                log("\tSAVE!!!!!");
                Ball.xspeed = -1 * Ball.xspeed;
                Ball.x = 100 - (Ball.x % 100);
            } else {
                log("\tPoint!");
                Position.E.score++;
                reset();
            }
        } else {
            log("\tBounce");
            Ball.xspeed = -1 * Ball.xspeed;
            Ball.x = 100 - (Ball.x % 100);
        }
    } else if (Ball.x < 0) {
        log("Ball exiting W on y=" + Ball.y);
        if(Position.W) {
            if(Math.abs(Ball.y-Position.W.centerPos) <= 10) {
                log("\tSAVE!!!!!");
                Ball.xspeed = -1 * Ball.xspeed;
                Ball.x = (Ball.x % 100);
            } else {
                log("\tPoint!");
                Position.W.score++;
                reset();
            }
        } else {
            log("\tBounce");
            Ball.xspeed = -1 * Ball.xspeed;
            Ball.x = (Ball.x % 100);
        }
    }
    Ball.y = Ball.y + Ball.yspeed;
    if (Ball.y > 100) {
        log("Ball exiting N on x=" + Ball.x);
        if(Position.N) {
            if(Math.abs(Ball.x-Position.N.centerPos) <= 10) {
                log("\tSAVE!!!!!");
                Ball.yspeed = -1 * Ball.yspeed;
                Ball.y = 100 - (Ball.y % 100);
            } else {
                log("\tPoint!");
                Position.N.score++;
                reset();
            }
        } else {
            log("\tBounce");
            Ball.yspeed = -1 * Ball.yspeed;
            Ball.y = 100 - (Ball.y % 100);
        }
    } else if (Ball.y < 0) {
        log("Ball exiting S on x=" + Ball.x);
        if(Position.S) {
            if(Math.abs(Ball.x-Position.S.centerPos) <= 10) {
                log("\tSAVE!!!!!");
                Ball.yspeed = -1 * Ball.yspeed;
                Ball.y = (Ball.y % 100);
            } else {
                log("\tPoint!");
                Position.S.score++;
                reset();
            }
        } else {
            log("\tBounce");
            Ball.yspeed = -1 * Ball.yspeed;
            Ball.y = (Ball.y % 100);
        }
    }
    render();
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
    var field = "";
    for(var x = 0; x < 50; x++) {
        if(Math.abs(x*2-Position.N.centerPos) <= 10) {
            field = field + "#";
        } else {
            field = field + " ";
        }
    }
    field = field + "\n"
    for(var y = 0; y < 25; y++) {
        var row = "";
        for(var x = 0; x < 50; x++) {
            if(parseInt(Ball.x/2.0) == x && parseInt(Ball.y/4.0) == y) {
                row = row + "O";       
            } else {
                row = row + ".";
            }
        }
        field = field + row + "\n"
    }
    for(var x = 0; x < 50; x++) {
        if(Math.abs(x*2-Position.S.centerPos) <= 10) {
            field = field + "#";
        } else {
            field = field + " ";
        }
    }
    console.log(field);
}