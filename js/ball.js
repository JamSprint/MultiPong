export const Ball = {
    x: 50.0,
    y: 50.0,
    xspeed: 0.98,
    yspeed: 1.37,
    rad: 1.0
};

setInterval(moveBall, 33); // 33 milliseconds = ~ 30 frames per sec

export function moveBall() {
    Ball.x = Ball.x + Ball.xspeed;
    if (Ball.x > 100) {
        Ball.xspeed = -1 * Ball.xspeed;
        Ball.x = 100 - (Ball.x % 100);
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