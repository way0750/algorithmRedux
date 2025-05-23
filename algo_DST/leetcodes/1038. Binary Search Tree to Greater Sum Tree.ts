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
 * @return {TreeNode}
 */
var bstToGst = function(root, running = {sum: 0}) {
    if (!root) return root;
    bstToGst(root.right, running);
    root.val = running.sum += root.val;
    bstToGst(root.left, running);
    return root;
};