const player = {
    name: 'player',
    play() {
        console.log(`${this.name} is plying now.`);
    },
    pause() {},
};

class PlayerAdDecorator {
    constructor(player) {
        this.player = player;
    }

    play() {
        this.playAd();
        this.player.play();
    }

    pause() {
        this.playAd();
        this.player.pause();
    }

    playAd() {
        console.log('Playing ad.');
    }
}

class PlayerTrackerDecorator {
    constructor(player) {
        this.player = player;
    }

    play() {
        this.sendTrackings();
        this.player.play();
    }

    pause() {
        this.sendTrackings();
        this.player.pause();
    }

    sendTrackings() {
        console.log('Sending trackings.');
    }
}

class PlayerLoggerDecorator {
    constructor(player) {
        this.player = player;
    }

    play() {
        this.sendLog();
        this.player.play();
    }

    pause() {
        this.sendLog();
        this.player.pause();
    }

    sendLog() {
        console.log('Sending logs.');
    }
}

const decorated = new PlayerAdDecorator(new PlayerLoggerDecorator(new PlayerTrackerDecorator(player)));

decorated.play();

const adPlayer = {
    instance: player,

    play() {
        this.playAd();
        this.instance.play();
    },

    pause() {
        this.playAd();
        this.instance.pause();
    },

    playAd() {
        console.log('Playing ad.');
    },
};

adPlayer.play();
