/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}

since it's a singly linked list
    we will need to have previous node, current node, and next node
        in order to take out any node and rejoin the list
    and in case of having to delete the original head node
        we can use a dummy node as pre node
time: O(n)
space: O(1);
 */
var removeElements = function(head, val) {
    const dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curNode = head;
    while (curNode) {
        const next = curNode.next;
        if (curNode.val === val) {
            prev.next = curNode.next;
            curNode.next = null;
        } else {
            prev = curNode;
        }
        curNode = next;
    }
    return dummy.next;
};