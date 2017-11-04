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

