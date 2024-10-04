interface Product {
    name: string;
}

class ConcreteProduct implements Product {
    name = '';
}

class ConcreteProductA extends ConcreteProduct {
    public name;

    constructor() {
        super();
        this.name = 'ConcreateProductA';
    }
}

class ConcreteProductB extends ConcreteProduct {
    public name;

    constructor() {
        super();
        this.name = 'ConcreateProductB';
    }
}

class ConcreteProductC extends ConcreteProduct {
    public name;

    constructor() {
        super();
        this.name = 'ConcreateProductC';
    }
}

class Creator {
    static createObject(someProperty: string): Product {
        if (someProperty === 'a') {
            return new ConcreteProductA();
        } else if (someProperty === 'b') {
            return new ConcreteProductB();
        } else {
            return new ConcreteProductC();
        }
    }
}

const p = Creator.createObject('c');
console.log(p.name);
