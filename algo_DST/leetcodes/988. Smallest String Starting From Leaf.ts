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
 * @return {string}
 shared state container: array
 what's a decision: left/right child if exists
 how to make a decision
    always add self val to the state container
    then call with left and/or right child
    don't forget to pop it later to remove decision
validation:
    valid solution if: no left and right and the path str is smaller
base case:
 */
var smallestFromLeaf = function(root) {
    let path = [];
    let curMinStr = '';
    const alphabhets = 'abcdefghijklmnopqrstuvwxyz';
    const dfs = (node) => {
        path.unshift(alphabhets[node.val]);
        if (!node.left && !node.right) {
            const curPathStr = path.join('');
            curMinStr = curMinStr && curMinStr < curPathStr ? curMinStr : curPathStr;
        }
        node.left && dfs(node.left);
        node.right && dfs(node.right);
        path.shift() // resetting partial solution state
    };

    dfs(root);
    return curMinStr;
};