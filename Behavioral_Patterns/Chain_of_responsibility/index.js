class Creature {
    constructor(name, attack, defense) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }

    toString() {
        return `${this.name} (${this.attack}/${this.defense})`;
    }
}

class CreatureModifier {
    constructor(creature) {
        this.creature = creature;
        this.next = null;
    }

    add(modifier) {
        if (this.next) {
            this.next.add(modifier);
        } else {
            this.next = modifier;
        }
    }

    handle() {
        if (this.next) {
            this.next.handle();
        }
    }
}

class DoubleAttackModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        console.log(`Doubling ${this.creature.name}'s atack`);
        this.creature.attack *= 2;
        super.handle();
    }
}

class IncreaseDefenseModifier extends CreatureModifier {
    constructor(creature) {
        super(creature);
    }

    handle() {
        console.log(`Doubling ${this.creature.name}'s defense`);
        this.creature.defense *= 2;
        super.handle();
    }
}

const goblin = new Creature('Goblin', 1, 1);
const root = new CreatureModifier(goblin);
root.add(new DoubleAttackModifier(goblin));
root.add(new DoubleAttackModifier(goblin));
root.add(new IncreaseDefenseModifier(goblin));
root.handle();
console.log(goblin.toString());
