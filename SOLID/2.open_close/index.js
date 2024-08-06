const Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue',
});

const Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large',
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// open to extension, closed for modification

class ProductFilter {
    filterByColor(products, color) {
        return products.filter((product) => product.color === color);
    }

    filterBySize(products, size) {
        return products.filter((product) => product.size === size);
    }

    filterBySizeAndColor(products, size, color) {
        return products.filter((product) => product.size === size && product.color === color);
    }

    // state space explosion
}

// specification
class Specification {
    constructor() {
        if (this.constructor.name === 'Specification') {
            throw new Error('Specification is abstract!');
        }
    }

    isSatisfied(item) {}
}

class ColorSpecification extends Specification {
    constructor(color) {
        super();
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification extends Specification {
    constructor(size) {
        super();
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class AndSpecification extends Specification {
    constructor(...specs) {
        super();
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every((spec) => spec.isSatisfied(item));
    }
}

class BetterFilter {
    filter(items, spec) {
        return items.filter((item) => spec.isSatisfied(item));
    }
}

const appple = new Product('Apple', Color.green, Size.small);
const tree = new Product('Tree', Color.green, Size.large);
const house = new Product('House', Color.blue, Size.large);

const products = [appple, tree, house];

const pf = new ProductFilter();
console.log('Green products (old):');

for (const p of pf.filterByColor(products, Color.green)) {
    console.log(` * ${p.name} is green`);
}

const bf = new BetterFilter();
console.log('Green products (new):');

for (const p of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green`);
}

console.log('Large and green products');

const spec = new AndSpecification(new ColorSpecification(Color.green), new SizeSpecification(Size.large));

for (const p of bf.filter(products, spec)) {
    console.log(` * ${p.name} is green and large`);
}
