class BankAccount {
    constructor(ballance = 0) {
        this.balance = ballance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(
            `Deposited ${amount}, balance is now ${this.balance}`
        );
    }

    withdraw(amount) {
        if (this.balance - amount >= BankAccount.overdraftLimit) {
            this.balance -= amount;
            console.log(
                `Withdrew ${amount}, balance is now ${this.balance}`
            );
            return true;
        }

        return false;
    }

    toString() {
        return `Balance: ${this.balance}`;
    }
}

const Action = Object.freeze({
    deposit: 1,
    withdraw: 2,
});

class BankAccountCommand {
    constructor(account, action, amount) {
        this.account = account;
        this.action = action;
        this.amount = amount;
        this.succeeded = false;
    }

    call() {
        console.log(this);
        switch (this.action) {
            case Action.deposit:
                this.account.deposit(this.amount);
                break;
            case Action.withdraw:
                this.account.withdraw(this.amount);
                break;
        }
    }

    undo() {
        if (!this.succeeded) reutrn;

        switch (this.action) {
            case Action.deposit:
                this.account.withdraw(this.amount);
                this.succeeded = true;
                break;
            case Action.withdraw:
                this.succeeded = this.account.deposit(this.amount);
                break;
        }
    }
}

BankAccount.overdraftLimit = -500;
const ba = new BankAccount(100);
ba.deposit(100);

console.log(ba.toString());
const cmd = new BankAccountCommand(ba, Action.deposit, 50);
cmd.call();

console.log(ba.toString());
cmd.undo();
console.log(ba.toString());
