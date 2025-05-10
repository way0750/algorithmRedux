/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 use breadth first search because it can find the in depth faster than depth first search
 the down side is space complexity

time: O(n)
space: O(2**depth)
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0;
    let curLvl = [root];
    let depth = 1;
    while (curLvl.length) {
        const nextLvl = [];
        for (let node of curLvl) {
            if (!node.left && !node.right) return depth;
            node.left && nextLvl.push(node.left);
            node.right && nextLvl.push(node.right);
        }
        curLvl = nextLvl;
        depth++;
    }
};