import fs from 'node:fs';

class Journal {
    constructor() {
        this.entries = {};
    }

    addEntry(text) {
        const c = ++Journal.count;
        const entry = `${c}: ${text}`;
        this.entries[c] = entry;

        return c;
    }

    removeEntry(index) {
        delete this.entries[index];
    }

    toString() {
        return Object.values(this.entries).join('\n');
    }

    save(filename) {
        fs.writeFileSync(`${filename}.txt`, this.toString());
    }

    load(filename) {}

    loadFromUrl(url) {}
}

Journal.count = 0;

class PersistenceManager {
    preprocess(j) {}

    saveToFile(jornal, filename) {
        fs.writeFileSync(`${filename}.txt`, jornal.toString());
    }
}

const j = new Journal();
const p = new PersistenceManager();

j.addEntry('Hello there!');
j.addEntry('I learned css all day');

console.log(j.toString());
// j.save('failOne');
p.saveToFile(j);
