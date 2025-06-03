/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    a--;
    let i = 0;
    let curNode = list1;
    let start = null;
    let end = null;
    while (!start) {
        if (i++ === a) start = curNode;
        curNode = curNode.next;
    }
    while (!end) {
        if (i++ === b) end = curNode;
        curNode = curNode.next;
    }
    curNode = list2;
    while (curNode.next) curNode = curNode.next;
    start.next = list2
    curNode.next = end.next;
    end.next = null;
    return list1;
};
