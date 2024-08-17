class Buffer extends Array {
    constructor(widht = 30, height = 20) {
        super();
        this.widht = widht;
        this.height = height;
        this.alloc(widht * height);
    }

    write(text, position = 0) {}
}

class Viewport {
    constructor(buffer = new Buffer()) {
        this.buffer = buffer;
        this.offset = 0;
    }

    append(text, pos) {
        this.buffer.write(text, pos + this.offset);
    }

    getCharAt(index) {
        return this.buffer[this.offset + index];
    }
}

class Console {
    constructor() {
        this.buffer = new Buffer();
        this.currentViewport = new Viewport(this.buffer);
        this.buffers = [this.buffer];
        this.viewports = [this.currentViewport];
    }

    write(text) {
        this.currentViewport.buffer.write(text);
    }

    getCharAt(index) {
        return this.currentViewport.getCharAt(index);
    }
}

const c = new Console();
c.write('hello');
const ch = c.getCharAt(0);
