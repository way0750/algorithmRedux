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
 * @param {number} k
 * @return {number}
base case:
    null: just return null
    k === 0 return self
what to always return?
    a node / null

 */
    var kthSmallest = function(root, k) {
        let i = 0;
        const dfs = (root) => {
            if (!root) return null;
            const leftReturn = dfs(root.left);
            if (leftReturn !== null) return leftReturn;
            if (++i === k) return root.val;
            return dfs(root.right);
        }
        return dfs(root);
    };