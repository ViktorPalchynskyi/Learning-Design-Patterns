class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// class Line {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//     }

//     _markRecursive(obj) {
//         const idx = this.types.findIndex((t) => t.name === obj.constructor.name);

//         if (idx !== -1) {
//             obj.typeIndex = idx;

//             for (const key in obj) {
//                 if (obj.hasOwnProperty(key) && obj[key] !== null) {
//                     this._markRecursive(obj[key]);
//                 }
//             }
//         }
//     }

//     _reconstructRecursive(obj) {
//         if (obj.hasOwnProperty('typeIndex')) {
//             const object = new this.types[obj.typeIndex]();

//             for (const key in obj) {
//                 if (obj.hasOwnProperty(key) && obj[key] !== null) {
//                     object[key] = this._reconstructRecursive(
//                         obj[key]
//                     );
//                 }
//             }

//             delete object.typeIndex;

//             return object;
//         }

//         return obj;
//     }

//     deepCopy() {
//         this._markRecursive(this);
//         const copy = JSON.parse(JSON.stringify(this));

//         return this._reconstructRecursive(copy);
//         // todo
//     }
// }

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    deepCopy() {
        const newStart = new Point(this.start.x, this.start.y);
        const newEnd = new Point(this.end.x, this.end.y);

        return new Line(newStart, newEnd);
    }
}

const line1 = new Line(new Point(1, 24), new Point(55, 5));
const line2 = line1.deepCopy();

console.log(line1);
console.log(line2);
