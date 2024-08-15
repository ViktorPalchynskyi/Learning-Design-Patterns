class Memento {
    constructor(balance) {
        this.balance = balance;
    }
}

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
        this.changes = [new Memento(balance)];
        this.current = 0;
    }

    deposit(amount) {
        this.balance += amount;
        const m = new Memento(this.balance);
        this.changes.push(m);
        this.current++;

        return m;
    }

    restore(m) {
        if (m) {
            this.balance = m.balance;
            this.changes.push(m);
            this.current = this.changes.current - 1;
        }
    }

    undo() {
        if (this.current > 0) {
            const m = this.changes[--this.current];
            this.balance = m.balance;

            return m;
        }

        return null;
    }

    redo() {
        if (this.current + 1 < this.changes.length) {
            const m = this.changes[++this.current];
            this.balance = m.balance;

            return m;
        }

        return null;
    }

    toString() {
        return `Balance: ${this.balance}`;
    }
}

const ba = new BankAccount(100);
const m1 = ba.deposit(299);
const m2 = ba.deposit(400);

// console.log(ba.toString());

// ba.restore(m1);
// console.log(ba.toString());
// ba.restore(m2);
// console.log(ba.toString());

ba.undo();
console.log(`Undo 1: ${ba.toString()}`);

ba.undo();
console.log(`Undo 2: ${ba.toString()}`);


ba.redo();
console.log(`Redo 2: ${ba.toString()}`);