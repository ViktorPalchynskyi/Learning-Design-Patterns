class Creature {
    constructor() {
        // this.strength = this.agility = this.intelligence = 10;
        this.stats = new Array(3).fill(10);
    }

    get strength() {
        return this.stats[0];
    }

    set strength(value) {
        this.stats[0] = value;
    }

    get agility() {
        return this.stats[1];
    }

    set agility(value) {
        this.stats[1] = value;
    }

    get intelligence() {
        return this.stats[2];
    }

    set intelligence(value) {
        this.stats[2] = value;
    }

    get sumOfStats() {
        return this.stats.reduce((x, y) => x + y, 0);
    }

    get averageStat() {
        return this.sumOfStats / this.stats.length;
    }

    get maxStat() {
        return Math.max(...this.stats);
    }

    // get sumOfStats() {
    //     return this.strength + this.agility + this.intelligence;
    // }

    // get averageStat() {
    //     return this.sumOfStats / 3.0;
    // }

    // get maxStat() {
    //     return Math.max(
    //         this.strength,
    //         this.agility,
    //         this.intelligence
    //     );
    // }
}

const creature = new Creature();
creature.strength = 10;
creature.agility = 11;
creature.intelligence = 15;

// console.log(
//     `Creature has average stat ${creature.averageStat}, max stat = ${creature.maxStat}, sum of stats = ${creature.sumOfStats}`
// );

class Staff {
    constructor() {
        this.a = 12;
        this.b = 42;
    }

    [Symbol.iterator]() {
        let i = 0;
        const self = this;

        return {
            next: () => ({
                done: i > 1,
                value: self[i++ === 0 ? 'a' : 'b'],
            }),
        };
    }

    get backwards() {
        let i = 0;
        const self = this;

        return {
            next: () => {
                return {
                    done: i > 1,
                    value: self[i++ === 0 ? 'b' : 'a'],
                };
            },
            [Symbol.iterator]: function () {
                return this;
            },
        };
    }
}

const values = [100, 200, 300];
const staff = new Staff();

// for (const s of staff) {
//     console.log(s);
// }

// for (const s of staff.backwards) {
//     console.log(s);
// }

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = null;

        if (this.left) {
            this.left.parent = this;
        }

        if (this.right) {
            this.right.parent = this;
        }
    }
}

class BinaryTree {
    constructor(rootNode) {
        this.rootNode = rootNode;
    }

    [Symbol.iterator]() {
        return makeInOrderIterator(this.rootNode);
    }

    *betterInOrder() {
        function* traverse(current) {
            if (current.left) {
                for (const left of traverse(current.left)) {
                    yield left;
                }
            }

            yield current;

            if (current.right) {
                for (const right of traverse(current.right)) {
                    yield right;
                }
            }
        }

        for (const node of traverse(this.rootNode)) {
            yield node;
        }
    }
}

function makeInOrderIterator(root) {
    let current = root;

    while (current.left) {
        current = current.left;
    }

    let yieldedStart = false;

    return {
        next: () => {
            if (!yieldedStart) {
                yieldedStart = true;

                return {
                    value: current,
                    done: false,
                };
            }

            if (current.right) {
                current = current.right;

                while (current.left) {
                    current = current.left;
                }

                return {
                    value: current,
                    done: false,
                };
            } else {
                let p = current.parent;

                while (p && current === p.right) {
                    current = p;
                    p = p.parent;
                }

                current = p;

                return {
                    value: current,
                    done: current === null,
                };
            }
        },
        [Symbol.iterator]: function () {
            return this;
        },
    };
}

const root = new Node(1, new Node(2), new Node(3));

const it = makeInOrderIterator(root);
// let res = it.next();

// while (!res.done) {
//     console.log(res.value.value);
//     res = it.next();
// }

for (const x of new BinaryTree(root).betterInOrder()) {
    console.log(x.value);
}
