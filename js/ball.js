var ball = {
    x: 50.0,
    y: 50.0,
    xspeed: 0.98,
    yspeed: 1.37,
    rad: 1.0
};

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