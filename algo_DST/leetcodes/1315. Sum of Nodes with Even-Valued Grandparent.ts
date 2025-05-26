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
 */
var sumEvenGrandparent = function(root, isGE = false, isPE = false) {
    if (!root) return 0;
    const isSelfE = root.val % 2 === 0;
    return (isGE ? root.val : 0)
        + sumEvenGrandparent(root.left, isPE, isSelfE)
        + sumEvenGrandparent(root.right, isPE, isSelfE);
};
