/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

 

Example 1:


Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:


Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
0 <= Node.val <= 9
The depth of the tree will not exceed 10.

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 dfs:
 pass in a running sum
    will only add to it at the leaf node
do a dfs accumulating nums along the way
    til the leaf node
    num + sum
    return new sum

base case: leaf node
    do math
always return the current running sum
what to do with return:
    pass it to the next child's call
    or pass it all the way up
how to make problem smaller:
    just recursively left then right
time: O(N)
space: O(logN) for the recursive stack
 */
var sumNumbers = function(root, num = '', sum = 0) {
    if (!root) return 0;
    if (!root.left && !root.right) return +(num + root.val) + sum;
    const leftSum = (root.left && sumNumbers(root.left, num + root.val, sum) || sum);
    return (root.right && sumNumbers(root.right, num + root.val, leftSum)) || leftSum;
};