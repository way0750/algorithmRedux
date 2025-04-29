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
 * @return {number[]}
 self left right
 */
 var preorderTraversal = function(root, path = []) {
    if (!root) return path;
    path.push(root.val);
    preorderTraversal(root.left, path);
    preorderTraversal(root.right, path);
    return path;
};