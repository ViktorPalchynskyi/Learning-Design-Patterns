const player = {
    name: 'player',
    play() {
        console.log(`${this.name} is plying now.`);
    },
    pause() {},
};

const player2 = {
    name: 'player2',
    start() {
        console.log(`${this.name} is plying now.`);
    },
    stop() {},
};


class Player2Adapter {
    instance;
    constructor(player) {
        this.instance = player;
    }

    play() {
        this.instance.start();
    }

    pause() {
        this.instance.stop();
    }
}

const browser = Math.round(Math.random() * 10);

let currentPlayer;

if (browser > 5) {
    currentPlayer = player;
} else {
    currentPlayer = new Player2Adapter(player2);
}

currentPlayer.play();

