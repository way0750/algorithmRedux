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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, lookBack = new Set()) {
    if (!root) return false;
    if (lookBack.has(k - root.val)) return true;
    lookBack.add(root.val);
    return findTarget(root.left, k, lookBack) || findTarget(root.right, k, lookBack);
};