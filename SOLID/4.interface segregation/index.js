class Document {}

class Machine {
    constructor() {
        if (this.constructor.name === 'Machine') {
            throw new Error('Machine is abstract!');
        }
    }

    print(doc) {}
    fax(doc) {}
    scan(doc) {}
}

class NotImplementedError extends Error {
    constructor(name) {
        const msg = `${name} is not implemented!`;
        super(msg);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError);
        }
    }
}

class MultiFunctionPrinter extends Machine {
    print(doc) {
        //
    }

    fax(doc) {
        //
    }

    scan(doc) {
        //
    }
}

class OldFashionedPrinter extends Machine {
    print(doc) {
        // ok
    }

    fax(doc) {
        // do nothing
        // principle of least surprise
    }

    scan(doc) {
        throw new NotImplementedError('OldFashionedPrinter.scan');
    }
}

class Printer {
    constructor() {
        if (this.constructor.name === 'Printer') {
            throw new Error('Printer is abstract!');
        }
    }

    printer(doc) {}

}

class Scanner {
    constructor() {
        if (this.constructor.name === 'Printer') {
            throw new Error('Printer is abstract!');
        }
    }

    scaner(doc) {}
}

const printer = new OldFashionedPrinter();
printer.scan();
