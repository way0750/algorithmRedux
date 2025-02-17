/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */

function deleteDuplicates002(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(null, head);
    let curNode = dummy;
    let dubVal = null;
    while (curNode) {
        if (curNode.next && curNode.next.next) {
            if (curNode.next.val === curNode.next.next.val) {
                dubVal = curNode.next.val;
            }
        }
        let nextNode = curNode.next;
        while (nextNode && nextNode.val === dubVal) {
            curNode.next = nextNode.next
            nextNode = nextNode.next;
        }
        if (dubVal !== null) {
            dubVal = null;
        } else {
            curNode = curNode.next;
        }
    }

    return dummy.next;
};
