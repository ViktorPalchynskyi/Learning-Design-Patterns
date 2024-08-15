class Person {
    constructor(name) {
        this.name = name;
        this.chatLog = [];
    }

    receive(sender, message) {
        const s = `${sender}: ${message}`;
        this.chatLog.push(s);
        console.log(`[${this.name}'s chat session] ${s}`);
    }

    say(message) {
        this.room.broadcast(this.name, message);
    }

    pm(who, message) {
        this.room.message(this.name, who, message);
    }
}

class ChatRoom {
    constructor() {
        this.people = [];
    }

    join(p) {
        const joinMsg = `${p.name} joins the chat`;
        this.broadcast('room', joinMsg);
        p.room = this;
        this.people.push(p);
    }

    broadcast(source, message) {
        for (const p of this.people) {
            if (p.name !== source) {
                p.receive(source, message);
            }
        }
    }

    message(source, destination, message) {
        for (const p of this.people) {
            if (p.name === destination) {
                p.receive(source, message);
            }
        }
    }
}

const room = new ChatRoom();

const john = new Person('John');
const karen = new Person('Karen');

room.join(john);
room.join(karen);

john.say('hi room');
karen.say('oh, hey john');

const simon = new Person('Simon');

room.join(simon);

simon.say('hello everyone!');

karen.pm('Simon', 'glad you to join us');
