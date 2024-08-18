class Singleton {
    constructor() {
        if (Singleton.instance) {
            throw new Error('You can only create one instance!')
        }

        Singleton.instance = this;
    }

    static getInstanse() {
        return this;
    }
}

const ins1 = new Singleton();
const ins2 = Singleton.getInstanse();

console.log(ins1);
console.log(Singleton);