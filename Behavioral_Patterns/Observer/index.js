class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);

        return this.count;
    }

    unsubscribe(inx) {
        this.handlers.delete(inx);
    }

    fire(sender, args) {
        this.handlers.forEach((v, k) => v(sender, args));
    }
}

// class FallsIllArgs {
//     constructor(address) {
//         this.address = address;
//     }
// }

// class Person {
//     constructor(address) {
//         this.address = address;
//         this.fallsIll = new Event();
//     }

//     catchCold() {
//         this.fallsIll.fire(this, new FallsIllArgs(this.address));
//     }
// }

class PropertyChangedArgs {
    constructor(name, newValue) {
        this.name = name;
        this.newValue = newValue;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this._age = age;
        this.propertyChanged = new Event();
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (!value || this._age === value) {
            return;
        }

        const oldCanVote = this.canVote;

        this._age = value;
        this.propertyChanged.fire(
            this,
            new PropertyChangedArgs('age', value)
        );

        if (oldCanVote !== this.canVote) {
            this._age = value;
            this.propertyChanged.fire(
                this,
                new PropertyChangedArgs('canVote', value)
            );
        }
    }

    get canVote() {
        return this._age >= 16;
    }
}

class VotingChecker {
    constructor(person) {
        this.person = person;
        this.person.propertyChanged.subscribe(this.votingChanged.bind(this));
    }

    votingChanged(sender, args) {
        if (sender === this.person && args.name === 'canVote') {
            console.log(`Voting status changed to ${args.newValue}`);
        }
    }
}

// class RegistrationChecker {
//     constructor(person) {
//         this.person = person;
//         this.token = person.propertyChanged.subscribe(
//             this.ageChanged.bind(this)
//         );
//     }

//     ageChanged(sender, args) {
//         if (sender === this.person && args.name === 'age') {
//             if (args.newValue < 13) {
//                 console.log(`Sorry, you are still to young`);
//             } else {
//                 console.log(`Okey, you can register`);
//                 sender.propertyChanged.unsubscribe(this.token);
//             }
//         }
//     }
// }

// const p = new Person('Divenskaya 5');
// const sub = p.fallsIll.subscribe((s, a) => {
//     console.log(`A doctor has been called to ${a.address}`);
// });
// p.catchCold();
// p.catchCold();

// p.fallsIll.unsubscribe(sub);
// p.catchCold();

const p = new Person('John');
const checker = new VotingChecker(p);
// const c = new RegistrationChecker(p);

for (let i = 10; i < 20; ++i) {
    console.log(`Changing age to ${i}`);
    p.age = i;
}
