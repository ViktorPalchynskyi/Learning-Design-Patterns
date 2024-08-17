abstract class Bank {
    calculate() {
        this.calculateA();
        this.calculateB();
        this.calculateC();
        this.calculateD();
    }

    abstract calculateA(): number;

    abstract calculateB(): number;

    abstract calculateC(): number;

    abstract calculateD(): number;
}

class MyBank extends Bank {
    calculateA() {
        return 1;
    }

    calculateB() {
        return 2;
    }

    calculateC() {
        return 3;
    }

    calculateD() {
        return 4;
    }
}

abstract class MyNode {
    constructor() {
        this.calculateSize();
        this.paint();
    }

    abstract paint(): void;
    abstract calculateSize(): number;
}

class CarNode extends MyNode {
    paint() {
        console.log('paint');
    }

    calculateSize() {
        return 25;
    }
}
