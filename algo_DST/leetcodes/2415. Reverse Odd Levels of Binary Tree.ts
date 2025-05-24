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
var reverseOddLevels = function(root) {
    const duoDFS = (left, right, swap) => {
        if (!left) return;
        if (swap) [left.val, right.val] = [right.val, left.val];
        duoDFS(left.left, right.right, !swap);
        duoDFS(left.right, right.left, !swap);
    }
    duoDFS(root.left, root.right, true);
    return root;
};