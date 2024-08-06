class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(value) {
        this._width = value;
    }

    set height(value) {
        this._height = value;
    }

    get area() {
        return this._width * this._height;
    }

    get isSquare(){
        return this._width === this._height;
    }

    toString() {
        return `${this._width}x${this._height}`;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    set width(value) {
        this._width = this._height = value;
    }

    set height(value) {
        this._width = this._height = value;
    }
}

const useIt = function (rc) {
    const width = rc._width;
    rc.height = 10;

    console.log(`Expected area of ${10 * width}, but got ${rc.area}`);
};

const rt = new Rectangle(100, 200);
console.log(rt.toString());
useIt(rt);
const sq = new Square(100);
// console.log(sq.toString());
// sq.width = 200;
// console.log(sq.toString());
useIt(sq);
