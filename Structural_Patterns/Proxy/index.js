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

// console.log(`5% of 50 is ${50 * fivePersenct}`);

class Property {
    constructor(value, name = '') {
        this._value = value;
        this.name = name;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (this._value === newValue) {
            return;
        }

        console.log(`Assinging ${newValue} to ${this.name}`);
        this._value = newValue;
    }
}

class Creature {
    constructor() {
        this._agility = new Property(10, 'agility');
    }

    get agility() {
        return this._agility;
    }

    set agility(value) {
        this._agility.value = value;
    }
}

const c = new Creature();
c.agility = 22;
c.agility = 10;

class Car {
    drive() {
        console.log(`Car is being driven`);
    }
}

class CarProxy {
    constructor(driver) {
        this.driver = driver;
        this._car = new Car();
    }

    drive() {
        if (this.driver.age >= 16) {
            this._car.drive();
        } else {
            console.log('Driver too young');
        }
    }
}

class Driver {
    constructor(age) {
        this.age = age;
    }
}

const car = new CarProxy(new Driver(17));

car.drive();
