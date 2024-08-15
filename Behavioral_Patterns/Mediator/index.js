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

class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    fire(sender, args) {
        this.handlers.forEach(function (v, k) {
            v(sender, args);
        });
    }
}

class PlayerScoredEventArgs {
    constructor(playerName, goalsScoredSoFar) {
        this.playerName = playerName;
        this.goalsScoredSoFar = goalsScoredSoFar;
    }

    print() {
        console.log(
            `${this.playerName} has scored their ${this.goalsScoredSoFar} goal`
        );
    }
}

class Game {
    constructor() {
        this.events = new Event();
    }
}

class Player {
    constructor(name, game) {
        this.name = name;
        this.game = game;
        this.goalsScored = 0;
    }

    score() {
        this.goalsScored++;
        const args = new PlayerScoredEventArgs(
            this.name,
            this.goalsScored
        );

        this.game.events.fire(this, args);
    }
}

class Coach {
    constructor(game) {
        game.events.subscribe((sender, args) => {
            if (
                args instanceof PlayerScoredEventArgs &&
                args.goalsScoredSoFar < 3
            ) {
                console.log(
                    `Coach says: well done, ${args.playerName}!`
                );
            }
        });
    }
}

const game = new Game();
const player = new Player('Ronaldo', game);
const coach = new Coach(game);

player.score();
player.score();
player.score();
