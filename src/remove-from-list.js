const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, key) {
    let curelement = list;
    let prevelement = null;
    do {
        if (curelement.value == key) {
            if (prevelement == null) {
                list = curelement.next;
            } else {
                prevelement.next = curelement.next;
            }
            curelement = curelement.next;
        } else {
            prevelement = curelement;
            curelement = curelement.next;
        }
    }
    while (curelement != null)
    return list;
}

module.exports = {
    removeKFromList
};