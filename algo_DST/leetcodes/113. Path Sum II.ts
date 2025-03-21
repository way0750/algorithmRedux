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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum, runningSum = 0, path = [], ans = []) {
    if (!root) return ans;
    if (!root.left && !root.right) {
        if (runningSum + root.val === targetSum) ans.push([...path, root.val]);
        return ans;
    }
    runningSum += root.val;
    const newPath = [...path, root.val];
    pathSum(root.left, targetSum, runningSum, newPath, ans);
    pathSum(root.right, targetSum, runningSum, newPath, ans);
    return ans;
};