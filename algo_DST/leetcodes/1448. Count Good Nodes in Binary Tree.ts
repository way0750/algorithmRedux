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
 do a dfs, and pass current largest node to next call
 base case:
    if root === null, return 0
 what to always return:
    an integer, the count of good nodes
 what to do returns:
    add them up and return them
 how to make progress/make problem smaller:
    all left/right
time: O(node)
space: O(depth)
 */
var goodNodes = function(root, curMax = -Infinity) {
    if (!root) return 0;
    const nextMax = Math.max(curMax, root.val)
    return (root.val >= curMax ? 1 : 0) +
        goodNodes(root.left, nextMax) +
        goodNodes(root.right, nextMax);
};