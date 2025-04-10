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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
must have a container for all the root nodes
    if current node needs to be deleted
        add left and/or right child as root to the container
        then return null for parent to add as new left/right child


base case:
    node === null, return null;
what to always return:
    a root node / null (if child gets deleted)
what to do with return:
    add to left or right (if gets deleted, then you are adding null)
how to make problem smaller / how to make progress
    recursively call left and right
 */
    var delNodes = function(root, to_delete) {
        const forest = [];
        if (!root) return forest;
    
        const targets = new Set(to_delete);
        const dfs = (curNode) => {
            if (!curNode) return null;
            curNode.left = dfs(curNode.left);
            curNode.right = dfs(curNode.right);
            if (!targets.has(curNode.val)) return curNode;
            if (curNode.left) forest.push(curNode.left);
            if (curNode.right) forest.push(curNode.right);
            curNode.left = null;
            curNode.right = null;
            return null;
        }
    
        if (dfs(root)) forest.push(root);
        
        return forest;
    };