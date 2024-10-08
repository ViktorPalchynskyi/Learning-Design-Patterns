class Shape {
    constructor(renderer) {
        this.renderer = renderer;
    }
}

class Circle extends Shape {
    constructor(renderer, radius) {
        super(renderer);
        this.radius = radius;
    }

    draw() {
        this.renderer.renderCircle(this.radius);
    }

    resize(factor) {
        this.radius *= factor;
    }
}

class Square extends Shape {}

class VectorRenderer {
    renderCircle(radius) {
        console.log(`Drawing a circle of radius ${radius}`);
    }
}

class RasterRenderer {
    renderCircle(radius) {
        console.log(`Drawing pixels for a circle of radius ${radius}`);
    }
}

// Shape
// Render

const raster = new RasterRenderer();
const vector = new VectorRenderer();
const circle = new Circle(vector, 10);

circle.draw();
circle.resize(2);
circle.draw();