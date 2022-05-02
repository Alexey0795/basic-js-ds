const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

    constructor() {
        this.head = null;
    }

    root() {
        return this.head;
    }

    add(data) {
        this.head = continueToAdd(this.head, data);

        function continueToAdd(node, data) {
            if (!node) { return new Node(data); }

            if (data < node.data) {
                node.left = continueToAdd(node.left, data);
            } else {
                node.right = continueToAdd(node.right, data);
            }

            return node;
        }
    }

    has(data) {
        return continueSearch(this.head, data);

        function continueSearch(node, data) {
            if (!node) { return false; }

            if (node.data === data) { return true; }

            return data < node.data ?
                continueSearch(node.left, data) :
                continueSearch(node.right, data);
        }
    }

    find(data) {
        let curnode = this.head;
        while (curnode) {
            if (curnode.data === data) { return curnode; }
            curnode = data > curnode.data ? curnode.right : curnode.left;
        }

        return null;
    }

    remove(data) {
        this.head = continueToRemove(this.head, data);

        function continueToRemove(node, data) {
            if (!node) { return null; }

            if (data < node.data) {
                node.left = continueToRemove(node.left, data);
                return node;
            } else if (data > node.data) {
                node.right = continueToRemove(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) { return null; }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left;
                }
                node.data = minFromRight.data;

                node.right = continueToRemove(node.right, minFromRight.data);

                return node;
            }
        }
    }

    min() {
        if (!this.head) { return; }

        let curnode = this.head;
        while (curnode.left) {
            curnode = curnode.left;
        }

        return curnode.data;
    }

    max() {
        if (!this.head) { return; }

        let curnode = this.head;
        while (curnode.right) {
            curnode = curnode.right;
        }

        return curnode.data;
    }
}

module.exports = {
    BinarySearchTree
};