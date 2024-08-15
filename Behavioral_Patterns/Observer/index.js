class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);

        return this.count;
    }

    unsubscribe(inx) {
        this.handlers.delete(inx);
    }

    fire(sender, args) {
        this.handlers.forEach((v, k) => v(sender, args));
    }
}

class FallsIllArgs {
    constructor(address) {
        this.address = address;
    }
}

class Person {
    constructor(address) {
        this.address = address;
        this.fallsIll = new Event();
    }

    catchCold() {
        this.fallsIll.fire(this, new FallsIllArgs(this.address));
    }
}

const p = new Person('Divenskaya 5');
const sub = p.fallsIll.subscribe((s, a) => {
    console.log(`A doctor has been called to ${a.address}`);
});
p.catchCold();
p.catchCold();

p.fallsIll.unsubscribe(sub);
p.catchCold();
