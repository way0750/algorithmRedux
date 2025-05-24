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
const averageOfSubtree = function(root) {
    let count = 0;
    const dfs = (root) => {
        if (!root) return [0 ,0] // [runningSum, node count];
        const left = dfs(root.left);
        const right = dfs(root.right);
        const newRunningSum = left[0] + right[0] + root.val;
        const curNodeCount = left[1] + right[1] + 1;
        const avg = Math.floor(newRunningSum / curNodeCount);
        if (avg === root.val) count++;
        return [newRunningSum, curNodeCount];
    };
    dfs(root);
    return count;
};
