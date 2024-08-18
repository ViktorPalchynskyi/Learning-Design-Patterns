class Singleton {
    constructor() {
        if (Singleton.instance) {
            throw new Error('You can only create one instance!');
        }

        Singleton.instance = this;
    }

    static getInstanse() {
        return this;
    }
}

const singleton = Object.freeze(new Singleton());

export default singleton;
// const ins2 = Singleton.getInstanse();

// console.log(ins1);
// console.log(Singleton);

let count = 0;

const counter = {
    increment() {
        return ++count;
    },
    decrement() {
        return --count;
    },
};

Object.freeze(counter);
export { counter };
