class Bird {
    constructor(age = 0) {
        this.age = age;
    }

    fly() {
        return this.age < 10 ? 'flying' : 'too old';
    }
}

class Lizard {
    constructor(age = 0) {
        this.age = age;
    }

    crawl() {
        return this.age > 1 ? 'crawling' : 'too young';
    }
}

class Dragon {
    constructor(age = 0) {
        this.age = age;
    }

    fly() {
        return new Bird(this.age).fly();
    }

    crawl() {
        return new Lizard(this.age).crawl();
    }
    // todo: API members
}
