const AdPlanner = {
    planAd() {
        console.log('planAd');
        return new Promise((resolve) => resolve(5));
    },
};

const player = {
    activeStream: 0,
    play() {},
    pause() {},
    returnToAir() {
        console.log('returnToAir');
    },
};

const facade = {
    player,
    AdPlanner,
    play() {
        console.log('play', this.player.activeStream);
        if (this.player.activeStream > 5) {
            this.AdPlanner.planAd().then(() => {
                this.player.returnToAir();
                this.player.play();
            });
        }
    },
    pause() {},
};

setInterval(() => {
    player.activeStream = Math.round(Math.random() * 10);
    facade.play();
}, 1000);
