class FormattedText {
    constructor(plainText) {
        this.plainText = plainText;
        this.caps = new Array(plainText.length).map(() => false);
    }

    capitalize(start, end) {
        for (let i = start; i < end; ++i) {
            this.caps[i] = true;
        }
    }

    toString() {
        const buffer = [];

        for (const i in this.plainText) {
            const c = this.plainText[i];
            buffer.push(this.caps[i] ? c.toUpperCase() : c);
        }

        return buffer.join('');
    }
}

class TextRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.capitalize = false;
    }

    covers(position) {
        return position >= this.start && position <= this.end;
    }
}

class BetterFormattedText {
    constructor(plainText) {
        this.plainText = plainText;
        this.formatting = [];
    }

    getRange(start, end) {
        const range = new TextRange(start, end);
        this.formatting.push(range);

        return range;
    }

    toString() {
        const buffer = [];

        for (const i in this.plainText) {
            let c = this.plainText[i];

            for (const range of this.formatting) {
                if (range.covers(i) && range.capitalize) {
                    c = c.toUpperCase();
                }
                buffer.push(c);
            }
        }

        return buffer.join('');
    }
}

const text = 'This is a brave new world';
const ft = new FormattedText(text);
ft.capitalize(10, 15);
console.log(ft.toString());
const bft = new BetterFormattedText(text);
bft.getRange(16, 19).capitalize = true;
console.log(bft.toString());

class User {
    constructor(fullName) {
        this.fullName = fullName;
    }
}

class User2 {
    constructor(fullName) {
        let getOrAdd = function (s) {
            let idx = User2.strings.indexOf(s);
            if (idx !== -1) return idx;
            else {
                User2.strings.push(s);
                return User2.strings.length - 1;
            }
        };

        this.names = fullName.split(' ').map(getOrAdd);
    }
}
User2.strings = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let randomString = function () {
    let result = [];
    for (let x = 0; x < 10; ++x)
        result.push(String.fromCharCode(65 + getRandomInt(26)));
    return result.join('');
};

let users = [];
let users2 = [];
let firstNames = [];
let lastNames = [];

for (let i = 0; i < 100; ++i) {
    firstNames.push(randomString());
    lastNames.push(randomString());
}

// make 10k users
for (let first of firstNames)
    for (let last of lastNames) {
        users.push(new User(`${first} ${last}`));
        users2.push(new User2(`${first} ${last}`));
    }

// this is a ballpark comparison (very unscientific)
// actual memory gains are huge!
console.log(
    `10k users take up approx ` +
        `${JSON.stringify(users).length} chars`
);

let users2length = [users2, User2.strings]
    .map((x) => JSON.stringify(x).length)
    .reduce((x, y) => x + y);
console.log(
    `10k flyweight users take up approx ` + `${users2length} chars`
);
