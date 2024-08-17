class Node {
    paint() {
        console.log('Painting Node.');
    }
}

class NodeContainer {
    children = [];

    add(...node) {
        this.children.push(...node);

        return this;
    }

    paint() {
        this.children.forEach((node) => node.paint());
    }
}

class StorageNode {
    children = [];

    add(...node) {
        this.children.push(...node);

        return this;
    }

    paint() {
        this.children.forEach((node) => node.paint());
    }
}

class CarNode {
    paint() {
        console.log('Painting CarNode.');
    }
}

const storageNode = new StorageNode();
const node1 = new Node();
const node2 = new Node();
const node3 = new Node();
const node4 = new Node();
const node5 = new Node();
const node6 = new Node();
const container = new NodeContainer();
const container2 = new NodeContainer();
const container3 = new NodeContainer();
const carNode = new CarNode();
const carNode2 = new CarNode();

storageNode.add(container, node1, node3, node5);
container.add(container2, node2, carNode);
container2.add(container3, carNode2, node6);
container3.add(carNode2, carNode, node1);

storageNode.paint();