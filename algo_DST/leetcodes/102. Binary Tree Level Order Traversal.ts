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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let level = [root];
    const ans = []
    while (level.length) {
        const nextLevel = [];
        const curLevelVals = [];
        for (let node of level) {
            curLevelVals.push(node.val);
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        ans.push(curLevelVals);
        level = nextLevel;
    }
    return ans;
};