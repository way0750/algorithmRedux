/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}

pass two node, 1.left && 2.left || 1.left && 2.right

base case:
    both nodes are null: return true;
    if only 1 is null/undefined: return false;
what to always return:
    boolean, found valid comparison from sub tree
what to do with returns:
    after comparing 1.left to either 2.left or 2.right
    compare to 1.right to eight 2.left or 2.right
how to make progress:
    see above
 */
    var flipEquiv = function(root1, root2) {
        if (!root1 || !root2) return !root1 && !root2;
        if (root1.val !== root2.val) return false;
        return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
            (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
    };