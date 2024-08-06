const Relationsip = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2,
});

class Person {
    constructor(name) {
        this.name = name;
    }
}

// LOW-LEVEL MODULE
class RelationsipBrowser {
    constructor() {
        if (this.constructor.name === 'RelationsipBrowser') {
            throw new Error('RelationsipBrowser is abstract!');
        }
    }

    findAllChildrenOf(name) {}
}

class Relationships extends RelationsipBrowser {
    constructor() {
        super();
        this.data = [];
    }

    addParentAndChild(parent, child) {
        this.data.push({
            from: parent,
            type: Relationsip.parent,
            to: child,
        });
    }

    findAllChildrenOf(name) {
        return this.data.filter((r) => r.from.name === name && r.type === Relationsip.parent).map((r) => r.to);
    }
}

// HIGHT-LEVEL MODULE
class Research {
    // constructor(relationships) {
    //     // find all children of John
    //     const relations = relationships.data;

    //     for (const rel of relations.filter((r) => r.from.name === 'John' && r.type === Relationsip.parent)) {
    //         console.log(`John has a child named ${rel.to.name}`);
    //     }
    // }

    constructor(browser) {
        for (const p of browser.findAllChildrenOf('John')) {
            console.log(`John has a child named ${p.name}`);
        }
    }
}

const parent = new Person('John');
const child1 = new Person('Chris');
const child2 = new Person('Matt');

const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
