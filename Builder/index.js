class Tag {
    static get indentSize() {
        return 2;
    }

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        let html = [];
        let i = ' '.repeat(indent * Tag.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > 0) {
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }

        for (let child of this.children)
            html.push(child.toStringImpl(indent + 1));

        html.push(`${i}</${this.name}>\n`);
        return html.join('');
    }

    toString() {
        return this.toStringImpl(0);
    }

    static create(name) {
        return new HtmlBuilder(name);
    }
}

class HtmlBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    addChild(childName, childText) {
        const child = new Tag(childName, childText);
        this.root.children.push(child);
    }

    addChildFluent(childName, childText) {
        const child = new Tag(childName, childText);
        this.root.children.push(child);

        return this;
    }

    clear() {
        this.root = new Tag(this.rootName);
    }

    toString() {
        return this.root.toString();
    }

    build() {
        return this.root;
    }
}

const hello = 'hello';
let html = [];
html.push('<p>');
html.push(hello);
html.push('</p>');

// console.log(html.join(''));

const words = ['hello', 'world'];
html = [];
html.push('<ul>\n');

for (const word of words) {
    html.push(`  <li>${word}</li>\n`);
}

html.push('</ul>');
// console.log(html.join(''));

// const builder = new HtmlBuilder('ul');
const builder = Tag.create('ul');

for (const word of words) {
    builder.addChild('li', word);
}

// console.log(builder.toString());
builder.clear();
builder
    .addChildFluent('li', 'foo')
    .addChildFluent('li', 'bar')
    .addChildFluent('li', 'baz');

class Person {
    constructor() {
        // adress
        this.streetAddress = this.postcode = this.city = '';

        // employment
        this.companyName = this.position = '';
        this.annualIncome = 0;
    }

    toString() {
        return (
            `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
            `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
        );
    }
}

class PersonBuilder {
    constructor(person = new Person()) {
        this.person = person;
    }

    get lives() {
        return new PersonAddressBuilder(this.person);
    }

    get works() {
        return new PersonJobBuilder(this.person);
    }

    build() {
        return this.person;
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(companyName) {
        this.person.companyName = companyName;

        return this;
    }

    asA(position) {
        this.person.position = position;

        return this;
    }

    earning(annualIncome) {
        this.person.annualIncome = annualIncome;

        return this;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person) {
        super(person);
    }

    at(streetAddress) {
        this.person.streetAddress = streetAddress;

        return this;
    }

    withPostcode(postcode) {
        this.person.postcode = postcode;

        return this;
    }

    in(city) {
        this.person.city = city;

        return this;
    }
}

const pb = new PersonBuilder();
const person = pb
    .lives.at('123 London Road').withPostcode('442').in('London')
    .works.at('Central Hospital').asA('Doctor').earning(10000)
    .build();

console.log(person.toString());