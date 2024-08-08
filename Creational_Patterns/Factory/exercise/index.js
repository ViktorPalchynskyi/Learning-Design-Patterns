class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    constructor() {
        this.id = 0;
    }

    createPerson(name) {
        const p = new Person(this.id, name);
        ++this.id;

        return p;
    }
}

const pf = new PersonFactory();
const v = pf.createPerson('Viktor');
const i = pf.createPerson('Irina');

console.log(v, i);