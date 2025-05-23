/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }


 100
 1 100
 2 50
 4 25
 5 20
 10 10
 
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const gcd = (n1, n2) => {
    while (n1 % n2 !== 0) {
        const rem = n1 % n2;
        n1 = n2;
        n2 = rem;
    }
    return n2;
}
var insertGreatestCommonDivisors = function(head) {
    let curNode = head;
    let nextNode = curNode.next;
    while (nextNode) {
        const imd = gcd(curNode.val, nextNode.val);
        curNode.next = new ListNode(imd, nextNode);
        curNode = nextNode;
        nextNode = nextNode.next;
    }
    return head;
};