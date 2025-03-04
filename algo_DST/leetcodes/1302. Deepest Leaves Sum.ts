/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
use breadth first search to go from level to level
each time, when getting the nodes for next level
    if nothing is found, that means there is no next level
    then do sum with all the node(s) of the current level
time: O(n)
space: O(n**depth)
 */
var deepestLeavesSum = function(root) {
    let curLevel = [root]
    let sum = 0;
    while (curLevel.length) {
        const nextLevel = [];
        sum = 0;
        for (let node of curLevel) {
            sum += node.val;
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        curLevel = nextLevel;
    }
    return sum;
};