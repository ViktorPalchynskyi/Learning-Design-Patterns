class ChifExecutiveOfficer {
    get name() {
        return ChifExecutiveOfficer._name;
    }

    set name(value) {
        ChifExecutiveOfficer._name = value;
    }

    get age() {
        return ChifExecutiveOfficer._age;
    }

    set age(value) {
        ChifExecutiveOfficer._age = value;
    }

    toString() {
        return `CEO's name is ${this.name} and he is ${this.age} years old.`;
    }
}

ChifExecutiveOfficer._age = undefined;
ChifExecutiveOfficer._name = undefined;

const ceo = new ChifExecutiveOfficer();
ceo.name = 'Viktor';
ceo.age = 26;

const ceo2 = new ChifExecutiveOfficer();
ceo.name = 'John';
ceo.age = 66;

console.log(ceo.toString());
console.log(ceo2.toString());