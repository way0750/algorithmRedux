/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slow = head;
    let fast = slow.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let cur = slow.next;
    slow.next = null
    let pre = null;
    while (cur) {
        const nextCur = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextCur;
    }
    let list1 = head;
    let list2 = pre;
    while (list2) {
        const nextList1 = list1.next;
        const nextList2 = list2.next;
        list1.next = list2;
        list2.next = nextList1;
        list1 = nextList1;
        list2 = nextList2;
    }
    return head;
};