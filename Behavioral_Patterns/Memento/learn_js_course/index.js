const game = {
    level: 12,
    money: 12,
    name: 'Viktor',
    makeSnapshot() {
        return { level: this.level, money: this.money };
    },
    restoreFromSnapshot({ level, money, name }) {
        this.level = level;
        this.money = money;
        this.name = name || this.name;
    },
};

const snapshotOne = game.makeSnapshot();
game.level = 24;
game.money = 100;

const snapshotTwo = game.makeSnapshot();

console.log(game);

game.restoreFromSnapshot(snapshotOne);
console.log(game);
game.restoreFromSnapshot(snapshotTwo);
console.log(game);
