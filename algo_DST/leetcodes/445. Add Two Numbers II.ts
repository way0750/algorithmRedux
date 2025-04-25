/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 get the number from each list by looping through each
 do math
 then extra one digit at the time to create the new list
 */
 const getDigits = (list) => {
    const digits = []
    while (list) {
        digits.unshift(list.val);
        list = list.next;
    }
    return digits;
}
var addTwoNumbers = function(l1, l2) {
    const l1Digits = getDigits(l1);
    const l2Digits = getDigits(l2);
    let carryOver = 0;
    let index = 0
    let preNode = null;
    while (index < l1Digits.length || index < l2Digits.length) {
        const n1Digit = (l1Digits[index] || 0);
        const n2Digit = (l2Digits[index] || 0);
        const val = carryOver + n1Digit + n2Digit;
        const newNode = new ListNode(val % 10, preNode);
        preNode = newNode;
        carryOver = val > 9 ? 1 : 0;
        index++
    }
    if (carryOver) {
        const newNode = new ListNode(1, preNode);
        preNode = newNode;
    }
    return preNode;
};