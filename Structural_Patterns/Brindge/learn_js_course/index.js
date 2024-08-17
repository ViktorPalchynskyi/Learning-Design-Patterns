const player = {
    play() {},
    pause() {},
};

const skin = {
    player,
    play() {
        this.player.play;
    },
    pause() {
        this.player.play;
    },
};

class GreenCircle {}

class RedCircle {}

class BlueCircle {}

class GreenTriangle {}

class RedTriangle {}

class BlueTriangle {}

class Triangle {
    constructor(color) {
        this.color = color;
    }
}

class Circle {
    constructor(color) {
        this.color = color;
    }
}

class Green {}

class Red {}

class Blue {}

const redCircle = new RedCircle(new Green());
