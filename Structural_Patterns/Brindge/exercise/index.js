class Shape {
    constructor(name, renderer) {
        this.name = name;
        this.renderer = renderer;
    }

    toString() {
        return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
    }
}

class VectorRenderer {
    get whatToRenderAs() {
        return 'lines';
    }
}

class RasterRenderer {
    get whatToRenderAs() {
        return 'pixels';
    }
}

class Triangle extends Shape {
    constructor(renderer) {
        super('triangle', renderer);
    }
}

class Square extends Shape {
    constructor(renderer) {
        super('square', renderer);
    }
}

class VectorSquare extends Square {
    toString() {
        return `Drawing square as lines`;
    }
}

class RasterSquare extends Square {
    toString() {
        return `Drawing square as pixels`;
    }
}

// imagine VectorTriangle and RasterTriangle are here too
