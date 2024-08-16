class NumberExpression {
    constructor(value) {
        this.value = value;
    }

    accept(visitor) {
        visitor.visitNumber(this);
    }
}

class AdditionExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    accept(visitor) {
        visitor.visitAddition(this);
    }
}

class Visitor {
    constructor() {
        this.buffer = [];
    }

    visitNumber(e) {}

    visitAddition(e) {}
}

class ExpressionPrinter extends Visitor {
    constructor() {
        super();
    }

    visitNumber(e) {
        this.buffer.push(e.value);
    }

    visitAddition(e) {
        this.buffer.push('(');
        e.left.accept(this);
        this.buffer.push('+');
        e.right.accept(this);
        this.buffer.push(')');
    }

    toString() {
        return this.buffer.join('');
    }
}

class ExpressionCalculator extends Visitor {
    constructor() {
        super();
        this.result = 0;
    }

    visitNumber(e) {
        this.result = e.value;
    }

    visitAddition(e) {
        e.left.accept(this);
        const temp = this.result;
        e.right.accept(this);
        this.result += temp;
    }

    toString() {
        return this.buffer.join('');
    }
}

// class ExpressionPrinter {
//     print(e, buffer) {
//         if (e instanceof NumberExpression) {
//             buffer.push(e.value);
//         } else if (e instanceof AdditionExpression) {
//             buffer.push('(');
//             this.print(e.left, buffer);
//             buffer.push('+');
//             this.print(e.right, buffer);
//             buffer.push(')');
//         }
//     }
// }

// 1 + (2+3)
const e = new AdditionExpression(
    new NumberExpression(1),
    new AdditionExpression(
        new NumberExpression(2),
        new NumberExpression(3)
    )
);

const ep = new ExpressionPrinter();
const ec = new ExpressionCalculator();
ec.visitAddition(e);
ep.visitAddition(e);
console.log(ep.toString());
console.log(`${ep.toString()} = ${ec.result}`);
