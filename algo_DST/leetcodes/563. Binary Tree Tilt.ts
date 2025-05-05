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
use recursive dfs for the ease of managing context (no mixing of other nodes)
base case:
    root node is null: return 0;
what to always return:
    an ingeger, which is the sum of the sub tree of the returning side
what to do with returns:
    use it to get the new sum
    and to get the diff for cur node
how to make progress
    recursively call left and right
time: O(n) n is the amount of node
space: O(log n)
 */


const findTilt = (root) => {
    let ans = 0;
    const dfs = function(root) {
        if (!root) return 0;
        const leftSum = dfs(root.left);
        const rightSum = dfs(root.right);
        const totalSum = leftSum + root.val + rightSum;
        root.val = Math.abs(leftSum - rightSum);
        ans += root.val;
        return totalSum;
    };
    dfs(root);
    return ans;
}