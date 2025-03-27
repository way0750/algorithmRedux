/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 find the length of both lists
 then move the long ahead first to match the short one
    so both lists will have the same nodes to go
    then keep on comparing two lists
        return the first node that's the same by reference
time: O(n);
space: O(1);

AAA
BBBBB

AAABBBBB
BBBBBAAA

 */
const getLength = (list) => {
    let length = 0;
    while (list) {
        length++;
        list = list.next;
    }
    return length;
}
var getIntersectionNode001 = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    while (lenA > lenB) {
        headA = headA.next
        lenA--;
    }
    while (lenA < lenB) {
        headB = headB.next
        lenB--;
    }
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

const getIntersectionNode = (headA, headB) => {
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}