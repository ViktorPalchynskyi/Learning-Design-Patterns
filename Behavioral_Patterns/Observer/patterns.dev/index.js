class Observable {
    constructor() {
        this.observers = new Map();
    }

    subscribe(func) {
        this.observers.set(func, func);
    }

    unsubscribe(func) {
        this.observers.delete(func);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

function logger(data) {
    console.log(`${Date.now()} ${data}`);
}

function saveStat(data) {
    console.log(`Saving some data to DB ${data}`);
}

const observable = new Observable();

observable.subscribe(logger);
observable.subscribe(saveStat);

setTimeout(() => {
    observable.unsubscribe(logger);
    observable.notify('setTimeout after 3 sec');
}, 3000);

observable.notify('Ufter unsibscribe');
