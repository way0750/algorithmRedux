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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const find = (node, target, path) => {
        if (!node) return false;
        if (node.val === target) return true;
        path.push('L');
        if (find(node.left, target, path)) return true;
        path.pop();
        path.push('R');
        if (find(node.right, target, path)) return true;
        path.pop();
        return false;
    }
    let startPath = [];
    find(root, startValue, startPath);
    const destPath = [];
    find(root, destValue, destPath);
    while (startPath[0] === destPath[0]) {
        startPath.shift();
        destPath.shift();
    }
    startPath = Array(startPath.length).fill('U');
    return startPath.join('') + destPath.join('');
};