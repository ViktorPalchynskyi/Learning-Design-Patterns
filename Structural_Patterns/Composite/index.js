class GraphicObject {
    constructor(name = 'Group ' + GraphicObject.count++) {
        this._name = name;
        this.color = undefined;
        this.children = [];
    }

    get name() {
        return this._name;
    }

    print(buffer, depth) {
        buffer.push('*'.repeat(depth));
        if (depth > 0) buffer.push(' ');
        if (this.color) buffer.push(this.color + ' ');
        buffer.push(this.name);
        buffer.push('\n');

        for (let child of this.children)
            child.print(buffer, depth + 1);
    }

    toString() {
        let buffer = [];
        this.print(buffer, 0);
        return buffer.join('');
    }
}

GraphicObject.count = 0;

class Circle extends GraphicObject {
    constructor(color) {
        super('Circle');
        this.color = color;
    }
}

class Square extends GraphicObject {
    constructor(color) {
        super('Square');
        this.color = color;
    }
}

const drawing = new GraphicObject();
drawing.children.push(new Circle('Black'));
drawing.children.push(new Square('White'));

const group = new GraphicObject();
group.children.push(new Circle('Pink'));
group.children.push(new Square('Blue'));
drawing.children.push(group);

console.log(drawing.toString());

const aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor(...args) {
            super(...args);
            mixins.forEach((mixin) => {
                copyProps(this, new mixin());
            });
        }
    }
    let copyProps = (target, source) => {
        // this function copies all properties and symbols, filtering out some special ones
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (
                    !prop.match(
                        /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
                    )
                )
                    Object.defineProperty(
                        target,
                        prop,
                        Object.getOwnPropertyDescriptor(source, prop)
                    );
            });
    };
    mixins.forEach((mixin) => {
        // outside constructor() to allow aggregation(A,B,C).staticFunction() to be called etc.
        copyProps(base.prototype, mixin.prototype);
        copyProps(base, mixin);
    });
    return base;
};

class Connectable {
    connectTo(other) {
        for (const from of this) {
            for (const to of other) {
                from.out.push(other);
                to.in.push(this);
            }
        }
    }
}

class Neuron extends Connectable {
    constructor() {
        super();

        this.in = [];
        this.out = [];
    }

    // connectTo(other) {
    //     this.out.push(other);
    //     other.in.push(this);
    // }

    toString() {
        return `A neuron with ${this.in.length} inputs and ${this.out.length} outputs`;
    }

    [Symbol.iterator]() {
        let returned = false;

        return {
            next: () => ({
                value: this,
                done: returned++,
            }),
        };
    }
}

class NeuronLayer extends aggregation(Array, Connectable) {
    constructor(count) {
        super();

        while (count-- > 0) {
            this.push(new Neuron());
        }
    }

    toString() {
        return `A layer with ${this.length} neurons`;
    }
}

const neuron1 = new Neuron();
const neuron2 = new Neuron();
const layer1 = new NeuronLayer(3);
const layer2 = new NeuronLayer(4);

neuron1.connectTo(neuron2);
neuron1.connectTo(layer2);
layer2.connectTo(neuron1);
layer1.connectTo(layer2);

console.log(neuron1.toString());
console.log(neuron2.toString());
console.log(layer1.toString());
console.log(layer2.toString());
