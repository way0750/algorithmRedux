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
 * @return {boolean}
 use an array to keep track of last node of each level
 then do a dfs to compare
 make sure to pass down depth

 base case:
    null node, return true
 what to always return:
    boolean
 what to do with returns:
    if true, keep searching
    if false, just return false all the way up
 how to make progress/make problem smaller:
    just dfs children nodes
time: O(node count)
space: O(depth)
 */
var isEvenOddTree = function(root, curDepth=0, leftNodes = []) {
    if (!root) return true;
    if (curDepth % 2 === root.val % 2) return false;
    if (curDepth % 2 === 0 && leftNodes[curDepth]) {
        if (root.val <= leftNodes[curDepth].val) return false;
    } else if (curDepth % 2 === 1 && leftNodes[curDepth]) {
        if (root.val >= leftNodes[curDepth].val) return false;
    }
    leftNodes[curDepth] = root;
    return isEvenOddTree(root.left, curDepth+1, leftNodes) &&
        isEvenOddTree(root.right, curDepth+1, leftNodes);
};