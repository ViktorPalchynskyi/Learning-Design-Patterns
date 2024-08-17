function createObjectPlayer(vertion: string) {
    return {
        play: () => {},
        pause: () => {},
    };
}

function createShakaObjectPlayer(vertion: string) {
    return {
        play: () => {},
        pause: () => {},
    };
}

class PlayerFactory {
    createPlayer() {
        return {
            play: () => {},
            pause: () => {},
        };
    }
}

class CustomPlayerFactory extends PlayerFactory {
    createPlayer() {
        return {
            play: () => {
                console.log('play');
            },
            pause: () => {},
        };
    }
}

class ShakaPlayerFactory extends PlayerFactory {
    createPlayer() {
        return {
            play: () => {
                console.log('play shaka');
            },
            pause: () => {},
        };
    }
}

function createClassPlayer(factory) {
    return factory.createPlayer();
}

const playerOne = createClassPlayer(new ShakaPlayerFactory());
const playerTwo = createClassPlayer(new CustomPlayerFactory());

playerOne.play();
playerTwo.play();

interface Ui {
    createButton(): {};

    createTable(): {};

    createInput(): {};
}

class KinopoiskUi implements Ui {
    createButton() {
        return {};
    }

    createTable() {
        return {};
    }

    createInput() {
        return {};
    }
}

class MusicUi implements Ui {
    createButton() {
        return {};
    }

    createTable() {
        return {};
    }

    createInput() {
        return {};
    }
}
