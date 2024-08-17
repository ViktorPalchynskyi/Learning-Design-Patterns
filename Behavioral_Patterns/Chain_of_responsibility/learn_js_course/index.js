const Middleware = {
    next: {},
    handle() {
        if (new Date().getDate() === 17) {
            console.log('Next on Midlleware 1');
            this.next.handle();
        }
    },
    setNext(next) {
        this.next = next;

        return this.next;
    },
};

const Middleware2 = {
    next: {},
    handle() {
        if (new Date().getDate() === 17) {
            console.log('Next on Midlleware 2');
            this.next.handle();
        }
    },
    setNext(next) {
        this.next = next;

        return this.next;
    },
};

const Middleware3 = {
    next: {},
    handle() {
        if (new Date().getDate() === 17 && this.next?.handle) {
            console.log('Next on Midlleware 3');
            this.next.handle();
        }
    },
    setNext(next) {
        this.next = next;

        return this.next;
    },
};
console.log(new Date().getDate());
Middleware.setNext(Middleware2).setNext(Middleware3);
Middleware.handle();
