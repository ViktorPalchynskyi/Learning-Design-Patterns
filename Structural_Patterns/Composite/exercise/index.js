class SingleValue {
    constructor(value) {
        // todo
        this.value = value;
    }

    [Symbol.iterator]() {
        let returned = false;

        return {
            next: () => ({
                value: this.value,
                done: returned++,
            }),
        };
    }
}

class ManyValues extends Array {
    // ensure there's a push(value) method
}

let sum = function (containers) {
    let total = 0;

    for (const container of containers) {
        for (const item of container) {
            total += item;
        }
    }

    return total;
};

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);
console.log(sum([singleValue, otherValues]));
