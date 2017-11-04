import {Score} from './score';

export const Ball = {
    x: 50.0,
    y: 50.0,
    xspeed: 0.0,
    yspeed: 0.0,
    rad: 1.0
};

reset();
setInterval(moveBall, 33); // 33 milliseconds = ~ 30 frames per sec

function reset() {
    Ball.x = 50.0;
    Ball.y = 50.0;
    Ball.xspeed = Math.random()*2.0-1;
    Ball.yspeed = Math.random()*2.0-1;
}

function moveBall() {
    Ball.x = Ball.x + Ball.xspeed;
    if (Ball.x > 100) {
        if(true) { //right side has player
            Score.right++;
            reset();
        } else {
            Ball.xspeed = -1 * Ball.xspeed;
            Ball.x = 100 - (Ball.x % 100);
        }
    } else if (Ball.x < 0) {
        Ball.xspeed = -1 * Ball.xspeed;
        Ball.x = (Ball.x % 100);
    }
    Ball.y = Ball.y + Ball.yspeed;
    if (Ball.y > 100) {
        Ball.yspeed = -1 * Ball.yspeed;
        Ball.y = 100 - (Ball.y % 100);
    } else if (Ball.y < 0) {
        Ball.yspeed = -1 * Ball.yspeed;
        Ball.y = (Ball.y % 100);
    }
}