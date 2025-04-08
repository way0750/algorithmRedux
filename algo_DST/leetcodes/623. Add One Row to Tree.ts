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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
export const addOneRow = function(root, val, depth) {
    if (!root) return root;
    if (depth === 1) {
        return new TreeNode(val, root, null);
    } else if (depth - 1 === 1) {
        root.left = new TreeNode(val, root.left, null)
        root.right = new TreeNode(val, null, root.right);
    } else {
        addOneRow(root.left, val, depth-1);
        addOneRow(root.right, val, depth-1);
    }
    return root;
};
