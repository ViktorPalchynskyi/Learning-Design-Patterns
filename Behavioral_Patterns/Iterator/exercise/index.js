// Given the following definition of a Node , please implement preorder traversal right inside Node. 
// The sequence returned should be the sequence of values, not their containing nodes.

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;

        this.parent = null;

        if (left) left.parent = this;
        if (right) right.parent = this;
    }

    *_traverse(current) {
        yield current;
        if (current.left) {
            for (let left of this._traverse(current.left)) yield left;
        }
        if (current.right) {
            for (let right of this._traverse(current.right))
                yield right;
        }
    }

    *preorder() {
        // return all the node *values* (not the nodes)
        for (let node of this._traverse(this)) yield node.value;
    }
}
