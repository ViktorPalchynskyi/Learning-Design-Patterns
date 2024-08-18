const person = {
    name: 'John Doe',
    age: 42,
    nationality: 'American',
    sayHi() {
        console.log(`Hey, my name is ${this.name}`);
    },
};

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(
            `The value of ${prop} is ${Reflect.get(obj, prop)}`
        );
    },
    set: (obj, prop, value) => {
        console.log(
            `Changed ${prop} from ${Reflect.get(
                obj,
                prop
            )} to ${value}`
        );

        return Reflect.set(obj, prop, value);
    },
    // apply: (obj, args, argArray) => {
    //     console.log(
    //         `Object ${obj} with args ${args} and argArray ${argArray}`
    //     );
    //     obj.apply(args, argArray);
    // },
});

personProxy.age;
personProxy.age = 43;
// personProxy.sayHi();
