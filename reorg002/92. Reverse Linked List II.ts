/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
 */


function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let curNode = dummy;
    let i = 0;
    let leftEnd = null;
    let rightStart = null
    let revPre = null;
    let revEnd = null
    while (curNode) {
        if (i === left-1) leftEnd = curNode
        if (i === right+1) rightStart = curNode;

        const nextNode = curNode.next;
        if (left <= i && i <= right) {
            if (i === left) revEnd = curNode;
            curNode.next = revPre;
            if (i === right) {
                leftEnd.next = curNode;
                revEnd.next = nextNode;
            }
            revPre = curNode;
        }
        curNode = nextNode;
        i++
    }

    return dummy.next;
};