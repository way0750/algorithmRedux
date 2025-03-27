/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

loop through the list
    whenever the current node has the same val as the previous one
        remove it from the list
to make it easier to remove node
    we will need prev node, current node, and next node
return head at the end
time: O(n)
space: O(1)
 */
export var deleteDuplicates = function(head) {
    let prev = new ListNode(-Infinity);
    prev.next = head;
    let curNode = head;
    while (curNode) {
        const next = curNode.next;
        if (prev.val === curNode.val) {
            prev.next = next;
            curNode.next = null;
        } else {
            prev = curNode;
        }
        curNode = next;
    }
    return head;
};