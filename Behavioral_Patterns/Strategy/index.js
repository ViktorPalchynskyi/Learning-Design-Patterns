const OutputFormat = Object.freeze({
    markdown: 0,
    html: 1,
});

class ListStrategy {
    start(buffer) {}

    end(buffer) {}

    addListItem(buffer, item) {}
}

class MarkdownListStrategy extends ListStrategy {
    addListItem(buffer, item) {
        buffer.push(` * ${item}`);
    }
}

class HTMLListStrategy extends ListStrategy {
    start(buffer) {
        buffer.push('<ul>');
    }

    end(buffer) {
        buffer.push('</ul>');
    }

    addListItem(buffer, item) {
        buffer.push(`  <li>${item}</li>`);
    }
}

class TextProcessor {
    constructor(outputFormatouput) {
        this.buffer = [];
        this.setOutputFormat(outputFormatouput);
    }

    setOutputFormat(format) {
        switch (format) {
            case OutputFormat.markdown:
                this.listStrategy = new MarkdownListStrategy();
                break;
            case OutputFormat.html:
                this.listStrategy = new HTMLListStrategy();
                break;

            default:
                break;
        }
    }

    appendList(items) {
        this.listStrategy.start(this.buffer);

        for (const item of items) {
            this.listStrategy.addListItem(this.buffer, item);
        }

        this.listStrategy.end(this.buffer);
    }

    clear() {
        this.buffer = [];
    }

    toString() {
        return this.buffer.join('\n');
    }
}

const tp = new TextProcessor(OutputFormat.markdown);
tp.appendList(['foo', 'bar', 'baz']);
console.log(tp.toString());

tp.clear();
tp.setOutputFormat(OutputFormat.html);
tp.appendList(['alpha', 'beta', 'gamma']);

console.log(tp.toString());