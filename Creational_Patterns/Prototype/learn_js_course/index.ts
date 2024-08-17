const StorageNode = {
    level: 12,
    type: 'oil',
    clone() {
        return {
            level: 0,
            type: this.type,
        };
    },
};

const StorageNodeCopy = { ...StorageNode };

interface NodeWithClone<Node> {
    clone(): Node;
}

class StorageNodeClass implements NodeWithClone<StorageNodeClass> {
    clone() {
        return new StorageNodeClass();
    }
}
