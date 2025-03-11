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
 * @return {number[]}
 depth first search:
 always go down right first
 have an array to keep track of the right most node on each level
 because always going down right first, the first node on that level
    is the right most node
 */
    var rightSideView = function(root, ans = [], level = 0) {
        if (!root) return ans;
        if (ans[level] === undefined) ans[level] = root.val;
        rightSideView(root.right, ans, level + 1);
        return rightSideView(root.left, ans, level + 1);
    };