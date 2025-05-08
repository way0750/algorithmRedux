/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 for each and every single node
    check if the max height of its two sub trees differ less than 2
so need to get max height from both sub tree of each node
    return true if less than 2
    then return the the max height + 1(for current node)
    if anything there is unbalance found, should just short cut return false
so maintain a global bool to tell if currently the check if still true
    whenever it is not, stop all operations
    and return false;
also, need to bubble up the max height from either side
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    let balance = true;
    const dfs = (node, depth) => {
        if (!node) return depth;
        const leftMax = dfs(node.left, depth+1);
        if (!balance) return 0;
        let rightMax = dfs(node.right, depth+1);
        if (!balance) return 0;
        if (Math.abs(leftMax - rightMax) > 1) balance = false;
        return Math.max(leftMax, rightMax);
    }
    dfs(root, 0);
    return balance;
};