class Percentage {
    constructor(percent) {
        this.percent = percent;
    }

    toString() {
        return `${this.percent}%`;
    }

    valueOf() {
        return this.percent / 100;
    }
}

const fivePersenct = new Percentage(5);

console.log(`5% of 50 is ${50 * fivePersenct}`);
