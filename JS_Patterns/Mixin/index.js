class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Animal {
    constructor(animalClass) {
        this.animalClass = animalClass;
    }

    walk() {
        console.log('Animal is walking');
    }

    eat() {
        console.log('Animal is eating');
    }
}

class DogBehavior {
    bark() {
        console.log('Woof!');
    }

    wagTail() {
        console.log('Wagging my tail!');
    }

    play() {
        console.log('Playing');
    }
}

class Mamel {
    produceMilk() {
        console.log('Creature producing milk');
    }
}

class Mixin {
    constructor(...targets) {
        if (targets?.length) {
            this.targets = targets;

            this.mix.bind(this);
        }
    }

    mix() {
        const obj = {};

        this.targets.forEach((mt) => {
            Object.getOwnPropertyNames(mt.prototype).forEach((n) => {
                if (n !== 'constructor') obj[n] = mt.prototype[n];
            });
        });

        return obj;
    }

    addTarget(target) {
        this.targets.push(target);
    }
}

// Animal.prototype.drink = function () {
//     console.log('Animal is drinking');
// };

// const mixin = new Mixin(Animal, DogBehavior);
// mixin.addTarget(Mamel);
// console.log('mixin', mixin.mix());
// Object.assign(Dog.prototype, mixin.mix());

const dog = new Dog('Balto');

// dog.bark();
// dog.eat();
// dog.produceMilk();

const animalFunctionality = {
    walk: () => console.log('Walking!23'),
    sleep: () => console.log('Sleeping!'),
};

const dogFunctionality = {
    __proto__: animalFunctionality,
    bark: () => console.log('Woof!'),
    wagTail: () => console.log('Wagging my tail!'),
    play: () => console.log('Playing!'),
    walk() {
        console.log('log', __proto__);
        super.walk();
    },
    sleep() {
        super.sleep();
    },
};

// Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality)

console.log(dogFunctionality);

dog.walk();
dog.sleep();
dog.play();