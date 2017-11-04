function ballOnBallCollide(ball1, ball2) {
    var distanceSquared = Math.pow((ball1.x-ball2.x), 2)+Math.pow((ball1.y-ball2.y), 2);
    var radiusesSquared = Math.pow(ball1.rad, 2) + Math.pow(ball2.rad,2);
    if (distanceSquared < radiusesSquared) {
        return true;
    }
    return false;
}