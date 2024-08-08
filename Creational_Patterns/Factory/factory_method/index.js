const CoordinateSystem = Object.freeze({
    cartesian: 0,
    polar: 1,
});

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // constructor(rho, theta) {
    //     this.x = rho * Math.cos(theta);
    //     this.y = rho * Math.sin(theta);
    // }

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) {
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        );
    }
}

const p = Point.newCartesianPoint(2, 4);
console.log(p);
const p2 = Point.newPolarPoint(5, Math.PI / 2);
console.log(p2);
