class Address {
    constructor(suite, city, country) {
        this.suite = suite;
        this.city = city;
        this.country = country;
    }

    toString() {
        return `Address: ${this.suite}, ${this.city}, ${this.country}`;
    }

    // deepCopy() {
    //     return new Address(
    //         this.streetAddress,
    //         this.city,
    //         this.country
    //     );
    // }
}

class Serializer {
    constructor(types) {
        this.types = types;
    }

    markRecursive(object) {
        const idx = this.types.findIndex(
            (t) => t.name === object.constructor.name
        );

        if (idx !== -1) {
            object['typeIndex'] = idx;

            for (const key in object) {
                if (
                    object.hasOwnProperty(key) &&
                    object[key] != null
                ) {
                    this.markRecursive(object[key]);
                }
            }
        }
    }

    reconstructRecursive(object) {
        if (object.hasOwnProperty('typeIndex')) {
            const type = this.types[object.typeIndex];
            const obj = new type();

            for (const key in object) {
                if (
                    object.hasOwnProperty(key) &&
                    object[key] !== null
                ) {
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }

            delete obj.typeIndex;

            return obj;
        }

        return object;
    }

    clone(object) {
        this.markRecursive(object);
        const copy = JSON.parse(JSON.stringify(object));

        return this.reconstructRecursive(copy);
    }
}

class Employee {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    // deepCopy() {
    //     return new Employee(this.name, this.address.deepCopy());
    // }

    greet() {
        console.log(
            `Hi, my name is ${this.name}, ` +
                `I work at ${this.address.toString()}` //!
        );
    }

    toString() {
        return `${this.name} lives at ${this.address}`;
    }
}

// const john = new Employee(
//     'John',
//     new Address('some street', 'Some City', 'Some')
// );

// const s = new Serializer([Employee, Address]);

// const jane = s.clone(john);

// jane.name = 'Jane';
// jane.address.streetAddress = 'some new street';

// jane.greet();
// console.log(john.toString());
// console.log(jane.toString());

class EmployeeFactory {
    static _newEmployee(proto, name, suite) {
        let copy = EmployeeFactory.serializer.clone(proto);
        copy.name = name;
        copy.address.suite = suite;

        return copy;
    }

    static newMainOfficeEmployee(name, suite) {
        return this._newEmployee(EmployeeFactory.main, name, suite);
    }

    static newAuxOfficeEmployee(name, suite) {
        return this._newEmployee(EmployeeFactory.aux, name, suite);
    }
}

EmployeeFactory.serializer = new Serializer([Employee, Address]);
EmployeeFactory.main = new Employee(
    null,
    new Address(null, '123 East Dr', 'London')
);
EmployeeFactory.aux = new Employee(
    null,
    new Address(null, '200 London Road', 'Oxford')
);

let john = EmployeeFactory.newMainOfficeEmployee('John', 4321);
let jane = EmployeeFactory.newAuxOfficeEmployee('Jane', 222);

console.log(john.toString());
console.log(jane.toString());
