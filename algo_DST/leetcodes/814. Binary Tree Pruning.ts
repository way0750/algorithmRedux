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
 do a dfs
 and keep on return sub tree root nodes if containing 1 anywhere down the tree
 return null if there is a 1 anywhere in the subtree

 base case:
    !root, return null
 what to always return:
    an object, null for no valid sub tree
        or a node, which is a root of a sub tree containing at least a 1 anywhere
 what to do with returns:
    if any of them is a node, return self
    if none of them is a node
        if self is 1, return self
        if self is 0 return null
 how to make progress:
    recursively call left right
time: O(node count)
space: O(depth)
 */
var pruneTree = function(root) {
    if (!root) return null;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    return root.val === 1 || root.left || root.right ? root : null;
};