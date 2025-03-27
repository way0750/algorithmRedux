/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}

use recursion to take advantage of the accessing the last node to first node
    but do pass the head all the way down as well
at the last stack
    compare the last node and the passed in head node
        return boolean
    BUT always return back the head node / current left-to-right-node.next
        so that means will need to keep track the result of the palindrome
            if it's false, should then always be false
base case:
    !head, return left node
what to do with returns:
    compare current node with the returned node
    then return the returned node.next
what to always return?
    a linked list node
how to break problem smaller / make progress:
    recursively call a function with head.next

time: O(n)
space: O(n);
 */
var isPalindrome = function(head) {
    let isPali = true;
    const search = (curNode, list) => {
        if (!curNode) return list;
        const left = search(curNode.next, list);
        isPali = isPali && curNode.val === left.val;
        return left.next;
    }
    search(head, head);
    return isPali;
};