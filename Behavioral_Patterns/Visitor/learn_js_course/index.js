const RootNode = {
    title: '',
    accept(visitor) {
        visitor.visitRootNode(this);
    },
};

const StorageNode2 = {
    level: 12,

    accept(visitor) {
        visitor.visitStorageNode(this);
    },
};

const StorageNode3 = {
    level: 12,

    accept(visitor) {
        visitor.visitStorageNode(this);
    },
};

const Builder = {
    result: {},
    setRootTitle(title) {
        this.result.rootTitle = title;
    },
    setLevel(level) {
        this.result.levelevel += level;
    },
};

const PDFVisitor = {
    builder: Builder,
    visitStorageNode(node) {
        this.builder.setLevel = node.level;
    },
    visitRootNode(node) {
        this.builder.setRootTitle = node.title;
    },
};

for (const node of tree) {
    node.accept(PDFVisitor);
}


Builder.result;